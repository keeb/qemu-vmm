async function generateCode(component: Input): Promise < Output > {
    const imageName = component?.domain?.["Image Name"]

    return {
        format: "string",
        code: "-drive file=" + imageName
    };
}

