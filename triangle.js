var filePath = 'https://dl.dropboxusercontent.com/u/28873424/tasks/triangle.txt';
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET",filePath,false);
xmlhttp.send(null);
var fileContent = xmlhttp.responseText;
//fileContent = '1\n2 1\n2 3 120'
var fileArray = fileContent.split('\n');

fileArray = fileArray.filter(function(e){return e!==''});



var N = fileArray.length;
//document.write(N);

var a = new Array(N);
for (var i = 0; i < N; i++) {
	var line = fileArray[i];
	var numbers = line.split(' ');
	for (var j = 0; j < numbers.length; j++) {
		numbers[j] = parseInt(numbers[j]);
	}
	
	a[i] = numbers;
}

//document.writeln(a);

for (i = 1; i < N; i++) {
	for (j = 0; j <= i; j++) {
		if (j == 0) {
			if (i == 1) {
				a[i][j] += a[0][0];
			} else {
				a[i][j] += Math.max(a[i-1][j], a[i-1][j+1]);
			}
		} else if (j == i) {
			a[i][j] += a[i-1][j-1];
		} else if (j == i - 1) {
			a[i][j] += Math.max(a[i-1][j], a[i-1][j-1]);
		} else {
			a[i][j] += Math.max(a[i-1][j], a[i-1][j-1], a[i-1][j+1]);
		}
	}
}

var max = Math.max.apply(Math, a[N-1]);
//document.writeln(a[N-1] + ' ');
document.writeln(max); 