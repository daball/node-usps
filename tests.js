//test.js

var usps = require('./index');
var address = new usps.AddressBuilder();

address.NamePrefix = 'Mr.';
address.FirstName = 'David';
address.MiddleName = 'Allen';
address.Surname = 'Ball';
address.StreetNumber = '50'
address.StreetName = 'Ball Drive';
address.City = 'Cleveland';
address.State = 'Virginia';
address.PostalCode = '24225';

console.log('Test 1: Author Address Label');
console.log(address.toUSPSString(), '\n');

//try to fix a misspelled address line
console.log('Test 2: Misspelled Street Name Suffix Label');
address = new usps.AddressBuilder();
address.StreetNumber = '1';
address.StreetName = 'Misspelled Drv';
console.log(address.toUSPSString());
