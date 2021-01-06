class HashStorage {
    addValue(key, value) {
        this[key] = value;
    }

    getValue(key) {
        return this[key];
    }

    deleteValue(key) {
        if (this[key]) {
            delete this[key];
            return true;
        }
        return false;
    }

    getKeys() {
        let arr = []
        for (let key in this) {
            arr.push(key);
        }
        return arr;
    }
}

export default HashStorage;




// console.log(obj.deleteValue('123'));


// Разработать класс HashStorage (в файле HashStorage.js) для хранения произвольных пар ключ-значение. Ключом может быть любая строка; значение может
// иметь любой тип, в том числе сложный (объект, массив или функция).
// Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
// addValue(key,value) — сохраняет указанное значение под указанным ключом;
// getValue(key) — возвращает значение по указанному ключу либо undefined;
// deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
// getKeys() — возвращает массив, состоящий из одних ключей.
//     Класс не должен использовать никаких глобальных переменных, не должен «пачкать экран». Класс должен быть универсальным, т.е. не зависеть
//     ни от структуры хранимых данных, ни от способа их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может
//     использоваться и вообще без веб-страницы).


// Создать объект-потомок coctailsStorage класса HashStorage для хранения рецептов коктейлей. Ключом является название напитка, а его значением —
// информация о напитке (алкогольный напиток или нет, строка с ингредиентами, с рецептом приготовления и т.д. (по желанию)).
// На странице сверстать кнопки:
//     «ввод рецепта» — последовательно спрашивает название напитка, алкогольный он или нет, какие ингредиенты необходимы и в каких пропорциях,
//     рецепт его приготовления (и т.д.); сохраняет всю эту информацию о коктейле в хранилище (coctailsStorage).
//     «рецепт напитка» — спрашивает название напитка и выдаёт на страницу (желательно) или в консоль информацию о нём по примеру, приведённому ниже,
// либо сообщение об отсутствии такого напитка в хранилище.
//     «удаление рецепта» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения пользователю.
//     «перечень всех коктейлей» — выводит список названий коктейлей из хранилища.
// ! Желательно, чтобы в хранилище coctailsStorage уже было 3-5 коктейлей, добавление которых реализовано через метод addVale.