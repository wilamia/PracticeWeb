// 3. Разные способы обращения к первому дочернему элементу body
const firstChild1 = document.body.firstElementChild;
const firstChild2 = document.body.children[0];
const firstChild3 = document.querySelector('body').firstElementChild;
const firstChild4 = document.getElementsByTagName('body')[0].children[0];
const firstChild5 = document.body.childNodes[1]; // возможно текстовый узел

console.log("Первый элемент body (1 способ):", firstChild1);
console.log("Первый элемент body (2 способ):", firstChild2);
console.log("Первый элемент body (3 способ):", firstChild3);
console.log("Первый элемент body (4 способ):", firstChild4);
console.log("Первый элемент body (5 способ):", firstChild5);

// 4. Динамическое создание кнопки прокрутки вверх
const scrollButton = document.createElement("button");
scrollButton.className = "scroll-btn";
scrollButton.textContent = "Наверх";
document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {
    scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
});

// 5. Изменение стиля кнопки и сообщение
scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollButton.style.backgroundColor = "#2ecc71";
    scrollButton.style.borderRadius = "12px";
    scrollButton.textContent = "Оформление изменено!";
    alert("Оформление кнопки изменено!");
});

// 6. Запрос на изменение стилей у элемента
window.addEventListener("load", () => {
    const changeStyle = confirm("Хотите изменить оформление элемента?");
    if (changeStyle) {
        const prop = prompt("Введите CSS-свойство (например: color):");
        const value = prompt(`Введите значение для свойства "${prop}" (например: red):`);
        const target = document.getElementById("styled-element");
        if (prop && value) {
            target.style[prop] = value;
            alert(`Свойство "${prop}" применено со значением "${value}"`);
        } else {
            alert("Недопустимое значение или свойство");
        }
    }
});
