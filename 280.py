#!/usr/bin/env python3
import subprocess
import time
import random

def main():
    # 280 terminal nyancat
    for i in range(280):
        x_pos = random.randint(0, 2000)
        y_pos = random.randint(0, 1000)
        
        subprocess.Popen([
            "xterm", 
            "-geometry", f"60x18+{x_pos}+{y_pos}", 
            "-title", f"DIE_NYAN_{i:03d}",
            "-e", "bash", "-c", "nyancat"
        ])
        
        time.sleep(0.005)
    
    time.sleep(1)