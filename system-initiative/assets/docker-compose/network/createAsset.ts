function main() {
    const networkName = new PropBuilder()
        .setKind("string")
        .setName("Network Name")
        .setDocumentation("name of service")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()

    const external = new PropBuilder()
        .setKind("boolean")
        .setName("External?")
        .setDocumentation("external")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("checkbox").build())
        .build()

    const networkDefinition = new SocketDefinitionBuilder()
          .setName("Compose Network")
          .setArity("many")
          .build();
  
    return new AssetBuilder()
        .addProp(networkName)
        .addProp(external)
        .addOutputSocket(networkDefinition)
        .build();
}