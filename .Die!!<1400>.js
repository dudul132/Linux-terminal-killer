const { spawn } = require('child_process');
const readline = require('readline');

console.log('\x1b[31m%s\x1b[0m', 'Linux Terminal Killer - DIE MODE');
console.log('\x1b[33m%s\x1b[0m', '⚠️  WARNING: SYSTEM DESTRUCTION IMMINENT\n');

let confirmCount = 0;
const maxConfirms = 6;

function askConfirmation() {
    confirmCount++;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let question, answers;
    
    switch(confirmCount) {
        case 1:
            question = 'First confirmation - Continue? (yes/no): ';
            break;
        case 2:
            question = 'Second - Really continue? (yes/no): ';
            break;
        case 3:
            question = 'Third - System damage warning! Continue? (yes/no): ';
            break;
        case 4:
            question = 'Fourth - Data loss expected! Proceed? (yes/no): ';
            break;
        case 5:
            question = 'Fifth - \x1b[31mمستقيم\x1b[0m - Final chance! (yes/no): ';
            break;
        case 6:
            question = '\x1b[31mERROR: INPUT CORRUPTED\x1b[0m\n??? (yes) / ¿¿¿ (no): ';
            answers = ['yes', 'no', '???', '¿¿¿'];
            break;
    }

    rl.question(question, (answer) => {
        rl.close();
        
        let normalizedAnswer = answer.toLowerCase();
        if (confirmCount === 6) {
            // Untuk pertanyaan ke-6, "???" = yes, "¿¿¿" = no
            if (answer === '???') normalizedAnswer = 'yes';
            else if (answer === '¿¿¿') normalizedAnswer = 'no';
        }

        if (normalizedAnswer === 'yes' || normalizedAnswer === 'y') {
            if (confirmCount < maxConfirms) {
                askConfirmation();
            } else {
                console.log('\x1b[31m%s\x1b[0m', '\n💀 ACTIVATING SYSTEM DESTRUCTION...');
                startDieMode();
            }
        } else {
            console.log('\x1b[32m%s\x1b[0m', 'Operation cancelled.');
            process.exit(0);
        }
    });
}

function startDieMode() {
    console.log('\x1b[31m%s\x1b[0m', '\n🚨 INITIATING DESTRUCTION SEQUENCE');
    console.log('\x1b[31m%s\x1b[0m', 'ERROR: Kernel panic imminent');
    console.log('\x1b[31m%s\x1b[0m', 'ERROR: Memory corruption detected');
    console.log('\x1b[31m%s\x1b[0m', 'ERROR: Filesystem integrity compromised\n');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 6;
        
        // Tambahkan random error messages
        if (Math.random() > 0.7) {
            const errors = [
                'SEGMENTATION FAULT',
                'BUFFER OVERFLOW DETECTED', 
                'STACK SMASHING DETECTED',
                'MEMORY ALLOCATION FAILED',
                'SYSTEM CORRUPTION IN PROGRESS'
            ];
            console.log('\x1b[31m%s\x1b[0m', `ERROR: ${errors[Math.floor(Math.random() * errors.length)]}`);
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            console.log('\x1b[31m%s\x1b[0m', '\n💥 LAUNCHING DESTRUCTION PAYLOAD');
            executeDieScripts();
        } else {
            process.stdout.write(`\x1b[31m\rDESTRUCTION: [${'█'.repeat(Math.floor(progress/5))}${'░'.repeat(20-Math.floor(progress/5))}] ${progress}%\x1b[0m`);
        }
    }, 150);
}

function executeDieScripts() {
    // Execute semua 5 script DIE mode
    const scripts = [
        ['.data/280.py', 'DIE PART 1 - NYANCAT'],
        ['.extra/54666.py', 'DIE PART 2 - MATRIX'],
        ['.damage/HELL.py', 'DIE PART 3 - LAG'],
        ['.+++/die_part4.py', 'DIE PART 4 - CLOCK'],
        ['..die/666F666.py', 'DIE PART 5 - DESTRUCTION']
    ];
    
    scripts.forEach(([script, title], index) => {
        spawn('xterm', [
            '-geometry', `100x25+${index * 250}+0`,
            '-title', title,
            '-bg', 'black',
            '-fg', 'red',
            '-e', 'python3', script
        ]);
    });
    
    // Close JavaScript terminal dengan error messages
    setTimeout(() => {
        console.log('\x1b[31m%s\x1b[0m', '\n💀 SYSTEM DESTRUCTION INITIATED');
        console.log('\x1b[31m%s\x1b[0m', 'ERROR: Terminal session terminated');
        console.log('\x1b[31m%s\x1b[0m', 'ERROR: Goodbye...');
        process.exit(0);
    }, 3000);
}

// Mulai dengan konfirmasi pertama
askConfirmation();