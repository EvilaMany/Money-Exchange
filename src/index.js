// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if(currency > 10000)
		return {error:"You are rich, my friend! We don't have so much coins for exchange"}


    var rates = {
    	H : 50,
    	Q : 25,
    	D : 10,
    	N : 5,
    	P : 1
    }
    var result = {}


    for(var rateName in rates)
    {
    	var ExAmount = Math.floor(currency / rates[rateName])
    	if(ExAmount > 0)
    	{
    		result[rateName] = ExAmount;
    		currency = currency % rates[rateName];
    	}
    }
    return result;
}