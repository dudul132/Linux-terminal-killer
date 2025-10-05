const { spawn } = require('child_process');
const readline = require('readline');

console.log('\x1b[31m%s\x1b[0m', 'Linux Terminal Killer - HARD MODE');
console.log('\x1b[33m%s\x1b[0m', 'WARNING: This will severely overload your system\n');

function firstConfirm() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Are you REALLY sure? (yes/no): ', (answer) => {
        rl.close();
        
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            secondConfirm();
        } else {
            console.log('\x1b[32m%s\x1b[0m', 'Smart choice. Exiting.');
            process.exit(0);
        }
    });
}

function secondConfirm() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('FINAL WARNING: This may crash your system. Continue? (yes/no): ', (answer) => {
        rl.close();
        
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            console.log('\x1b[31m%s\x1b[0m', '\nYou asked for it...');
            startAttack();
        } else {
            console.log('\x1b[32m%s\x1b[0m', 'Wise decision. Aborting.');
            process.exit(0);
        }
    });
}

function startAttack() {
    console.log('\nInitializing system overload...\n');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 12;
        if (progress >= 100) {
            clearInterval(loadingInterval);
            console.log('\x1b[31m%s\x1b[0m', 'Launching terminal assault');
            executeAllScripts();
        } else {
            process.stdout.write(`\rPreparing: [${'='.repeat(Math.floor(progress/5))}${'-'.repeat(20-Math.floor(progress/5))}] ${Math.floor(progress)}%`);
        }
    }, 100);
}

function executeAllScripts() {
    // Execute semua 3 script sekaligus
    spawn('xterm', [
        '-geometry', '100x30',
        '-title', 'NYANCAT ASSAULT',
        '-e', 'python3', '.data/200.py'
    ]);
    
    spawn('xterm', [
        '-geometry', '100x30+400+0',
        '-title', 'MATRIX ATTACK',
        '-e', 'python3', '.extra/333.py'
    ]);
    
    spawn('xterm', [
        '-geometry', '100x30+800+0',
        '-title', 'BONUS LAG',
        '-e', 'python3', '.damage/hardPB.py
    ]);
    
    // Close JavaScript terminal
    setTimeout(() => {
        console.log('\nTerminal closing... Good luck.');
        process.exit(0);
    }, 1500);
}

// Start dengan konfirmasi pertama
firstConfirm();