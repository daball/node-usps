// Implements January 2013 version of USPS Publication 28.

var clone = require('clone');
var abbreviations = require('./abbreviations');

var AddressBuilderClass = function () {
  //non-delivery business address information
  this.MailstopCode = "";
  this.NamePrefix = "";
  this.FirstName = "";
  this.MiddleName = "";
  this.Surname = "";
  this.SuffixTitle = "";
  this.ProfessionalTitle = "";
  this.FunctionalTitle = "";
  this.DivisionName = "";
  this.BusinessName = "";
  
  //delivery address line information
  this.StreetNumber = "";
  this.Predirectional = "";
  this.StreetName = "";
  this.StreetSuffix = "";
  this.Postdirectional = "";
  
  //secondary address information
  this.SecondaryUnitIndicator = "";
  this.SecondaryUnitNumber = "";
  
  //last line information
  this.State = "";
  this.City = "";
  this.State = "";
  this.PostalCode = "";
  this.ZipPlusFour = "";
  this.Country = "";

  //distribution information
  //UNUSED: this.CarrierRouteCode = "";
  this.EndorsementCode = "";
  this.KeyLineCode = "";
  //UNUSED: this.IntelligentMailBarcode = "";
  //UNUSED: this.IntelligentMailAddressBlockBarcode = "";
};

/**
 * Creates a copy of this address object.
 */
AddressBuilderClass.prototype.clone = function () {
  return clone(this);
};

/**
 * Capitalizes all the fields into a clone, and returns the clone.
 */
AddressBuilderClass.prototype.capitalize = function () {
  var copy = this.clone();
  for (var field in copy) {
    if (typeof copy[field] == 'string' && copy[field].trim().length > 0)
      copy[field] = copy[field].toUpperCase();
  }
  return copy;
};


/**
 * Removes punctuation from the current object into a clone, and returns the clone.
 **/
