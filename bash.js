 process.stdout.write('prompt >');
//Prints what you put into the code
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();
    
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
// });

//console.log(__dirname);

//PWD TEST
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    
    if(cmd === 'pwd'){
    process.stdout.write(__dirname);
    }
    else return process.stdout.write('\nprompt > ');
});


// process.stdin.on('input', (input) => {
//     //let input = process.stdout.write('');
    
//     if(input == 'pwd'){
//         console.log(__dirname);    
//     }
// });