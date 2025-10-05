#!/usr/bin/env python3
import subprocess
import time
import random

def main():
    # Buka 50 terminal xterm dengan nyancat
    for i in range(50):
        x_pos = random.randint(0, 1000)
        y_pos = random.randint(0, 600)
        
        subprocess.Popen([
            "xterm", 
            "-geometry", f"80x24+{x_pos}+{y_pos}", 
            "-title", f"NYAN_{i:02d}",
            "-e", "bash", "-c", "nyancat"
        ])
        
        # Delay kecil
        time.sleep(0.05)
    
    # Close terminal Python setelah selesai
    time.sleep(1)

if __name__ == "__main__":
    main()