AddressBuilderClass.prototype.removePunctuation = function () {
  var copy = this.clone();
  for (var field in copy) {
    if (typeof copy[field] == 'string' && copy[field].trim().length > 0)
      if (field == 'StreetNumber') {
        copy[field] = copy[field].replace(/[,!'"]/g, '');
        if (copy[field].substring(0,1) == '-') //presuming PO Box -0145
          copy[field] = '0'+copy[field].substring(1); //transform to PO Box 00145
      }
      else {
        copy[field] = copy[field].replace(/[.,!'"]/g, '');
        if (field == 'StreetName')
          copy[field] = copy[field].replace(/[-]/g, ' ');
      }
  }
  return copy;
};

/**
 * Abbreviates the current object into a clone, and returns the clone.
 **/
AddressBuilderClass.prototype.abbreviate = function () {
  var copy = this.clone();
  
  //abbreviate country
  if (copy.Country && copy.Country != "") {
    var found = false;
    for (var country in abbreviations.Countries) {
      if (copy.Countries.trim().toUpperCase() == country.toUpperCase()) {
        copy.Country = abbreviations.Countries[country].abbreviation;
        found = true;
        break;
      }
    }
    if (!found) for (var country in abbreviations.AliasCountries) {
      if (copy.Countries.trim().toUpperCase() == country.toUpperCase()) {
        copy.Country = abbreviations.AliasCountries[country].abbreviation;
        found = true;
        break;
      }
    }
  }

  //abbreviate/clean state
  if (copy.State && copy.State != "") {
    var found = false;
    for (var state in abbreviations.USAStates) {
      if (copy.State.trim().toUpperCase() == state.toUpperCase()) {
        copy.State = abbreviations.USAStates[state].abbreviation;
        found = true;
        break;
      }
    }
    if (!found) for (var state in abbreviations.CanadaProvinces) {
      if (copy.State.trim().toUpperCase() == state.toUpperCase()) {
        copy.State = abbreviations.CanadaProvinces[state].abbreviation;
        found = true;
        break;
      }
    }
    if (!found) for (var state in abbreviations.AliasCanadaProvinces) {
      if (copy.State.trim().toUpperCase() == state.toUpperCase()) {
        copy.State = abbreviations.AliasCanadaProvinces[state].abbreviation;
        found = true;
        break;
      }
    }
    if (!found) for (var state in abbreviations.RepairCanadaProvinces) {
      if (copy.State.trim().toUpperCase() == state.toUpperCase()) {
        copy.State = abbreviations.RepairCanadaProvinces[state].abbreviation;
        found = true;
        break;
      }
    }
  }

  //abbreviate/clean street name suffix
  if (copy.StreetName && copy.StreetName != "") {
    var found = false;
    for (var suffix in abbreviations.StreetNameSuffixes) {
      var regexmatch = copy.StreetName.trim().match(new RegExp(suffix+'$', 'i'));
      if (regexmatch != null && regexmatch.length > 0) {
        copy.StreetName = copy.StreetName.substring(0, regexmatch.index) +
                          abbreviations.StreetNameSuffixes[suffix].abbreviation;
        found = true;
        break;
      }
    }
  }

  //abbreviate predirectional
  if (copy.Predirectional && copy.Predirectional != "") {
    var found = false;
    for (var direction in abbreviations.GeographicDirectionals) {
      if (copy.Predirectional.trim().toUpperCase() == direction.toUpperCase()) {
        copy.Predirectional = abbreviations.GeographicDirectionals[direction].abbreviation;
        found = true;
        break;
      }
    }
  }

  //abbreviate postdirectional
  if (copy.Postdirectional && copy.Postdirectional != "") {
    var found = false;
    for (var direction in abbreviations.GeographicDirectionals) {
      if (copy.Postdirectional.trim().toUpperCase() == direction.toUpperCase()) {
        copy.Postdirectional = abbreviations.GeographicDirectionals[direction].abbreviation;
        found = true;
        break;
      }
    }
  }
  
  //abbreviate street name
  //TODO:implement feature along with abbreviations
  if (copy.Postdirectional && copy.Postdirectional != "") {
    var found = false;
    for (var direction in abbreviations.GeographicDirectionals) {
      if (copy.Postdirectional.trim().toUpperCase() == direction.toUpperCase()) {
        copy.Postdirectional = abbreviations.GeographicDirectionals[direction].abbreviation;
        found = true;
        break;
      }
    }
  }

  return copy;
};

/**
 * Overrides default implementation. Outputs a string based on the data provided.
 */
AddressBuilderClass.prototype.toString = function () {
  clone = this.clone();

  //do country
  var countryLine = "";
  if (clone.Country != "USA") countryLine = clone.Country;
  
  //build last line of address
  var lastLine = "";
  if (clone.Country == "Canada")
    lastLine = clone.City + " " + clone.State + "  " + clone.PostalCode;
  else //if (clone.Country == "USA" || clone.Country == "")
    lastLine = clone.City + " " + clone.State + " " + clone.PostalCode +
                ((clone.ZipPlusFour && clone.ZipPlusFour != '') ? ("-" + clone.ZipPlusFour) : '');
  
  //build primary delivery address, normally one line
  var deliveryAddressLine = "";
  if (clone.State != "PR") {
    if (clone.StreetNumber && clone.StreetNumber != "") deliveryAddressLine += clone.StreetNumber + " ";
    if (clone.Predirectional && clone.Predirectional != "") deliveryAddressLine += clone.Predirectional + " ";
    if (clone.StreetName && clone.StreetName != "") deliveryAddressLine += clone.StreetName + " ";
    if (clone.Postdirectional && clone.Postdirectional != "") deliveryAddressLine += clone.Postdirectional + " ";
    deliveryAddressLine = deliveryAddressLine.trim();
  }
  else {
    //TODO: PR rules
  }
  
  //build secondary address information, normally on primary delivery address
  var secondaryAddressLine = "";
  if (clone.UnitName && clone.UnitName != "") secondaryAddressLine += clone.UnitName + " ";
  if (clone.UnitNumber && clone.UnitNumber != "") secondaryAddressLine += clone.UnitNumber;
  secondaryAddressLine = secondaryAddressLine.trim();
  
  //check to merge secondary address line onto delivery address line
  var proposedMergedAddressLine = deliveryAddressLine + ' ' + secondaryAddressLine;
  if (proposedMergedAddressLine.length <= 40 && proposedMergedAddressLine.split(' ').length <= 8) {
    deliveryAddressLine = proposedMergedAddressLine.trim();
    proposedMergedAddressLine = secondaryAddressLine = '';
  }
  
  //build attention line
  var attentionLine = "";
  if (clone.NamePrefix && clone.NamePrefix != "") attentionLine += clone.NamePrefix + ' ';
  if (clone.FirstName && clone.FirstName != "") attentionLine += clone.FirstName + ' ';
  if (clone.MiddleName && clone.MiddleName != "") attentionLine += clone.MiddleName + ' ';
  if (clone.Surname && clone.Surname != "") attentionLine += clone.Surname + ' ';
  if (clone.SuffixTitle && clone.SuffixTitle != "") attentionLine += clone.SuffixTitle;
  attentionLine = attentionLine.trim();
  
  //bulid output
  var buildOutput = "";
  //line 1:
  if (clone.EndorsementCode && clone.EndorsementCode != "") buildOutput += clone.EndorsementCode + '\n';
  //line 2:
  if (clone.KeyLineData && clone.KeyLineData != "") buildOutput += clone.KeyLineData + '\n';
  //line 3:
  //NOT IMPLEMENTED: if (clone.IntelligentMailAddressBlockBarcode && clone.IntelligentMailAddressBlockBarcode != "") sampleOutput += clone.IntelligentMailAddressBlockBarcode + '\n';
  //line 4:
  if (clone.MailstopCode && clone.MailstopCode != "") buildOutput += clone.MailstopCode + '\n';
  //line 5:
  if (attentionLine && attentionLine != "") buildOutput += attentionLine + '\n';
  //line 6:
  if (clone.IndividualTitle && clone.IndividualTitle != "") buildOutput += clone.IndividualTitle + '\n';
  //line 7:
  if (clone.FunctionalTitle && clone.FunctionalTitle != "") buildOutput += clone.FunctionalTitle + '\n';
  //line 8:
  if (clone.DivisionName && clone.DivisionName != "") buildOutput += clone.DivisionName + '\n';
  //line 9:
  if (clone.BusinessName && clone.BusinessName != "") buildOutput += clone.BusinessName + '\n';
  //line 10:
  if (secondaryAddressLine && secondaryAddressLine != "") buildOutput += secondaryAddressLine + '\n';
  if (deliveryAddressLine && deliveryAddressLine != "") buildOutput += deliveryAddressLine + '\n';
  //line 11:
  if (lastLine && lastLine != "") buildOutput += lastLine + '\n';
  //country line, if applicable:
  if (countryLine && countryLine != "") buildOutput += countryLine;
  buildOutput = buildOutput.trim();
  
  return buildOutput;
};

/**
 * Capitalizes, removes punctuation, and abbreviates all the fields into a clone,
 * and returns a string representing the full address as specified.
 */
AddressBuilderClass.prototype.toUSPSString = function () {
  clone = this.clone().removePunctuation().abbreviate().capitalize().toString();
};

// export class
module.exports = AddressBuilderClass;
