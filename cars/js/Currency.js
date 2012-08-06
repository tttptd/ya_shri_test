/**
 * @param {string} key   Ключ валюты ( label или name )
 */
function Currency(key, price) {
	this.price = price;
	this.rateIndex = this.find(key);
	return this;
}

// rate указывается в рублях, за 1 единицу валюты
Currency.prototype.rates = [
	{
		name: 'EUR',
		label: '€',
		rate: 39.39847
	},
	{
		name: 'JPY',
		label: '¥',
		rate: 41.3564 / 100 // курс за 1 JPY, а не за 100
	},
	{
		name: 'RUR',
		label: 'р.',
		rate: 1
	}
];

/**
 * Возвращает тип переданного ключа
 * @param  {string} key [description]
 * @return {string}     name или label
 */
Currency.prototype.getType = function(key) {
	return ( key.length == 3 ? 'name' : 'label' );
}

Currency.prototype.get = function(index) {
	return this.rates[ index || this.rateIndex ];
}

Currency.prototype.convert = function(key) {
	var target = this.get(this.find(key));
	return new Currency(target.name, this.price * this.get().rate / target.rate );
}

Currency.prototype.find = function(key) {
	var
		 type = this.getType(key)
		,i = 0
	;
	key = key.toUpperCase();
	while( i < this.rates.length ) {
		if( this.rates[i][type] == key ) {
			return i;
		}
		i++;
	}
	return false;
}

Currency.prototype.toString = function() {
	return '{0} {1}'.format(Math.round(this.price), this.get().label) ;
}
