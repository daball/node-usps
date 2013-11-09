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

console.log('Address Object:', address);
console.log('Address Label:');
console.log(address.toString());
