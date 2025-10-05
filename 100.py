#!/usr/bin/env python3
import subprocess
import time
import random

def main():
    for i in range(100):
        x_pos = random.randint(0, 1200)
        y_pos = random.randint(0, 700)
        
        subprocess.Popen([
            "xterm", 
            "-geometry", f"80x24+{x_pos}+{y_pos}", 
            "-title", f"NYAN_{i:03d}",
            "-e", "bash", "-c", "nyancat"
        ])
        
        time.sleep(0.03)
    
    time.sleep(1)

if __name__ == "__main__":
    main()