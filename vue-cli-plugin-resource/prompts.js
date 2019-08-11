module.exports = [
    {
        name: 'name',
        type: 'input',
        text: 'Введите название нового ресурса',
        default: 'newResource',
        validate: input => /^[A-Za-z]\w*$/.test(input),
    }

];
