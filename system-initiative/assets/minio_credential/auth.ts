async function main(secret: Input): Promise < Output > {
    console.log("setting minio credentials")
    requestStorage.setEnv("MINIO_ACCESS_KEY", secret.minio_access_key)
    requestStorage.setEnv("MINIO_SECRET_KEY", secret.minio_secret_key)
}