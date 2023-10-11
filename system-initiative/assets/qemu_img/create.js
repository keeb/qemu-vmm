const machine_data = {
    "name": "js_test",
    "image": "/storage/01/vms/disks/js_test.qcow2",
    "vnc": "12",
    "memory": "8",
    "cpu": "8"
};

const disk_data = {
    "file": "/storage/01/vms/disks/si_test.qcow2",
    "size": "20"
};

fetch('http://localhost:6942/disk', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(disk_data)
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));

setTimeout(function() {
    fetch('http://localhost:6942/disks')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
}, 1000);




/*
fetch('http://localhost:6942', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/