function main() {
    const itsSecretTime = new SecretDefinitionBuilder()
        .setName("Host")
        .addProp(
            new PropBuilder()
            .setName("host_api")
            .setKind("string")
            .setWidget(
                new PropWidgetDefinitionBuilder()
                .setKind("text")
                .build()
            ).build())
        .build();
        
    return new AssetBuilder()
        .defineSecret(itsSecretTime)
        .build()
}