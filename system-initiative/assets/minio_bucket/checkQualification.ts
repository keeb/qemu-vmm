async function main(component: Input): Promise < Output > {
    const accessKey = requestStorage.getEnv("MINIO_ACCESS_KEY")
    const secretKey = requestStorage.getEnv("MINIO_ACCESS_KEY")

    if (accessKey == null || secretKey == null) {
        return {
            result: 'failure',
            message: 'Credentials not set'
        };
    }
    return {
        result: 'success',
        message: 'Component qualified'
    };
}