let animals = [{name: 'fluffykins', species: 'rabbit' }, {name: 'caro', species: 'dog' }]

let dogs = animals.filter(function(animal){
return animal.species === 'dog'
}
)



console.log(dogs);
console.log(animals);