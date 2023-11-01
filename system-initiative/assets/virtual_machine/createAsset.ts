function main() {

    const imageNameValueFrom = new ValueFromBuilder()
        .setKind("inputSocket")
        .setSocketName("Image Name")
        .build();

    const imageSocketProp = new PropBuilder()
        .setKind("string")
        .setName("Image Name")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .setValueFrom(imageNameValueFrom)
        .build();

    const memoryProp = new PropBuilder()
        .setKind("integer")
        .setName("Memory (Gb)")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const cpuCoresProp = new PropBuilder()
        .setKind("integer")
        .setName("Cores")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const vncPortProp = new PropBuilder()
        .setKind("integer")
        .setName("VNC Port")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const imageNameSocket = new SocketDefinitionBuilder()
        .setName("Image Name")
        .setArity("one")
        .build();

    return new AssetBuilder()
        .addProp(imageSocketProp)
        .addProp(memoryProp)
        .addProp(cpuCoresProp)
        .addProp(vncPortProp)
        .addInputSocket(imageNameSocket)
        .build();
}