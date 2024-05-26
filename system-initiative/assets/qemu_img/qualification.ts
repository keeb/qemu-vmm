async function main(component: Input): Promise < Output > {

    if (component?.resource) {
        console.log("we have a resource, returning")
        return {
            result: 'success',
            message: 'Component qualified'
        };
    }

    console.log("getting my host secret");
    const host = requestStorage.getEnv("API_HOST");

    if (!host) {
        return {
            result: 'failure',
            message: 'Host secret must be set'
        }
    }

    const url = `http://${host}/disks`;

    console.log("making the request")
    const response = await fetch(url);


    console.log("getting the image name")
    const imageName = component?.domain?.["Image Name"]

    console.log("checking the image name")
    if (imageName == null) {
        return {
            result: 'failure',
            message: 'Image name is not provided'
        }
    }

    console.log("append qcow2 to image name")
    var image = imageName + ".qcow2"

    console.log("checking to see if we received a response")
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    console.log("getting the response")
    const resp = await response.json();

    console.log("checking to see if the disk was in the content")
    console.log(resp.disks)

    if (resp.disks.includes(image)) {
        return {
            result: 'failure',
            message: 'Image name is taken'
        };
    }

    console.log("hell yeah, we did it")
    return {
        result: 'success',
        message: 'Component qualified'
    };
}