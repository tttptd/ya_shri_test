/**
 * Создает экземпляр Машины
 * @this {Car}
 * @param {string} manufacturer Производитель
 * @param {string} model Модель
 * @param {number} year Год производство
 */
function Car(manufacturer, model, year) {
	this.manufacturer = manufacturer;
	this.model = model;
	this.year = year || (new Date).getFullYear();
}

Car.prototype.SIMPLYTPL = '{0} {1} {2} {3}';
Car.prototype.DETAILEDTPL = 'Производитель: {0}. Модель: {1}. Год: {2}. {3}';

Car.prototype.toString = function() {
	return this.SIMPLYTPL.format(this.manufacturer, this.model, this.year, ( this.price ? '(' + this.price.convert('rur') + ')' : undefined ));
}

Car.prototype.getInfo = function() {
	return String(this);
}

Car.prototype.getDetailedInfo = function() {
	return this.DETAILEDTPL.format(this.manufacturer, this.model, this.year, ( this.price ? 'Цена: ' + this.price.convert('rur') : undefined ));
}


Car.prototype.setPrice = function(p) {
	var price = p.match(/^(€|¥)?([0-9]+)?$/);
	this.price = new Currency(price[1], price[2]);
	return this;
}

// @TODO: реализовать вывод списка автомобилей в продаже,
// с фильтрацией по стране производителю,
// используя метод getCountry:
Car.prototype.getCountry = function () {
	switch (this.manufacturer.toLowerCase()) {
		case 'bmw':
		case 'audi':
			return 'Germany';

		case 'toyota':
			return 'Japan';

		default:
			return 'unknown';
	}
}


