
module.exports = {

    pwd: function (){
            let currentPath = process.cwd()
            process.stdout.write('You typed: ' + currentPath)
            process.stdout.write("prompt > ");
        },

    date: function(){
        let date = new Date()
        process.stdout.write('You typed: ' + date)
        process.stdout.write("prompt > ");
    },

    print: function(cmd){
        process.stdout.write('You typed: ' + cmd)
        process.stdout.write("prompt > ");
    },

    ls: function(){
        var fs = require('fs')
        process.stdout.write('List folders:\n')

        var resultsArr = []

        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                resultsArr.push(file)
                if (resultsArr.length === 4){
                    process.stdout.write(resultsArr.join("\n") + "\n");
                    process.stdout.write("prompt > ");
                };
            });
        });
    },

    echo: function(cmd){
        var str = ''
        for (var i = 1; i < cmd.length; i++) {
            str += cmd[i] + ' '
        }
        process.stdout.write('Echo: ' + str.trim() + "\n")
        process.stdout.write("prompt > ");
    }
}





