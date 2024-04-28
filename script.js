'use strict';

/* 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки */

const arr = [1, 5, 7, 9];

const minNumber = (numbers) => Math.min(numbers);
console.log(minNumber(...arr));

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */


function createCounter() {
    let count = 0;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        }
    }
};

const calk = createCounter();


console.log(calk.decrement());
console.log(calk.decrement());
console.log(calk.decrement());
console.log(calk.decrement());
console.log(calk.increment());
console.log(calk.increment());
console.log(calk.increment());
console.log(calk.increment());


/* 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */

const rootElement = document.getElementById('root');

function findElementByClass(element, clas) {
    if (element.classList.contains(clas)) {
        return element;
    } else {
        element.firstElementChild;
        return findElementByClass(element.firstElementChild, clas);
    }
}

const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

