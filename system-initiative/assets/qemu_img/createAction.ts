async function main(component: Input): Promise < Output > {
    const req = await fetch('http://100.92.243.19:6942/disk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(component?.properties?.code?.["image-code-gen"]?.code)
    });

    const data = await req.json()
    console.log(data);

    return {
        payload: {
            "status": "success"
        },
        status: "ok"
    };
}