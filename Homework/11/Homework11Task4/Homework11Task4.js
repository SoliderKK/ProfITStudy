'use strict'
//в html файле добавил тег <script src="Homework12Task4.js"></script>
function hashFunction(input, notation) {
    let str = input.toString();
    let sum = 0;
    for(let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i);
    return (sum % 256).toString(notation);
}
function signUp() {
    let name = prompt("Введите имя пользователя");
    for(let user of accounts) {
        if(user.name == name) {
            alert("Пользователь с таким именем уже существует!");
            return;
        }
    }
    let password = hashFunction(prompt("Введите пароль"));
    accounts.push({name: name, password: password});
    alert("Регистрация прошла успешно!")
}
function signIn() {
    let name = prompt("Введите имя пользователя");
    let password = hashFunction(prompt("Введите пароль"));
    let id;
    let i = 0;
    //можно было реализовать через .findIndex(), но сделал уже так
    findUser: while(isNaN(id) && i < accounts.length) { 
        if(accounts[i].name == name) {
            id = i;
            break findUser;
        }
        i++;
    }
    if(isNaN(id)) {
        alert("Такого пользователя не существует!");
        return;
    }
    if(accounts[id].password == password) {
        alert("Вход прошел успешно!")
    } else {
        alert("Неверный пароль!")
    }
}

//наверное удобнее было бы через Map реализовать, но в задании написано массив объектов
let accounts = [];
accounts[0] = {name: "test", password: hashFunction("1234")};