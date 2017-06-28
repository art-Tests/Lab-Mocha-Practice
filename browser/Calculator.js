var Calculator = (function(){
	function add(x,y){
		return x+y;
	}
	return {
		add:add
	}
})()
try{
	module.exports = Calculator;
}catch(e){}




