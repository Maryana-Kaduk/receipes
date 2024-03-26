const inputSearch = document.querySelector('#inputSearch');
const findButton = document.querySelector('#find');
const error = document.querySelector('#error');

const nameHeading = document.querySelector('#name');
const ingridients = document.querySelector('#ingridients');
const instructions = document.querySelector('#instructions');
const image = document.querySelector('#img');

const boldTextIngridients = document.querySelector('#boldTextIngridients');
const boldTextInstructions = document.querySelector('#boldTextInstructions');

const infoSection = document.querySelector('.info');

const checkInputValue = (element) => {
    return element.value.match(/[0-9]/);
};

findButton.addEventListener('click', () => {
    if(inputSearch.value === '' || inputSearch.value.match(/^\s+$/) || checkInputValue(inputSearch)) {
        inputSearch.value = '';
        error.textContent = 'Будь ласка, введіть назву страви';

        setTimeout(() => {
            error.textContent = '';
        }, 3000);
    } else {
        let newPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve();
            }, 1000);
        });

        newPromise
        .then(function() {
         // let bdpromise = new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => {
                setTimeout(function() {
                    let meals = [
                        {mealName: 'Яєчня', ingridients: {ing1: 'яйця - 2 шт', ing2: 'сіль - за смаком', ing3: 'оливкова олія - 1-2 ст.л або 30 гр вершкового.'}, instructions: 'Сковороду з антипригарним покриттям прогріти на плиті, влити олію. Після цього на 30-40 секунд вимкнути газ або прибрати сковороду на вимкнену конфорку - завдяки такому лайфхаку яйця прожаряться рівномірно. Яйця розбити на плоску тарілку, а потім перелити на сковороду. Поставити мінімальний вогонь і смажити яйця 4-5 хвилин. Солити яйця краще в кінці або вже при подачі на стіл.', imgSRC: './images/eggs.jpg'}, 

                        {mealName: 'Макарони по флотськи', ingridients: {ing1: '225 грам макаронів', ing2: '275 грам яловичини', ing3: '175 грам ріпчастої цибулі', ing4: '50 грам вершкового масла', ing5: '3 ст. л рослинної олії', ing6: 'сіль, перець', ing7: '1, 25 літра води'}, instructions: "Ріпчасту цибулю очистити, нарізати кубиками, обсмажити на олії до золотистого кольору. Додати 25 грам вершкового масла і смажити ще 3-5 хвилин. Яловичину нарізати шматочками і пропустити через м'ясорубку. Обсмажити фарш на окремій сковороді 5 хвилин, потім влити 1 ст.л рослинної олії, зменшити вогонь і смажити 7-8 хвилин. З'єднати фарш і цибулю, посолити, поперчити, накрити кришкою і залишити.Закип'ятити воду в каструлі, посолити її, викласти макарони. Варити їх по інструкції, зазначеній на упаковці. Відкинути на друшляк, додати 25 грам вершкового масла. Викласти макарони до фаршу з цибулею і перемішати.Макарони по флотськи з тушонкою і овочам", imgSRC: './images/pasta.webp'}, 

                        {mealName: 'Салат Цезар', ingridients: {ing1: '300 гр. курячого філе', ing2: '400 гр. салату Айсберг', ing3: '10 томатів черрі', ing4: '100 гр. пармезану', ing5: 'приблизно 250 гр. батон', ing6: '1 зубок часнику', ing7: '1 ст. ложка рослинного масла', ing8: 'щіпка солі і трохи меленого перцю'}, instructions: "Перетворіть батон на сухарики. Наріжте хліб невеликими кубиками і обсушіть їх на сковороді, змащеною маслом. Для аромату додайте подрібнений зубок часнику. Батон повинен підрум'янитися, коли сухарики стануть хрусткими, перекладіть їх в інший посуд, щоб вони не пригоріли на сковороді. Наріжте куряче філе, у вас повинні вийти невеликі медальйони, не дуже дрібні, але і не дуже великі. Натріть м'ясо сіллю і перцем, а потім обсмажте його на сковороді, не забудьте додати рослинне масло - шматочки не повинні бути пересушеними. Коли філе підрум'яниться, зніміть його з вогню і дайте йому охолонути. Помийте помідори і наріжте кожний з них приблизно на шість частин. Салат Айсберг потрібно обполоснути водою і промокнути серветкою. Сир пармезан натріть на крупній тертці. Зберіть салат Цезар. На тарілку викладіть листя Айсберга, полийте їх соусом. Потім викладайте нарізані шматочки філе і томати. Додайте сухарики і посипте все це сиром. Фінальний акорд - соус. Ще раз полийте салат ароматною заправкою. На цьому все - салат Цезар класичний дуже легко готувати, а смак мало кого залишить байдужим.", imgSRC: './images/caesar.jpg'}, 

                        {mealName: 'Відбивні зі свинини на сковороді', ingridients: {ing1: 'Свиняча вирізка - 500 г', ing2: 'Яйце куряче - 3 шт', ing3: 'Часник (за бажанням) - 2-4 зубчики', ing4: 'Сіль - 1-2 ч.л', ing5: 'Чорний мелений перець - 1-2 ч.л', ing6: 'Рослинна олія - 6 ст.л', ing7: 'Борошно пшеничне - 10 ст.л', ing8: 'Сметана - 3 ст.л'}, instructions: "М'ясо вимити, обсушити, розрізати на порційні шматки товщиною в 1 см. Відбити молотком з обох сторін, посолити, поперчити. Зробити кляр: яйця розбити в тарілку, додати сметану, і подрібнений часник. Збити віночком. Свинячі відбивні обваляти в борошні, потім вмочити в клярі. Смажити на розігрітій сковороді, змащеній олією, з кожного боку по 5 хвилин.", imgSRC: './images/meat.png'}, 
                    ];
        
                    resolve(meals);
                }, 500);
            });
        })
        .then(function(dbMeals) {
            // console.log(dbUsers);
            return new Promise((resolve, reject) => {
                setTimeout(function() {
                    let mealsOne = dbMeals.map((meal) => {
                        return {
                           name: meal.mealName,
                           ingridientsLength: Object.keys(meal.ingridients),
                           ingridients: meal.ingridients,
                           instructions: meal.instructions,
                           dbImgSRC: meal.imgSRC
                        };
                    });
                    console.log(mealsOne);
                    console.log('..........');
        
                    resolve(mealsOne);
                }, 500);
            });
        })
        .then(function(thirdMeals) {
            return new Promise((resolve, reject) => {
                setTimeout(function() {
                    let finalMeals = thirdMeals.map((meal) => {
                        return {
                           finalName: meal.name,
                           ingridients: meal.ingridientsLength.map((ingridient,i) => `<br> <strong>${i+1}</strong>. ${meal.ingridients[ingridient]}`),
                           instructions: meal.instructions, 
                           fnImgSRC: meal.dbImgSRC
                        };
                    });
                    console.log(finalMeals);
                    console.log('..........');
        
                    resolve(finalMeals);
                }, 1000);
            });
        })
        .then(function(objFinalMeals) {
            return new Promise((resolve, reject) => {
                setTimeout(function() {
                    console.log(objFinalMeals);

                    for(element of objFinalMeals) {
                        if(element.finalName.toLowerCase().includes(inputSearch.value.toLowerCase())) {
                            // console.log(inputSearch.value.toLowerCase());
                            console.log(element.finalName);
                            nameHeading.textContent = element.finalName;

                            ingridients.innerHTML = element.ingridients;
                            instructions.textContent = element.instructions;
                            image.src = element.fnImgSRC;

                            image.style.display = 'inline';

                            infoSection.classList.remove('noName');
                            break;
                        } else {
                            console.log(element.finalName);
                            nameHeading.textContent = 'такого рецепту немає';

                            ingridients.textContent = '';
                            instructions.textContent = '';
                            image.src = '';

                            image.style.display = 'none';

                            infoSection.classList.add('noName');
                        };

                    };
                }, 1000);
            });
        });
    };
});
