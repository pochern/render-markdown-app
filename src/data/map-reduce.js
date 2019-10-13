var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

var officersIds = officers.map(function (officer) {
  return officer.id
});
console.log(officersIds);

var totalNames = officers.reduce(function (accumulator, officer) {
  return accumulator + officer.name + '\n';
}, '');
console.log(totalNames);
