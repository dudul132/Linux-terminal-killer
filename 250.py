#!/usr/bin/env python3
import subprocess
import time
import random

def main():
    # Part 1: 250 terminal nyancat
    for i in range(250):
        x_pos = random.randint(0, 1800)
        y_pos = random.randint(0, 900)
        
        subprocess.Popen([
            "xterm", 
            "-geometry", f"70x20+{x_pos}+{y_pos}", 
            "-title", f"NYAN_IMP_{i:03d}",
            "-e", "bash", "-c", "nyancat"
        ])
        
        time.sleep(0.01)
    
    time.sleep(2)

if __name__ == "__main__":
    main()