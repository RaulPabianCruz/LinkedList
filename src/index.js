import LinkedListFactory from './LinkedListFactory.js';

const list = LinkedListFactory();
list.prepend('Raul');
list.prepend('Kenny');
list.append('Juan');
console.log(list.toString());
console.log('List Size:');
console.log(list.size());
console.log('Head:');
console.log(list.head());
console.log('Tail:');
console.log(list.tail());
console.log('Node at index 2: ');
console.log(list.at(2));

list.pop();
console.log('Tail after pop:');
console.log(list.tail());

console.log('List after aforementioned pop:');
console.log(list.toString());
console.log('List size:');
console.log(list.size());
console.log('Does list contain Juan?');
console.log(list.contains('Juan'));
console.log('Does list contain Raul?');
console.log(list.contains('Raul'));

console.log('Appending Juan....');
list.append('Juan');
console.log('List after append:');
console.log(list.toString());
console.log('What index is Kenny at?');
console.log(list.find('Kenny'));
console.log('What index is Juan at?');
console.log(list.find('Juan'));

console.log('Inserting Manny at index 3:');
list.insertAt('Manny', 3);
console.log('List after insert:');
console.log(list.toString());
console.log('Tail after aforementioned insert:');
console.log(list.tail());
console.log('List size:');
console.log(list.size());

console.log('Removing node at index 1');
list.removeAt(1);
console.log('List after removing:');
console.log(list.toString());
console.log('List size:');
console.log(list.size());
console.log('Tail after removal:');
console.log(list.tail());
console.log('Head after removal:');
console.log(list.head());
