/**
 * Создает экземпляр Автосалона
 * @this {CarDealer}
 * @param {string} name Название автосалона
 */
function CarDealer(name) {
	this.name = name;
	this.cars = [];
}

CarDealer.prototype.add = function() {
	for( var i = 0; i < arguments.length; i++) {
		this.cars.push(arguments[i]);
	}
	return this;
}

CarDealer.prototype.setPrice = function(c, p) {
	var car = c.split(' ');
	car = this.getCar(car);
	if( car !== false ) {
		car.setPrice(p);
	}
	return this;
}

/**
 * Возвращает экземпляр машины
 */
CarDealer.prototype.getCar = function(carArray) {
	var
		 i = 0
		,car = false
	;
	while(i < this.cars.length) {
		car = this.cars[i];
		if( car.manufacturer == carArray[0] && car.model == carArray[1] && car.year == carArray[2] ) {
			break;
		}
		car = false;
		i++;
	}
	return car;
}

CarDealer.prototype.sort = function() {
	if( this.carsCount && this.carsCount == this.cars.length ) {
		return;
	}

	// Сортируем по году
	this.cars.sort(function(a, b) {
		return a.year > b.year ? 1 : -1;
	});

	// Сортируем по производителю внутри года
	this.cars.sort(function(a, b) {
		if( a.year == b.year ) {
			return a.manufacturer.toLowerCase().charCodeAt(0) > b.manufacturer.toLowerCase().charCodeAt(0) ? 1 : -1;
		}
	});

	// Сортируем по модели, внутри производителя и года
	this.cars.sort(function(a, b) {
		if( a.year == b.year && a.manufacturer == b.manufacturer ) {
			return a.model.toLowerCase().charCodeAt(0) > b.model.toLowerCase().charCodeAt(0) ? 1 : -1;
		}
	});

	// Запомним кол-во авто, чтобы не пересортировывать, если кол-во не изменилось
	this.carsCount = this.cars.length;
}

CarDealer.prototype.list = function() {
	var ret = [];
	this.sort();

	for(var i = 0; i < this.cars.length; i++) {
		ret.push(this.cars[i]);
	}
	return ret.join(', ');
}

CarDealer.prototype.listByCountry = function(country) {
	var
		 ret = []
		,car
	;
	country = country.toLowerCase();
	this.sort();

	for(var i = 0; i < this.cars.length; i++) {
		car = this.cars[i];
		if( car.getCountry().toLowerCase() == country ) {
			ret.push(car);
		}
	}
	return ret.join(', ');
}


