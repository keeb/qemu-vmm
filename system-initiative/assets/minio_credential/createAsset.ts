function main() {
    const aliasProp = new PropBuilder()
        .setName("minio_alias")
        .setKind("string")
        .setWidget(
            new PropWidgetDefinitionBuilder()

            .setKind("text")
            .build()
        ).build();

    const urlProp = new PropBuilder()
        .setName("minio_host")
        .setKind("string")
        .setWidget(
            new PropWidgetDefinitionBuilder()
            .setKind("text")
            .build()
        ).build();

    const itsSecretTime = new SecretDefinitionBuilder()
        .setName("Minio Credentials")
        .addProp(
            new PropBuilder()
            .setName("minio_access_key")
            .setKind("string")
            .setWidget(
                new PropWidgetDefinitionBuilder()
                .setKind("text")
                .build()
            ).build())
        .addProp(
            new PropBuilder()
            .setName("minio_secret_key")
            .setKind("string")
            .setWidget(
                new PropWidgetDefinitionBuilder()
                .setKind("text")
                .build()
            ).build())
        .build();

    const socketName = new SocketDefinitionBuilder()
        .setName("minio_alias")
        .setArity("many")
        .build();

    return new AssetBuilder()
        .addProp(aliasProp)
        .addProp(urlProp)
        .defineSecret(itsSecretTime)
        .addOutputSocket(socketName)
        .build()
}