var people = [	
	{name: "Alex", age: 22, sex: "male", city: "St.Peterburg"},
	{name: "Borya", age: 30, sex: "male", city: "Volgograd"},
	{name: "Roma", age: 15, sex: "male", city: "Moscow"},
	{name: "Alice", age: 21, sex: "female", city: "Moscow"}];
console.log("Name men with age < 25 and age > 18:");
console.log(
	people.map(function(person) {
		if (person.sex == "male" && person.age < 25 && person.age > 18)
			return person;
	}));

console.log("Function output name to console:");
function outputName(array) {
	var names = [];
	array.forEach(function(value) {
		names.push(value.name);
	});
	console.log(names);
};
outputName(people);

console.log("Partition list in the city:");
console.log();