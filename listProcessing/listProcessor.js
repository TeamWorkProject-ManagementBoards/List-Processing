function listProcessor(input) {
    let list = input.shift().split(" ");
    console.log(list.join(" "));

    for (let command of input) {
        let tokens = command.split(/\s+/g);
        let commandProperties = tokens.slice(1);

        processCommand(tokens[0], commandProperties);
    }

    function processCommand(command, tokens) {
        let index;

        switch (command) {
            case 'append':
                if (tokens.length !== 1 || tokens[0].trim() === ''){
                    console.log('Error: invalid command parameters')
                }

                list.push(tokens[0]);
                console.log(list.join(" "));
                break;
            case 'prepend':
                if (tokens.length !== 1 || tokens[0].trim() === ''){
                    console.log('Error: invalid command parameters')
                }

                list.unshift(tokens[0]);
                console.log(list.join(" "));
                break;
            case 'reverse':
                if (tokens.length !== 0){
                    console.log('Error: invalid command parameters')
                    break;
                }

                list = list.reverse();
                console.log(list.join(" "));
                break;
            case 'insert':
                if (tokens.length !== 2 || !Number.isInteger(Number.parseInt(tokens[0])) || tokens[1].trim() === ''){
                    console.log('Error: invalid command parameters');
                    break;
                }

                index = Number(tokens[0]);
                let stringToInsert = tokens[1];

                if (index < 0 || index >= list.length) {
                    console.log(`Error: invalid index ${index}`);
                    break;
                }

                list.splice(index, 0, stringToInsert);
                console.log(list.join(" "));
                break;
            case 'delete':
                if (tokens.length !== 1 || !Number.isInteger(Number.parseInt(tokens[0]))){
                    console.log('Error: invalid command parameters');
                    break;
                }

                 index = Number(tokens[0]);

                if (index < 0 || index >= list.length) {
                    console.log(`Error: invalid index ${index}`);
                    break;
                }

                list.splice(index, 1);
                console.log(list.join(" "));
                break;
            case 'roll':
                //CHECKKKKK
                if(tokens.length !== 1 || !(tokens[0] === 'left' || tokens[0] === 'right')){
                    console.log('Error: invalid command parameters');
                    break;
                }
                if (tokens[0] === 'left') {
                    let firstItem = list.shift();
                    list.push(firstItem);
                    console.log(list.join(" "));
                    break;
                } else if (tokens[0] === 'right'){
                    let lastItem = list.pop();
                    list.unshift(lastItem);
                    console.log(list.join(" "));
                }

                break;
            case 'sort':
                if(tokens.length !== 0){
                    console.log('Error: invalid command parameters');
                    break;
                }

                list = list.sort(function(a,b){
                    return a.localeCompare(b);
                });

                console.log(list.join(" "));
                break;
            case 'count':
                if(tokens.length !== 1 || tokens[0] === ''){
                    console.log('Error: invalid command parameters')
                    break;
                }

                let counter = 0;
                for (let item of list) {
                    if (item === tokens[0]){
                        counter++;
                    }
                }

                console.log(counter);
                break;
            case 'end':
                if (tokens.length !== 0){
                    console.log('Error: invalid command parameters');
                    break;
                }

                console.log('Finished');
                break;
            default:
                console.log('Error: invalid command');
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