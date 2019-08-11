module.exports = [
    {
        name: 'name',
        type: 'input',
        text: 'Введите название нового ресурса',
        validate: input => input!=='newResource' && /^[A-Za-z]\w*$/.test(input),
    }

];
