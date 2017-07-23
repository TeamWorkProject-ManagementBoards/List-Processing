function listProcessor(input) {
    let list = input.shift().split(" ");
    console.log(list.join(" "));

    for (let command of input) {
        let tokens = command.split(/\s+/g);
        let commandProperties = tokens.slice(1);
        try {
            let result = processCommand(tokens[0], commandProperties);
            console.log(result);
        }
        catch(err) {
            console.log(err.message)
        }
    }

    function processCommand(command, tokens) {
        let index;

        switch (command) {
            case 'append':
                if (tokens.length !== 1 || tokens[0].trim() === ''){
                    throw new Error('Error: invalid command parameters');
                }

                list.push(tokens[0]);

                return list.join(" ");
            case 'prepend':
                if (tokens.length !== 1 || tokens[0].trim() === ''){
                    throw new Error('Error: invalid command parameters');
                }

                list.unshift(tokens[0]);

                return list.join(" ");
            case 'reverse':
                if (tokens.length !== 0){
                    throw new Error('Error: invalid command parameters');
                }

                list = list.reverse();

                return list.join(" ");
            case 'insert':
                if (tokens.length !== 2 || !Number.isInteger(Number.parseInt(tokens[0])) || tokens[1].trim() === ''){
                    throw new Error('Error: invalid command parameters');
                }

                index = Number(tokens[0]);
                let stringToInsert = tokens[1];

                if (index < 0 || index >= list.length) {
                    throw new Error(`Error: invalid index ${index}`);
                }

                list.splice(index, 0, stringToInsert);

                return list.join(" ");
            case 'delete':
                if (tokens.length !== 1 || !Number.isInteger(Number.parseInt(tokens[0]))){
                    throw new Error('Error: invalid command parameters');
                }

                 index = Number(tokens[0]);

                if (index < 0 || index >= list.length) {
                    throw new Error(`Error: invalid index ${index}`);
                }

                list.splice(index, 1);

                return list.join(" ");
            case 'roll':
                if(tokens.length !== 1 || !(tokens[0] === 'left' || tokens[0] === 'right')){
                    throw new Error('Error: invalid command parameters');
                }
                if (tokens[0] === 'left') {
                    let firstItem = list.shift();
                    list.push(firstItem);

                    return list.join(" ");
                } else if (tokens[0] === 'right'){
                    let lastItem = list.pop();
                    list.unshift(lastItem);

                    return list.join(" ");
                }

                break;
            case 'sort':
                if(tokens.length !== 0){
                    throw new Error('Error: invalid command parameters');
                }

                list = list.sort(function(a,b){
                    return a.localeCompare(b);
                });

                return list.join(" ");
            case 'count':
                if(tokens.length !== 1 || tokens[0] === ''){
                    throw new Error('Error: invalid command parameters');
                }

                let counter = 0;
                for (let item of list) {
                    if (item === tokens[0]){
                        counter++;
                    }
                }

                return counter;
            case 'end':
                if (tokens.length !== 0){
                    throw new Error('Error: invalid command parameters');
                }

                return 'Finished';
            default:
                throw new Error('Error: invalid command');
        }
    }
}

listProcessor([
    'alpha beta gamma',
    'append delta',
    'prepend 00',
    'invalid command',
    'insert 1 ins',
    'insert -1 ins',
    'insert 1',
    'delete 3',
    'delete invalid',
    'delete 5',
    'roll left',
    'roll',
    'roll right',
    'just roll',
    'reverse',
    'sort',
    'sort 3',
    'count alpha',
    'append alpha',
    'count alpha',
    'count ALPHA',
    'end 1',
    'END',
    'end'
]);