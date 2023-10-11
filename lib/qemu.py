from os import popen, listdir
from os.path import exists

def start_machine_command(image, vnc=None, memory=8, cpu=4):
    if image == "":
        raise Exception("image cannot be empty")  
    
    command_parts = ["qemu-system-x86_64 -enable-kvm -machine type=q35,accel=kvm -netdev bridge,id=hn0 -device virtio-net-pci,netdev=hn0,id=nic2,mac=00:00:00:00:00:06"]
    command_parts.extend([f"-m {memory}G", f"-smp {cpu}", f"-drive file={image}"])
    
    if vnc:
        command_parts.append(f"-vnc {vnc}")
    
    return " ".join(command_parts)


def create_disk_command(name, size):
    if ".qcow2" not in name:
        name += ".qcow2"
    if "G" not in size:
        size += "G"

    ret = f"qemu-img create -f qcow2 -o preallocation=metadata {name} {size}"
    return ret

def create_disk(name, size):
    # check to see if disk exists before creating it
    if exists(name):
        raise Exception("disk already exists")

    popen(create_disk_command(name, size))

def start_virtual_machine(name):
    pass

def disks(directory):
    content = listdir(directory)
    disk_list = {}
    filtered_list = [item for item in content if ".qcow2" in item]
    disk_list["disks"] = filtered_list
    return disk_list

def iso(directory):
    content = listdir(directory)
    iso_list = {}
    filtered_list = [item for item in content if ".iso" in item]
    iso_list["images"] = filtered_list
    return iso_list

def machines(directory):
    content = listdir(directory)
    machine_list = {}
    filtered_list = [item for item in content if ".sh" in item]
    machine_list["machines"] = filtered_list
    return machine_list

def create_machine(name, image, vnc=None, memory=8, cpu=4):
    shell_content = start_machine_command(image, vnc, memory, cpu)
    print(f"{name}.sh")
    with open(f"{name}.sh", "w") as f:
        f.write(shell_content)
        f.close()
    create_unit_file(name)

def create_unit_file(name):
    base_path = "/".join(name.split("/")[:-1])
    fname = name.split("/")[-1]
    unit_content = f"""
[Unit]
Description=qemu unit for {fname}



[Service]
WorkingDirectory={base_path}
ExecStart=sh {fname}.sh
Restart=always
User=root

[Install]
WantedBy=multi-user.target
"""
    with open(f"{name}.service", "w") as f:
        f.write(unit_content)
        f.close()


def __init__():
    pass


