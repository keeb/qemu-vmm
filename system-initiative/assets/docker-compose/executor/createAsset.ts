function main() {

        
    const composeServiceInput = new SocketDefinitionBuilder()
          .setName("Compose Service Definition")
          .setArity("many")
          .build();
  
    return new AssetBuilder()
        .addInputSocket(composeServiceInput)
        .build();
}