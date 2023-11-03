function main() {
    const imageName = new PropBuilder()
        .setKind("string")
        .setName("Image Name")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const imageSize = new PropBuilder()
        .setKind("integer")
        .setName("Size (Gb)")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const imageSocket = new SocketDefinitionBuilder()
        .setArity("one")
        .setName("Image Name")
        .build();

    return new AssetBuilder()
        .addProp(imageName)
        .addProp(imageSize)
        .addOutputSocket(imageSocket)
        .build();
}