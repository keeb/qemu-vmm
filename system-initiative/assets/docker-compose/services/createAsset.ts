function main() {
    const serviceName = new PropBuilder()
        .setKind("string")
        .setName("name")
        .setDocumentation("name of service")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const image = new PropBuilder()
        .setKind("string")
        .setName("image")
        .setDocumentation("image name")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const ExposedPorts = new PropBuilder()
        .setKind("string")
        .setName("Exposed Ports")
        .setDocumentation("Exposed Ports")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const container_name = new PropBuilder()
        .setKind("string")
        .setName("Container Name")
        .setDocumentation("container name")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const command = new PropBuilder()
        .setKind("string")
        .setName("Command")
        .setDocumentation("command")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const mixinSocket = new SocketDefinitionBuilder()
        .setName("Mixin")
        .setArity("many")
        .build();

    const serviceSocket = new SocketDefinitionBuilder()
        .setName("Compose Service Definition")
        .setArity("many")
        .build();

     const networkSocket = new SocketDefinitionBuilder()
        .setName("Compose Network")
        .setArity("many")
        .build(); 

    return new AssetBuilder()
        .addProp(serviceName)
        .addProp(image)
        .addProp(ExposedPorts)
        .addProp(container_name)
        .addProp(command)
        .addInputSocket(mixinSocket)
        .addInputSocket(networkSocket)
        .addOutputSocket(serviceSocket)
        .build();
}