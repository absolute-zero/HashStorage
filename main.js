import HashStorage from "./HashStorage.js";

let coctailsStorage = new HashStorage;
const section = document.querySelector('#section');
const button = document.querySelector('#button');
const mainInput = document.querySelector('#mainInput')


document.addEventListener('click', (e) => {
    switch (e.target.innerHTML) {
        case 'Ввод рецепта': enterNewRecipe();
            break;
        case 'Рецепт напитка': showRecipe();
            break;
        case 'Удаление рецепта': deleteRecipe();
            break;
        case 'Перечень всех коктейлей': showCoctails();
            break;

    }
});

const enterNewRecipe = () => {

}

const showRecipe = () => {
    section.classList.toggle('active');

    button.addEventListener('click', () => {
        console.log(coctailsStorage.getValue(mainInput.value))
    })
}

const deleteRecipe = () => {
    section.classList.toggle('active');

    button.addEventListener('click', () => {
        coctailsStorage.deleteValue(mainInput.value) ?
            alert('Удаление успешно') :
            alert('Такого коктейля нету');
    })
}

const showCoctails = () => {
    let p = document.createElement('p');
    p.innerHTML = coctailsStorage.getKeys()
    section.append(p);
}

































coctailsStorage.addValue('Маргарита', {
    alcohol: true,
    ingredients: ['Водка Finlandia 50мл', 'Кофейный ликер 25мл', 'Лед в кубиках 120 г'],
    recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой'
});

coctailsStorage.addValue('Пеликан', {
    alcohol: false,
    ingredients: ['Гренадин Monin 10мл', 'Клубничный сироп Monin 10мл', 'Персиковый сок 150мл', 'Лимонный сок 15мл',
        'Банан 110г', 'Клубника 50г', 'Дробленый лед 60г'],
    recipe: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, г' +
        'ренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. ' +
        'Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'
});

coctailsStorage.addValue('Бонд', {
    alcohol: true,
    ingredients: ['Водка Finlandia 50мл', 'Сухой мартини 10мл', 'Лед в кубиках 3 штуки'],
    recipe: 'Смешать в отдельном бокале водку, мартини и кубики льда. После этого охладить бокал для мартини, и аккуратно вылить в него получившуюся смесь.'
});




// console.log(coctailsStorage);
// console.log(coctailsStorage.getKeys());