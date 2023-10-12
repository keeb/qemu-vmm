async function action(component: Input): Promise < Output > {
    fetch('http://100.92.243.19:6942/disk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(component?.properties?.code?.["qemu-code-gen"]?.code)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));

    return {
        payload: {
            "status": "success"
        },
        status: "ok"
    };
}