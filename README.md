# Node-USPS

This library implements many of the USPS Publication 28 guidelines in the form of an address building class. It accepts multiple fields of address inputs, and then builds a USPS compatible address.

This library is currently maintained by David Allen Ball. Contact information is available at [daball.me](http://www.daball.me).

## Notice: Untested Alpha Release

This library is very new and untested. Please use caution until it becomes more stable.

## How to Install

Add `node-usps` to your `packages.json` file's `dependencies` section.

    "dependencies": {
      "node-usps": "*"
    }

Run: `npm install`.

## How to Use

In your code, implement using:

    var usps = require('node-usps');

Create a new builder object using:

    var newAddress = new usps.AddressBuilder();
    
Fill in the blanks:

    newAddress.BusinessName = 'Joyent';
    newAddress.StreetNumber = '1';
    newAddress.StreetName = 'Embarcadero Center';
    newAddress.SecondaryUnitIndicator = 'Floor';
    newAddress.SecondaryUnitNumber = '9';
    newAddress.City = 'San Francisco';
    newAddress.State = 'California';
    newAddress.PostalCode = '94111';

Manipulate using the API.

## API Documentation

### `Abbreviations` constants

These constants are used inside the library itself, but are also exported because they are useful arrays for autocomplete and drop-down lists.

#### `Countries` array

List of countries. Example: 

#### `AliasCountries` array

Pointers from country aliases.

#### `USAStates` array

List of US states, possessions, and military states. Example:

    'Virginia': { abbreviation: 'VA', type: 'State' }

#### `CanadaProvinces` array

List of Canada provinces and territories. Example:

    'British Columbia': { abbreviation: 'BC', type: 'Province', country: 'Canada' }

#### `AliasCanadaProvinces` array

Pointers from Canada provinces aliases.

#### `RepairCanadaAbbreviations` array

Pointers from old abbreviations to new Canada provinces.

#### `GeographicDirectionals` array

List of geographic directionals. Example:

    'North': { abbreviation: 'N', language: 'English' }

#### `SecondaryUnitIdentifiers` array

List of secondary unit identifiers. Example:

    'Apartment': { abbreviation: 'APT', requiresUnitNumber: true, language: 'English' }

#### `StreetNameSuffixes` array

List of street name suffixes. Example:

    'Avenue': { abbreviation: 'Ave', language: 'English' }

#### `CommonlyMisspelledStreetNameSuffixes` array

NOT IMPLEMENTED YET. Pointers from commonly misspelled street names and suffixes to the correct street name.

### AddressBuilder Class

The `AddressBuilder` stores address data components for manipulation and USPS Publication 28 compliance functions.

#### Non-delivery Business Address Members

##### `MailstopCode`: `String`
##### `NamePrefix`: `String`
##### `FirstName`: `String`
##### `MiddleName`: `String`
##### `Surname`: `String`
##### `SuffixTitle`: `String`
##### `ProfessionalTitle`: `String`
##### `FunctionalTitle`: `String`
##### `DivisionName`: `String`
##### `BusinessName`: `String`

#### Delivery Address Line Members

##### `StreetNumber`: `String`
##### `Predirectional`: `String`
##### `StreetName`: `String`
##### `StreetSuffix`: `String`
##### `Postdirectional`: `String`
  
#### Secondary Address Line Members

##### `SecondaryUnitIndicator`: `String`
##### `SecondaryUnitNumber`: `String`
  
#### Last Line Members

##### `State`: `String`
##### `City`: `String`
##### `State`: `String`
##### `PostalCode`: `String`
##### `ZipPlusFour`: `String`
##### `Country`: `String`

#### Distribution Members

##### UNUSED: `CarrierRouteCode`: `undefined`
Future implementation in research.
##### `EndorsementCode`: `String`
##### `KeyLineCode`: `String`
##### UNUSED: `IntelligentMailBarcode`: `undefined`
Future implementation in research.
##### UNUSED: `IntelligentMailAddressBlockBarcode`: `undefined`
Future implementation in research.

#### Methods

##### `toUSPSString()`: `String`

Prints a multi-line `String` that dumps all the fields out in the correct order for USPS guidelines. Calls `clone()`, `removePunctuation()`, `abbreviate()`, `capitalize()`, and then `toString()`, chaining the output and returning the final `String`.

##### `clone()`: `AddressBuilder`

Creates a deep-copy of the `AddressBuilder` object. Returns a new `AddressBuilder` object instance with the same fields as the initial object.

##### `capitalize()`: `AddressBuilder`

Returns a new `AddressBuilder` with all the fields capitalized. Original object is left intact.

##### `removePunctuation()`: `AddressBuilder`

Returns a new `AddressBuilder` with all the USPS unapproved punctuation removed. Original object is left intact.

##### `abbreviate()`: `AddressBuilder`

Returns a new `AddressBuilder` with all the USPS abbreviations applied. Original object is left intact.

##### `toString()`: `AddressBuilder`

Returns a `String` with all the fields dumped out in the correct order for an address label. See `toUSPSString()` to generate USPS-compliant labels.