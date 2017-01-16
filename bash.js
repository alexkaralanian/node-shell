

process.stdout.write('prompt > ');

const commands = require ('./commands')

process.stdin.on('data', function (data) {

    var cmd = data.toString().trim().split(" ")


    if(cmd[0] === 'pwd') {
        commands.pwd()
    } else if (cmd[0] === 'date') {
        commands.date()
    } else if (cmd[0] === 'ls'){
        commands.ls()
    } else if (cmd[0] === 'echo'){
        commands.echo(cmd)
    } else {
        commands.print(cmd)
    }
});






