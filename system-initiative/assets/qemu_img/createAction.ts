async function main(component: Input): Promise < Output > {
    const code = component?.properties?.code?.["image-code-gen"]?.code;

    if (!code) {
        return {
            status: "error",
            message: "no code gen func set"
        }
    }

    console.log("getting my host secret");
    const host = requestStorage.getEnv("API_HOST");

    if (!host) {
        return {
            status: 'error',
            message: 'Host secret must be set'
        }
    }

    const url = `http://${host}/disk`;

    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(code)
    });

    const data = await req.json()
    console.log(data);


    return {
        payload: data,
        status: "ok"
    };
}