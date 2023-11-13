async function main(secret: Input): Promise < Output > {
    requestStorage.setEnv("API_HOST", secret.api);
}