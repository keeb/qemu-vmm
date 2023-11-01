async function main(component: Input): Promise < Output > {
    const imageName = component?.domain?.["Image Name"];
    const imageSize = component?.domain?.["Size (Gb)"];

    const payload = {
        "file": imageName,
        "size": imageSize
    };
    return {
        format: "json",
        code: JSON.stringify(payload)
    };
}