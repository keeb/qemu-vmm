async function qualification(component: Input): Promise < Output > {

    const code = component.code?.["drive_option"]?.code;
    if (!code) {
        return {
            result: "failure",
            message: "component doesnt have proper representation"
        }
    }

    if (!component.domain?.["Image Name"]) {
        return {
            result: "failure",
            message: "Image Name is not set"
        }
    }

    if (!component.domain?.["Size (Gb)"]) {
        return {
            result: "failure",
            message: "Size is not set"
        }
    }

    // could add a function here to see if we have enough space to be able to create it
    // however, for qemu-img it doesn't actually take up the full size

    return {
        result: 'success',
        message: 'Component qualified'
    };
}