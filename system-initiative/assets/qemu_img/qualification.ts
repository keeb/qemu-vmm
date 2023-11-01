async function main(component: Input): Promise < Output > {
    const response = await fetch('http://100.92.243.19:6942/disks');

    const imageName = component?.domain?.["Image Name"]
    if (imageName == null) {
        return {
            result: 'failure',
            message: 'Image name is not provided'
        }
    }

    var image = imageName + ".qcow2"

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const resp = await response.json();

    if (resp.disks.includes(image)) {
        return {
            result: 'failure',
            message: 'Image already exists'
        }
    }

    return {
        result: 'success',
        message: 'Component qualified'
    };
}