var primes = [];
var result = [];

nextPrime:
  for (var i = 2; i < 1000000; i++) {

    for (var j = 2; j <= Math.sqrt(i); j++) {
    	if (i % j == 0) continue nextPrime;
    }

 	primes.push(i); 
}

for (i = 0; i < primes.length; i++) {
	
	var p = primes[i].toString();
	var len = p.length;
	var isGood = true;
	
	if (len > 1) {
		for (j = 0; j < len; j++) {
			p = p.charAt(len-1) + p.substring(0, len-1);
			var number = parseInt(p);
			if (!isSimple(p)) {
				isGood = false;
				break;
			}
		}
	}	

	if (isGood) {
		result.push(p);
	}
} 


document.write(result + ' _ ' + result.length);

function isSimple(num) {
	var x;
	for (x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false;
	} 
	return true;
}
