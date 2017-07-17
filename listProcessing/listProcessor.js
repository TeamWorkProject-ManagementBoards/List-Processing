function listProcessor(input) {
    let string = input.shift();
    console.log(string);

    for (let command of input) {
        let tokens = command.split("\s+");

        processCommand(tokens[0], tokens);
    }

    function processCommand(command, tokens) {
        switch (command) {
            //Here we make cases for every command
        }
    }
}