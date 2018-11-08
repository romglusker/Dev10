function play() {
	var money = document.getElementById("money").value;
	var startmoney = money;
	var count = 0;
	var maxcount = 0;
	var max = money;
	if (money <= 0) {
		alert("Please make a bet for more than $0.00");
		console.error("Please make a bet for more than $0.00");
		return false;
	} else {
		while (money > 0) {
			if (money > max) {
				max = money;
				maxcount = count;
			}
			count++;
			var roll = rollDice();
			var sum = roll[0] + roll[1];
			if(sum===7){
				money += 4;
			} else {
				money -= 1;
			}
		}
	}
	document.getElementById("result-bar").innerHTML = "<hr width='50%'/><h1>Results</h1>";
	document.getElementById("results").style.display = "table";
	document.getElementById("start").innerText = "$" + startmoney;
	document.getElementById("count").innerText = count;
	document.getElementById("max").innerText = "$" + parseFloat(max).toFixed(2);
	document.getElementById("maxcount").innerText = maxcount;
	
	return false;
}

function rollDice() {
	var d1 = Math.floor(6*Math.random())+1;
	var d2 = Math.floor(6*Math.random())+1;
	return [d1, d2];
}