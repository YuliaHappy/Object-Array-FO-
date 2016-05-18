var people = [	
	{name: "Ara", age: 24, sex: "female", city: "St.Peterburg"},
	{name: "Yulia", age: 21, sex: "female", city: "St.Peterburg"},
	{name: "Alex", age: 22, sex: "male", city: "St.Peterburg"},
	{name: "Borya", age: 30, sex: "male", city: "Volgograd"},
	{name: "Roma", age: 15, sex: "male", city: "Moscow"},
	{name: "Alice", age: 21, sex: "female", city: "Moscow"}];
console.log("Name men with age < 25 and age > 18:");
console.log(
	people.filter(function(person) {
		if (person.sex == "male" && person.age < 25 && person.age > 18)
			return person;
	}));

console.log("Function output name to console:");
function outputName(array) {
	console.log(array.map(function(value) {
		return value.name;
	}));
}
outputName(people);

console.log("Partition list in the city:");
console.log(people.reduce( function (prev, person) { 
	if (prev[person.city] === undefined) {
		prev[person.city] = [];
	} 
	prev[person.city].push(person);
	return prev; 
}, {}));

console.log("Sorted list of cities by the count of people:");
console.log(people.reduce(function(prev, person) {
	if (prev.find(function(element) {
		if (element[0] == person.city) {
			element[1] ++;
			return true;
		}
		return false;
	}) === undefined) {
		prev.push([person.city, 1]);
	} 
	return prev;
}, []).sort(function(a, b) {
	return a[1] < b[1];
}));

console.log("City which the count of men and women equally:");
console.log(people.reduce(function(prev, person) {
	if (prev.find(function(element) {
		if (element[0] == person.city) {
			if (person.sex == "male") {
				element[1] ++;
			} else {
				element[2] ++;
			}
			return true;
		}
		return false;
	}) === undefined) {
		if (person.sex == "male") {
			prev.push([person.city, 1, 0]);
		} else {
			prev.push([person.city, 0, 1]);
		}
	}
	return prev;
}, []).reduce(function(prev, city) {
	if (city[1] == city[2]) {
		prev.push(city[0]);
	}
	return prev;
}, []));