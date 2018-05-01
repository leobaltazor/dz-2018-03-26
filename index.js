var array = [4,3,9,10,1,5,90,4,45,50]
// var array = [1,2,3,4,5,6,7,8,9,10]
var count = 0

console.log("до сорти " + array);
setTimeout(sort, 2000)
console.log("после " + array, count);
function tab() {
	var table = document.querySelector('table');
	var row = document.createElement('tr')
	for (let i = 0; i < array.length; i++) {
		var td = document.createElement("td")
		td.innerHTML = array[i]
		row.appendChild(td)
	}
	con = document.createTextNode(count)
	row.appendChild(con)
	table.appendChild(row);
}
tab();

array = document.body.querySelectorAll('tr').children.innerHTML
function sort() {
	for (let i = 0; i < array.length; i++) {
		var flag =true;
		console.log(i+1);
		
		for (let j = 0; j < array.length - (i + 1); j++) {
			if (array[j] > array[j+1]) {
				console.log(j, j+1);
				
				[array[j], array[j+1]] = [array[j+1] , array[j]]
				flag = false
				
				console.log(array);
				
			}
count++
		}
		if (flag) {
			return
		}
	}
}