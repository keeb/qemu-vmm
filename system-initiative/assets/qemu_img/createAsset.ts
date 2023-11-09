function main() {
    const imageName = new PropBuilder()
        .setKind("string")
        .setName("Image Name")
        .setDocumentation("Filename of the image. Make sure there are no spaces.")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const imageSize = new PropBuilder()
        .setKind("integer")
        .setName("Size (Gb)")
        .setDocumentation("Size of the image in gigabytes.")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const hostProp = new SecretPropBuilder()
        .setName("Host")
        .setSecretKind("api")
        .build();

    return new AssetBuilder()
        .addProp(imageName)
        .addProp(imageSize)
        .addSecretProp(hostProp)
        .build();
}