import requests
from os import environ
import unittest
import json
import os
import time

host = environ.get("QEMU_API_HOST", "localhost")
port = environ.get("QEMU_API_PORT", "6942")

base_url = f"http://{host}:{port}/"

class IntegrationTest(unittest.TestCase):
    def test_basic_isos(self):
        image_list = requests.get(base_url + "iso").json().get("images")
        self.assertTrue("proxmox-ve_8.0-2.iso" in image_list)

    def test_basic_disks(self):
        self.test_create_disk()
        disk_list = requests.get(base_url + "disks").json().get("disks")
        self.assertTrue("integration_test.qcow2" in disk_list)

    def test_get_disk(self):
        self.test_create_disk()
        disk_info = requests.get(base_url + "disk/integration_test.qcow2").json()
        self.assertTrue(disk_info.get("file_format") == "qcow2")

    def test_create_disk(self):
        # cleanup previous run
        test_file = "/storage/01/vms/disks/integration_test.qcow2"
        disk_name = "integration_test.qcow2"
        if os.path.exists(test_file):
            os.remove(test_file)

        test_file_size = "10"
        disk_test = requests.post(base_url + "disk", json.dumps({"file": disk_name, "size": test_file_size}), headers={"Content-Type": "application/json"})
        self.assertTrue(disk_test.status_code == 201)
        time.sleep(1)
        self.assertTrue(os.path.exists(test_file))

    def test_create_machine(self):
        # cleanup previous run
        test_file = "/storage/01/vms/machines/integration_test.sh"
        if os.path.exists(test_file):
            os.remove(test_file)

        machine_request_dict = {
            "name": "integration_test", 
            "image": "/storage/01/vms/disks/integration_test.qcow2", 
            "vnc": None, 
            "memory": "8", 
            "cpu": "8"
        }

        machine_request = requests.post(base_url + "/machine", json.dumps(machine_request_dict), headers={"Content-Type": "application/json"})
        self.assertTrue(machine_request.status_code == 200)
        time.sleep(0.2)
        self.assertTrue(os.path.exists(test_file))


if __name__ == "__main__":
    unittest.main()