function listProcessor(input) {
    let string = input.shift();
    console.log(string);

    for (let command of input) {
        let tokens = command.split(/\s+/g);
        let commandProperties = tokens.slice(1);

        processCommand(tokens[0], commandProperties);
    }

    function processCommand(command, tokens) {
        switch (command) {
            case 'append': 
                string = string + ' ' + tokens;
                console.log(string);
                break;
            case 'prepend':
                string = tokens + ' ' + string;
                console.log(string);
                break;
            case 'reverse':
                string = string.split(' ').reverse().join(' ');
                console.log(string);
                break;
            case 'end':
                console.log('Finished');
                break;
            //Here we make cases for every command
        }
    }
}