String.prototype.format = function() {
	var thisArguments = arguments;
	return this.replace(/{(\d+)}/g, function(a, b) {
		return ( thisArguments[b] !== undefined ? thisArguments[b] : '' );
	});
};
