async function main(component: Input): Promise < Output > {
    const alias = component.properties.domain?.minio_alias
    const bucketName = component.properties.domain?.minio_bucket_name

    const concat = alias + "/" + bucketName

    const authCheck = await siExec.waitUntilEnd("mc", [
        "mb",
        concat,

    ]);
}