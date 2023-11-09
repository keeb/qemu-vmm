async function main(secret: Input): Promise < Output > {
    console.log("setting the api host");
    requestStorage.setEnv("API_HOST", secret.api);
}