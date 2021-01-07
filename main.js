import HashStorage from "./HashStorage.js";

let coctailsStorage = new HashStorage;
const section = document.querySelector('#section');
const buttons =document.querySelector('#buttons')
let k = buttons;

buttons.addEventListener('click', (e) => {
    k.classList.remove('button_active');
    k = e.target;
    k.classList.add('button_active');

    switch (e.target.innerHTML) {
        case 'Ввод рецепта':
            enterNewRecipe();
            break;
        case 'Рецепт напитка':
            showRecipe();
            break;
        case 'Удаление рецепта':
            deleteRecipe();
            break;
        case 'Перечень всех коктейлей':
            showCoctails();
            break;
    }
});

const enterNewRecipe = () => {
    deleteOldItem();

    const name = document.createElement('input');
    name.setAttribute('placeholder', 'Введите название коктейля');

    const alcohol = document.createElement('input');
    alcohol.setAttribute('type', 'checkbox');
    alcohol.setAttribute('class', 'checkbox');
    const label = document.createElement('label');
    const recipe = document.createElement('input');
    recipe.setAttribute('placeholder', 'Введите рецепт');
    const ingredients = document.createElement('input');
    ingredients.setAttribute('placeholder', 'Введите ингридиенты через запятую');
    const button = document.createElement('button');

    button.innerHTML = 'Добавить';
    label.innerHTML = 'Алкогольный'

    section.append(name);
    section.append(label);
    label.append(alcohol);
    section.append(ingredients);
    section.append(recipe);
    section.append(button);

    button.addEventListener('click', () => {
        coctailsStorage.addValue(name.value, {
            alcohol: alcohol.checked,
            ingredients: ingredients.value,
            recipe: recipe.value
        })
    })
}

const showRecipe = () => {
    enterRecipeNameForm('Просмотр рецепта');


    const button = document.querySelector('#button');
    const input = document.querySelector('#input');

    button.addEventListener('click', () => {
        if (!coctailsStorage.getValue(input.value)) {
            alert('Такого коктейля нет');
            input.value = '';
            return 0;
        }

        const h = document.createElement('h2');
        const infoAboutCoctails = coctailsStorage.getValue(input.value);

        deleteOldItem();

        h.innerHTML = `Коктейль "${input.value}" (алкогольный: ${ infoAboutCoctails.alcohol ? 'Да' : 'Нет'})`;
        section.append(h);

        section.classList.toggle('active');

        for (let item in infoAboutCoctails) {
            const div = document.createElement('div');

            switch (item) {
                case 'recipe':
                    div.innerHTML = `Рецепт приготовления: <br/>${infoAboutCoctails[item]}`;
                    break;
                case 'ingredients':
                    div.innerHTML = `Необходимые ингредиенты: <br/> ${
                        infoAboutCoctails[item].split(', ').join('<br/>')
                    }`;
                    break;
            }

            section.append(div);
        }
    })
}

const deleteRecipe = () => {
    enterRecipeNameForm('Удалить');

    const button = document.querySelector('#button');
    const input = document.querySelector('#input');

    button.addEventListener('click', () => {
        coctailsStorage.deleteValue(input.value) ?
            alert('Удаление успешно') :
            alert('Такого коктейля нету');

        input.value = '';
    })
}

const enterRecipeNameForm = (textButton) => {
    deleteOldItem();

    let button = document.createElement('button');
    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Введите названия коктейля');

    button.setAttribute('id', 'button');
    input.setAttribute('id', 'input')

    button.innerHTML = textButton;
    section.append(input);
    section.append(button);
}

const showCoctails = () => {
    deleteOldItem();

    coctailsStorage.getKeys().forEach(elem => {
        let p = document.createElement('p');
        p.innerHTML = elem;
        section.append(p);
    })
}

const deleteOldItem = () => {
    section.classList.remove('active');
    while (section.firstChild) {
        section.firstChild.remove();
    }
}

coctailsStorage.addValue('Маргарита', {
    alcohol: true,
    ingredients: 'Водка Finlandia 50мл, Кофейный ликер 25мл, Лед в кубиках 120 г',
    recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой'
});

coctailsStorage.addValue('Пеликан', {
    alcohol: false,
    ingredients: 'Гренадин Monin 10мл, Клубничный сироп Monin 10мл, Персиковый сок 150мл, Лимонный сок 15мл, ' +
        'Банан 110г, Клубника 50г, Дробленый лед 60г',
    recipe: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, г' +
        'ренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. ' +
        'Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'
});

coctailsStorage.addValue('Бонд', {
    alcohol: true,
    ingredients: 'Водка Finlandia 50мл, Сухой мартини 10мл, Лед в кубиках 3 штуки',
    recipe: 'Смешать в отдельном бокале водку, мартини и кубики льда. После этого охладить бокал для мартини, и аккуратно вылить в него получившуюся смесь.'
});