let value = prompt('What would you like to do?');
let list = [];
while (value.toLowerCase() !== 'quit') {
if(value.toLowerCase() === 'new') {
    let todo = prompt('What would you like to add to the list?');
    list.push(todo);
    let add = prompt('Would you like to add more items? Y or N')
    while(add.toLowerCase() === 'y') {
        let todo = prompt('What else would you like to add to the list?');
        list.push(todo);
        add = prompt('Would you like to add more items? Y or N')
    }
} else if (value.toLowerCase() === 'list') {
    console.log('**************');
    for(let i = 0; i < list.length; i++) {
        console.log(`${i + 1}: ${list[i]}`);
    }
    console.log('**************');
} else if (value.toLowerCase() === 'delete') {
    let listItem = parseInt(prompt('What numbered item do you want removed?'))
    while(listItem < 1 || listItem > list.length || listItem === NaN) {
        listItem = parseInt(prompt('Try again dumb dumb'));
    }
    let removed = list.splice(listItem - 1, 1);
    console.log(`Removed ${removed}`)
} else {
    prompt('Invalid')
}
value = prompt('What else would you like to do?')
}