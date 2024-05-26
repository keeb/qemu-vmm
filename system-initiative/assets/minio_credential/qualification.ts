async function main(component: Input): Promise < Output > {
    const accessKey = requestStorage.getEnv("MINIO_ACCESS_KEY")
    const secretKey = requestStorage.getEnv("MINIO_SECRET_KEY")
    const alias = component.domain?.minio_alias || null;
    const url = component.domain?.minio_host || null;

    if (alias == null || url == null) {
        return {
            result: "failure",
            message: "nope"
        }
    }

    const authCheck = await siExec.waitUntilEnd("mc", [
        "alias",
        "set",
        alias,
        url,
        accessKey,
        secretKey
    ]);

    console.log(authCheck)

    return {
        result: "success"
    }
}