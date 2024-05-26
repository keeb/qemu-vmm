function main() {

    const mixinPropDef = new PropBuilder()
        .setKind("string")
        .setName("Mixin")
        .setDocumentation("mixin")
        .setWidget(new PropWidgetDefinitionBuilder().setKind("text").build())
        .build()
        
    const mixinSocketDefinition = new SocketDefinitionBuilder()
          .setName("Compose Network")
          .setArity("many")
          .build();
  
    return new AssetBuilder()
        .addOutputSocket(mixinSocketDefinition)
        .build();
}