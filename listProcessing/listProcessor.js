function listProcessor(input) {
    let list = input.shift().split(" ");
    console.log(list.join(" "));

    for (let command of input) {
        let tokens = command.split(/\s+/g);
        processCommand(tokens[0], tokens);
    }

    function processCommand(command, tokens) {
        let index;

        switch (command) {
            case 'append':
                list.push(tokens[1]);
                console.log(list.join(" "));
                break;
            case 'prepend':
                list.unshift(tokens[1]);
                console.log(list.join(" "));
                break;
            case 'reverse':
                list = list.reverse();
                console.log(list.join(" "));
                break;
            case 'insert':
                index = Number(tokens[1]);
                let stringToInsert = tokens[2];

                if (index < 0 || index >= list.length) {
                    console.log(`Error: invalid index ${index}`);
                    break;
                }

                list.splice(index, 0, stringToInsert);
                console.log(list.join(" "));
                break;
            case 'delete':
                index = Number(tokens[1]);

                if (index < 0 || index >= list.length) {
                    console.log(`Error: invalid index ${index}`);
                    break;
                }

                list.splice(index, 1);
                console.log(list.join(" "));
                break;
            case 'roll':
                if (tokens[1] === 'left') {
                    let firstItem = list.shift();
                    list.push(firstItem);
                    console.log(list.join(" "));
                    break;
                }

                //Here add the roll right function
                break;
            case 'end':
                console.log('Finished');
                break;
        }
    }
}

listProcessor([
    'alpha beta gamma',
    'reverse',
    'append Gosho',
    'roll left'
]);