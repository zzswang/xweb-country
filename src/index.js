'use strict';

var countries = require('./lib/country');


function isCountry(c, name) {
	for(var key in c){
		if(c[key] === name){
			return true;
		}
	}

	return false;
}


var Country = module.exports = function(name){
	for(var i = 0; i < countries.length; ++i){
		var c = countries[i];
		if(isCountry(c, name)){
			this.fullName = c['name'];
			this.name = c['short name'];
			this.alpha2 = c['alpha-2'];
			this.alpha3 = c['alpha-3'];
			this.countryCode = c['country-code'];
			this.iso3166 = c['iso_3166-2'];
			this.regionCode = c['region-code'];
			this.subRegionCode = c['sub-region-code'];
		}
	}
};

Country.prototype.toName = function() {
	return this.name;
};

Country.prototype.toFullName = function() {
	return this.fullName;
};

Country.prototype.toCode = function() {
	return this.iso3166;
};

Country.prototype.toAlphaCode = function() {
	return this.alpha2;
};

Country.prototype.toAlpha3Code = function() {
	return this.alpha3;
};

Country.prototype.toRegionCode = function() {
	return [this.regionCode, this.subRegionCode];
};