function main() {
    const itsSecretTime = new SecretDefinitionBuilder()
        .setName("Host")
        .addProp(
            new PropBuilder()
            .setName("api")
            .setKind("string")
            .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
            .build()
        ).build();

    return new AssetBuilder()
        .defineSecret(itsSecretTime)
        .build();
}