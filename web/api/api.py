import os

from flask import Flask, jsonify, request
from flask_cors import CORS
from lib.qemu import create_disk, iso, disks, machines, create_machine

app = Flask(__name__)
CORS(app)


ISO_DIRECTORY = "/storage/01/vms/iso"
DISK_DIRECTORY = "/storage/01/vms/disks"
MACHINES_DIRECTORY = "/storage/01/vms/machines"

@app.route("/iso", methods=["GET"])
def get_iso():
    return jsonify(iso(ISO_DIRECTORY)), 200

@app.route("/disk", methods=["POST"])
def new_disk():
    """
    {
        "file": "/path/to/file"
        "size:": "10"
    }
    """
    disk_path = request.json.get("file", "")
    disk_size = request.json.get("size", "")

    if disk_path == "" or disk_size == "":
        return jsonify({"result": "error"}), 201
    try:
        create_disk(disk_path, disk_size)
    except Exception:
        return jsonify({"result": "error"}), 201
    
    return jsonify({"result": "success"}), 200

@app.route("/disks", methods=["GET"])
def disk_list():
    return jsonify(disks(DISK_DIRECTORY)), 200


@app.route("/machines", methods=["GET"])
def get_machines():
    return jsonify(machines(MACHINES_DIRECTORY)), 200

@app.route("/machine", methods=["POST"])
def new_machine():
    name = request.json.get("name", "")
    image = request.json.get("image", "")
    vnc = request.json.get("vnc", None)
    memory = request.json.get("memory", "8")
    cpu = request.json.get("cpu", "8")

    if name == "" or image == "":
        return jsonify({"result": "error"}), 201

    create_machine(f"{MACHINES_DIRECTORY}/{name}", image, vnc, memory, cpu)

    return jsonify({"result": "success"}), 200

@app.route("/", methods=["POST"])
def main():
    rjson = request.json
    if not rjson or rjson.get("a") is None:
        return "", 201
    return "", 201


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=os.getenv("QEMU_API_PORT", default=4000))    
