function main() {
    const secretKey = new SecretPropBuilder()
        .setName("Minio Credentials")
        .setSecretKind("Minio Credentials")
        .build();

    const alias = new SocketDefinitionBuilder()
        .setName("minio_alias")
        .setArity("one")
        .build();


  
    const nameProp = new PropBuilder()
        .setName("minio_bucket_name")
        .setKind("string")
        .setWidget(
            new PropWidgetDefinitionBuilder()
            .setKind("text")
            .build()
        ).build();

    return new AssetBuilder()
        .addInputSocket(alias)
        .addSecretProp(secretKey)
        .addProp(nameProp)
        .build()
}