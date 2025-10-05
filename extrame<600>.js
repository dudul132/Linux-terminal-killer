const { spawn } = require('child_process');
const readline = require('readline');

console.log('\x1b[36m%s\x1b[0m', 'Linux Terminal Killer');
console.log('\x1b[33m%s\x1b[0m', 'Warning: This will overload your system\n');

function confirmExecution() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Continue? (yes/no): ', (answer) => {
        rl.close();
        
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            startProcess();
        } else {
            console.log('\x1b[31m%s\x1b[0m', 'Cancelled');
            process.exit(0);
        }
    });
}

function startProcess() {
    console.log('\nLoading modules...\n');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            clearInterval(loadingInterval);
            console.log('\x1b[32m%s\x1b[0m', 'Modules loaded');
            executeScripts();
        } else {
            process.stdout.write(`\rLoading: [${'='.repeat(Math.floor(progress/5))}${'-'.repeat(20-Math.floor(progress/5))}] ${Math.floor(progress)}%`);
        }
    }, 100);
}

function executeScripts() {
    // Execute script dari folder .data
    spawn('xterm', [
        '-geometry', '100x30',
        '-title', 'Process 1',
        '-e', 'python3', '.data/50.py'
    ]);
    
    // Execute script dari folder .extra
    spawn('xterm', [
        '-geometry', '100x30+400+0',
        '-title', 'Process 2', 
        '-e', 'python3', '.extra/1.py'
    ]);
    
    // Close JavaScript terminal
    setTimeout(() => {
        console.log('\nClosing terminal...');
        process.exit(0);
    }, 2000);
}

confirmExecution();