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
                } else if (tokens[1] === 'right'){
                    let lastItem = list.pop();
                    list.unshift(lastItem);
                    console.log(list.join(" "));
                }
                break;
            case 'sort':
                list = list.sort(function(a,b){
                    return a.localeCompare(b);
                });

                console.log(list.join(" "));
                break;
            case 'count':
                let counter = 0;
                for (let item of list) {
                    if (item === tokens[1]){
                        counter++;
                    }
                }

                console.log(counter);
            case 'end':
                console.log('Finished');
                break;
        }
    }
}

listProcessor([
    'alpha beta gamma gamma',
    'reverse',
    'append Gosho',
    'roll right',
    'sort',
    'count gamma',
    'insert 4 ins'
]);