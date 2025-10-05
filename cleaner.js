const { spawn } = require('child_process');
const readline = require('readline');

console.log('\x1b[36m%s\x1b[0m', 'System Lag Cleaner');
console.log('\x1b[33m%s\x1b[0m', 'Cleaning up system processes...\n');

function startCleaning() {
    console.log('Scanning for malicious processes...\n');
    
    let progress = 0;
    const cleaningInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            clearInterval(cleaningInterval);
            console.log('\x1b[32m%s\x1b[0m', 'Scan complete!');
            executeCleanup();
        } else {
            process.stdout.write(`\rScanning: [${'='.repeat(Math.floor(progress/5))}${'-'.repeat(20-Math.floor(progress/5))}] ${Math.floor(progress)}%`);
        }
    }, 100);
}

function executeCleanup() {
    console.log('\nCleaning up system...');
    
    // Kill semua proses berbahaya
    const cleanupCommands = [
        'pkill -f nyancat',
        'pkill -f cmatrix', 
        'pkill -f tty-clock',
        'pkill -f xterm',
        'pkill -f "yes "',
        'pkill -f "cat /dev/urandom"',
        'killall xterm 2>/dev/null',
        'rm -f /tmp/junk_*.tmp 2>/dev/null'
    ];
    
    let cleaned = 0;
    cleanupCommands.forEach(cmd => {
        try {
            spawn('bash', ['-c', cmd], { stdio: 'inherit' });
            cleaned++;
            console.log(`Cleaned: ${cmd}`);
        } catch (e) {
            console.log(`Skipped: ${cmd}`);
        }
    });
    
    console.log('\nSystem cleanup completed!');
    console.log(`Cleaned ${cleaned} processes/files`);
    
    process.exit(0);
}

// Auto start cleaning
startCleaning();