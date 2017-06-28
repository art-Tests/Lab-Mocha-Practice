function calMulti(a,b){
	return a*b;
}
function calAdd(a,b){
	return a+b;
}
var Calculator = {
	add:function(a,b){
		return calAdd(a,b);
	},
	multi:function(a,b){
		return calMulti(a,b);
	}
}
try{
	module.exports = Calculator;
}catch(e){}




