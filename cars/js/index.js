


// @TODO: если конструктор вызывается без указания текущего года,
// то подставлять текущий
// @TODO: реализовать методы вывода информации о машине:
// console.log(bmw); // BMW X5 2010
// console.log(bmw.getInfo()); // BMW X5 2010
// console.log(bmw.getDetailedInfo()); // Производитель: BMW. Модель: X5. Год: 2010

var
	 bmw = new Car('BMW', 'X5', 2010)
	,audi = new Car('Audi', 'Q5', 2012)
	,toyota = new Car('Toyota', 'Camry')
;

//console.log(String(bmw)); console.log('-----------------------------------');

/*
console.log(bmw);
console.log(audi);
console.log(toyota);
*/


var yandex = new CarDealer('Яндекс.Авто');


// @TODO: реализовать метод добавления машин в автосалон.
// Предусмотреть возможность добавления одной машины,
// нескольких машин.
yandex
	.add(toyota)
	.add(bmw, audi)

	/*.add(new Car('Mmmm', 'ttt', 2011))
	.add(new Car('Aaa', 'yyy', 2009))
	.add(new Car('Ccc', 'kk', 2009))
	.add(new Car('Aaa', 'kk', 2010))
	.add(new Car('Zzz', 'll'))
	.add(new Car('Rrr', 'cc'))
	.add(new Car('Rrr', 'rr'))
	.add(new Car('Rrr', 'ss'))
	.add(new Car('Rrr', 'aaa'))
	.add(new Car('Rrr', 'zzz'))*/
;

//console.log(yandex);


// @TODO: реализовать метод установки цены на машину
/**
 * Установить цену на машину
 * @param {string} car идентификатор машины
 * @param {string} price стоимость
 */
// идентификатор машины составляется следующим образом
// "производитель модель год"
// стоимость машины может быть задана в двух валютах:
// йена и евро.
yandex
	.setPrice('BMW X5 2010', '€2000')
	.setPrice('Audi Q5 2012', '€3000')
	.setPrice('Toyota Camry 2012', '¥300000')
;


// BMW X5 2010, Audi Q5 2012, Toyota Camry 2012
console.log(yandex.list());

// BMW X5 2010, Audi Q5 2012
console.log(yandex.listByCountry('Germany'));
console.log(yandex.listByCountry('JAPAN'));

// @TODO: бонус! выводить список машин с ценой в рублях.

console.log(bmw.getDetailedInfo());
console.log(toyota.getDetailedInfo());
