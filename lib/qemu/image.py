import subprocess
from os.path import exists

def get_qemu_img_info(disk_name):
    if ".qcow2" not in disk_name:
        disk_name += ".qcow2"

    if exists(disk_name) == False: raise ValueError(f"disk does not exist, {disk_name}")

    command = ["qemu-img", "info", disk_name]
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
    
    info = {}

    while True:
        line = process.stdout.readline()
        if line == '' and process.poll() is not None:
            break
        parts = line.split(':')
        key = parts[0].strip().replace(' ', '_')
        value = ':'.join(parts[1:]).strip()

        if value == '':
            continue

        if not key.startswith(' '):
            current_section = None  # Reset current section when not indented
            info[key] = value
        elif current_section:
            info[current_section][key] = value
        else:
            current_section = key
            info[current_section] = {}
    
    process.wait()
    
    return info
