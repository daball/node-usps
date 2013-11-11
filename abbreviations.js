var extend = require('extend');

module.exports.Countries = {
    'United States of America': { abbreviation: 'USA' }
  , 'Canada': { abbreviation: 'CANADA' }
};

module.exports.AliasCountries = {
    'United States': module.exports['United States of America']
};

module.exports.USAStates = {
  //States and District of Columbia:
    'Alabama': { abbreviation: 'AL', type: 'State' }
  , 'Alaska': { abbreviation: 'AK', type: 'State' }
  , 'Arizona': { abbreviation: 'AZ', type: 'State' }
  , 'Arkansas': { abbreviation: 'AR', type: 'State' }
  , 'California': { abbreviation: 'CA', type: 'State' }
  , 'Colorado': { abbreviation: 'CO', type: 'State' }
  , 'Connecticut': { abbreviation: 'CT', type: 'State' }
  , 'Delaware': { abbreviation: 'DE', type: 'State' }
  , 'District of Columbia': { abbreviation: 'DC', type: 'District' }
  , 'Florida': { abbreviation: 'FL', type: 'State' }
  , 'Georgia': { abbreviation: 'GA', type: 'State' }
  , 'Hawaii': { abbreviation: 'HI', type: 'State' }
  , 'Idaho': { abbreviation: 'ID', type: 'State' }
  , 'Illinois': { abbreviation: 'IL', type: 'State' }
  , 'Indiana': { abbreviation: 'IN', type: 'State' }
  , 'Iowa': { abbreviation: 'IA', type: 'State' }
  , 'Kansas': { abbreviation: 'KS', type: 'State' }
  , 'Kentucky': { abbreviation: 'KY', type: 'State' }
  , 'Louisiana': { abbreviation: 'LA', type: 'State' }
  , 'Maine': { abbreviation: 'ME', type: 'State' }
  , 'Maryland': { abbreviation: 'MD', type: 'State' }
  , 'Massachusetts': { abbreviation: 'MA', type: 'State' }
  , 'Michigan': { abbreviation: 'MI', type: 'State' }
  , 'Minnesota': { abbreviation: 'MN', type: 'State' }
  , 'Mississippi': { abbreviation: 'MS', type: 'State' }
  , 'Missouri': { abbreviation: 'MO', type: 'State' }
  , 'Montana': { abbreviation: 'MT', type: 'State' }
  , 'Nebraska': { abbreviation: 'NE', type: 'State' }
  , 'Nevada': { abbreviation: 'NV', type: 'State' }
  , 'New Hampshire': { abbreviation: 'NH', type: 'State' }
  , 'New Jersey': { abbreviation: 'NJ', type: 'State' }
  , 'New Mexico': { abbreviation: 'NM', type: 'State' }
  , 'New York': { abbreviation: 'NY', type: 'State' }
  , 'North Carolina': { abbreviation: 'NC', type: 'State' }
  , 'North Dakota': { abbreviation: 'ND', type: 'State' }
  , 'Ohio': { abbreviation: 'OH', type: 'State' }
  , 'Oklahoma': { abbreviation: 'OK', type: 'State' }
  , 'Oregon': { abbreviation: 'OR', type: 'State' }
  , 'Pennsylvania': { abbreviation: 'PA', type: 'State' }
  , 'Rhode Island': { abbreviation: 'RI', type: 'State' }
  , 'South Carolina': { abbreviation: 'SC', type: 'State' }
  , 'South Dakota': { abbreviation: 'SD', type: 'State' }
  , 'Tennessee': { abbreviation: 'TN', type: 'State' }
  , 'Texas': { abbreviation: 'TX', type: 'State' }
  , 'Utah': { abbreviation: 'UT', type: 'State' }
  , 'Vermont': { abbreviation: 'VT', type: 'State' }
  , 'Virginia': { abbreviation: 'VA', type: 'State' }
  , 'Washington': { abbreviation: 'WA', type: 'State' }
  , 'West Virginia': { abbreviation: 'WV', type: 'State' }
  , 'Wisconsin': { abbreviation: 'WI', type: 'State' }
  , 'Wyoming': { abbreviation: 'WY', type: 'State' }
  //Possessions:
  , 'American Samoa': { abbreviation: 'AS', type: 'Possession' }
  , 'Federated States of Micronesia': { abbreviation: 'FM', type: 'Possession' }
  , 'Guam': { abbreviation: 'GU', type: 'Possession' }
  , 'Marshall Islands': { abbreviation: 'MH', type: 'Possession' }
  , 'Northern Mariana Islands': { abbreviation: 'MP', type: 'Possession' }
  , 'Palau': { abbreviation: 'PW', type: 'Possession' }
  , 'Puerto Rico': { abbreviation: 'PR', type: 'Possession' }
  , 'Virgin Islands': { abbreviation: 'VI', type: 'Possession' }
  //Military States:
  , 'Armed Forces Europe, the Middle East, and Canada': { abbreviation: 'AE', type: 'Military State' }
  , 'Armed Forces Pacific': { abbreviation: 'AP', type: 'Military State' }
  , 'Armed Forces Americas (except Canada)': { abbreviation: 'AA', type: 'Military State' }
};

module.exports.CanadaProvinces = {
    'Alberta': { abbreviation: 'AB', type: 'Province', country: 'Canada' }
  , 'British Columbia': { abbreviation: 'BC', type: 'Province', country: 'Canada' }
  , 'Manitoba': { abbreviation: 'MB', type: 'Province', country: 'Canada' }
  , 'New Brunswick': { abbreviation: 'NB', type: 'Province', country: 'Canada' }
  , 'Newfoundland and Labrador': { abbreviation: 'NL', type: 'Province', country: 'Canada' } //previously 'NF'
  , 'Northwest Territories': { abbreviation: 'NT', type: 'Territory', country: 'Canada' }
  , 'Nova Scotia': { abbreviation: 'NS', type: 'Province', country: 'Canada' }
  , 'Nunavut': { abbreviation: 'NU', type: 'Territory', country: 'Canada' }
  , 'Ontario': { abbreviation: 'ON', type: 'Province', country: 'Canada' }
  , 'Prince Edward Island': { abbreviation: 'PE', type: 'Province', country: 'Canada' }
  , 'Quebec': { abbreviation: 'QC', type: 'Province', country: 'Canada' }
  , 'Saskatchewan': { abbreviation: 'SK', type: 'Province', country: 'Canada' }
  , 'Yukon Territory': { abbreviation: 'YT', type: 'Territory', country: 'Canada' }
};

module.exports.AliasCanadaProvinces = {
    'Newfoundland': module.exports.CanadaProvinces['Newfoundland and Labrador']
  , 'Labrador': module.exports.CanadaProvinces['Newfoundland and Labrador']
};

module.exports.RepairCanadaAbbreviations = {
  'NF': module.exports.CanadaProvinces['Newfoundland and Labrador']
}

module.exports.GeographicDirectionals = {
  //English:
    'North': { abbreviation: 'N', language: 'English' }
  , 'East': { abbreviation: 'E', language: 'English' }
  , 'South': { abbreviation: 'S', language: 'English' }
  , 'West': { abbreviation: 'W', language: 'English' }
  , 'Northeast': { abbreviation: 'NE', language: 'English' }
  , 'Southeast': { abbreviation: 'SE', language: 'English' }
  , 'Northwest': { abbreviation: 'NW', language: 'English' }
  , 'Southwest': { abbreviation: 'SW', language: 'English' }
  //Spanish:
  , 'Norte': { abbreviation: 'N', language: 'Spanish' }
  , 'Este': { abbreviation: 'E', language: 'Spanish' }
  , 'Sur': { abbreviation: 'S', language: 'Spanish' }
  , 'Oeste': { abbreviation: 'O', language: 'Spanish' }
  , 'Noreste': { abbreviation: 'NE', language: 'Spanish' }
  , 'Sureste': { abbreviation: 'SE', language: 'Spanish' }
  , 'Noroeste': { abbreviation: 'NO', language: 'Spanish' }
  , 'Suroeste': { abbreviation: 'SO', language: 'Spanish' }
};

module.exports.SecondaryUnitIdentifiers = {
  //English:
    'Apartment': { abbreviation: 'APT', requiresUnitNumber: true, language: 'English' }
  , 'Basement': { abbreviation: 'BSMT', requiresUnitNumber: false, language: 'English' }
  , '#': { abbreviation: '#', requiresUnitNumber: true, language: 'English' }
  , 'Building': { abbreviation: 'BLDG', requiresUnitNumber: true, language: 'English' }
  , 'Department': { abbreviation: 'DEPT', requiresUnitNumber: true, language: 'English' }
  , 'Floor': { abbreviation: 'FL', requiresUnitNumber: true, language: 'English' }
  , 'Front': { abbreviation: 'FRNT', requiresUnitNumber: false, language: 'English' }
  , 'Hanger': { abbreviation: 'HNGR', requiresUnitNumber: true, language: 'English' }
  , 'Key': { abbreviation: 'KEY', requiresUnitNumber: true, language: 'English' }
  , 'Lobby': { abbreviation: 'LBBY', requiresUnitNumber: false, language: 'English' }
  , 'Lot': { abbreviation: 'LOT', requiresUnitNumber: true, language: 'English' }
  , 'Lower': { abbreviation: 'LOWR', requiresUnitNumber: false, language: 'English' }
  , 'Office': { abbreviation: 'OFC', requiresUnitNumber: false, language: 'English' }
  , 'Penthouse': { abbreviation: 'PH', requiresUnitNumber: false, language: 'English' }
  , 'Pier': { abbreviation: 'PIER', requiresUnitNumber: true, language: 'English' }
  , 'Rear': { abbreviation: 'REAR', requiresUnitNumber: false, language: 'English' }
  , 'Room': { abbreviation: 'RM', requiresUnitNumber: true, language: 'English' }
  , 'Side': { abbreviation: 'SIDE', requiresUnitNumber: false, language: 'English' }
  , 'Slip': { abbreviation: 'SLIP', requiresUnitNumber: true, language: 'English' }
  , 'Space': { abbreviation: 'SPC', requiresUnitNumber: true, language: 'English' }
  , 'Stop': { abbreviation: 'STOP', requiresUnitNumber: true, language: 'English' }
  , 'Suite': { abbreviation: 'STE', requiresUnitNumber: true, language: 'English' }
  , 'Trailer': { abbreviation: 'TRLR', requiresUnitNumber: true, language: 'English' }
  , 'Unit': { abbreviation: 'UNIT', requiresUnitNumber: true, language: 'English' }
  , 'Upper': { abbreviation: 'UPPR', requiresUnitNumber: false, language: 'English' }
  //Spanish:
  /*
  , 'Apartamento': { abbreviation: 'APT', requiresUnitNumber: true, language: 'English' }
  , 'Barriada': { abbreviation: 'BDA', requiresUnitNumber: true, language: 'English' }
  , 'Building': { abbreviation: 'BLDG', requiresUnitNumber: true, language: 'English' }
  , 'Bloque': { abbreviation: 'BL', requiresUnitNumber: true, language: 'English' }
  , 'Barrio': { abbreviation: 'BO', requiresUnitNumber: true, language: 'English' }
  , 'Carretera': { abbreviation: 'CARR', requiresUnitNumber: true, language: 'English' }
  , 'Caserio': { abbreviation: 'CAS', requiresUnitNumber: true, language: 'English' }
  , 'Condominio': { abbreviation: 'COND', requiresUnitNumber: true, language: 'English' }
  , 'Cooperativa': { abbreviation: 'COOP', requiresUnitNumber: true, language: 'English' }
  , 'Corporacion': { abbreviation: 'CORP', requiresUnitNumber: true, language: 'English' }
  , 'Departamento': { abbreviation: 'DEPT', requiresUnitNumber: true, language: 'English' }
  , 'Edificio': { abbreviation: 'EDIF', requiresUnitNumber: true, language: 'English' }
  , 'Entrega General': { abbreviation: 'GEN DEL', requiresUnitNumber: true, language: 'English' }
  , 'Extencion': { abbreviation: 'EXT', requiresUnitNumber: true, language: 'English' }
  , 'Hospital': { abbreviation: 'HOSP', requiresUnitNumber: true, language: 'English' }
  , 'Industrial': { abbreviation: 'IND', requiresUnitNumber: true, language: 'English' }
  , 'Jardines': { abbreviation: 'JARD', requiresUnitNumber: true, language: 'English' }
  , 'Mansiones': { abbreviation: 'MANS', requiresUnitNumber: true, language: 'English' }
  , 'Parcelas': { abbreviation: 'PARC', requiresUnitNumber: true, language: 'English' }
  , 'Quebrada': { abbreviation: 'QBDA', requiresUnitNumber: true, language: 'English' }
  , 'Reparto': { abbreviation: 'REPTO', requiresUnitNumber: true, language: 'English' }
  , 'Residencial': { abbreviation: 'RES', requiresUnitNumber: true, language: 'English' }
  , 'Sector': { abbreviation: 'SEC', requiresUnitNumber: true, language: 'English' }
  , 'Terraza': { abbreviation: 'TERR', requiresUnitNumber: true, language: 'English' }
  , 'Urbanization': { abbreviation: 'URB', requiresUnitNumber: true, language: 'English' }
  , 'Villa': { abbreviation: 'VIL', requiresUnitNumber: true, language: 'English' }
  */
};

module.exports.StreetNameSuffixes = {
  //English:
    'Alley': { abbreviation: 'Aly', language: 'English' }
  , 'Anex': { abbreviation: 'Anx', language: 'English' }
  , 'Arcade': { abbreviation: 'Arc', language: 'English' }
  , 'Avenue': { abbreviation: 'Ave', language: 'English' }
  , 'Bayou': { abbreviation: 'Byu', language: 'English' }
  , 'Beach': { abbreviation: 'Bch', language: 'English' }
  , 'Bend': { abbreviation: 'Bnd', language: 'English' }
  , 'Bluff': { abbreviation: 'Blf', language: 'English' }
  , 'Bluffs': { abbreviation: 'Blfs', language: 'English' }
  , 'Bottom': { abbreviation: 'Btm', language: 'English' }
  , 'Boulevard': { abbreviation: 'Blvd', language: 'English' }
  , 'Branch': { abbreviation: 'Br', language: 'English' }
  , 'Bridge': { abbreviation: 'Brg', language: 'English' }
  , 'Brook': { abbreviation: 'Brk', language: 'English' }
  , 'Brooks': { abbreviation: 'Brks', language: 'English' }
  , 'Burg': { abbreviation: 'Bg', language: 'English' }
  , 'Burgs': { abbreviation: 'Bgs', language: 'English' }
  , 'Bypass': { abbreviation: 'Byp', language: 'English' }
  , 'Camp': { abbreviation: 'Cp', language: 'English' }
  , 'Canyon': { abbreviation: 'Cyn', language: 'English' }
  , 'Cape': { abbreviation: 'Cpe', language: 'English' }
  , 'Causeway': { abbreviation: 'Cswy', language: 'English' }
  , 'Center': { abbreviation: 'Ctr', language: 'English' }
  , 'Centers': { abbreviation: 'Ctrs', language: 'English' }
  , 'Circle': { abbreviation: 'Cir', language: 'English' }
  , 'Circles': { abbreviation: 'Cirs', language: 'English' }
  , 'Cliff': { abbreviation: 'Clf', language: 'English' }
  , 'Cliffs': { abbreviation: 'Clfs', language: 'English' }
  , 'Club': { abbreviation: 'Clb', language: 'English' }
  , 'Common': { abbreviation: 'Cmn', language: 'English' }
  , 'Commons': { abbreviation: 'Cmns', language: 'English' }
  , 'Corner': { abbreviation: 'Cor', language: 'English' }
  , 'Corners': { abbreviation: 'Cors', language: 'English' }
  , 'Course': { abbreviation: 'Crse', language: 'English' }
  , 'Court': { abbreviation: 'Ct', language: 'English' }
  , 'Courts': { abbreviation: 'Cts', language: 'English' }
  , 'Cove': { abbreviation: 'Cv', language: 'English' }
  , 'Coves': { abbreviation: 'Cvs', language: 'English' }
  , 'Creek': { abbreviation: 'Crk', language: 'English' }
  , 'Crescent': { abbreviation: 'Cres', language: 'English' }
  , 'Crest': { abbreviation: 'Crst', language: 'English' }
  , 'Crossing': { abbreviation: 'Xing', language: 'English' }
  , 'Crossroad': { abbreviation: 'Xrd', language: 'English' }
  , 'Crossroads': { abbreviation: 'Xrds', language: 'English' }
  , 'Curve': { abbreviation: 'Curv', language: 'English' }
  , 'Dale': { abbreviation: 'Dl', language: 'English' }
  , 'Dam': { abbreviation: 'Dm', language: 'English' }
  , 'Divide': { abbreviation: 'Dv', language: 'English' }
  , 'Drive': { abbreviation: 'Dr', language: 'English' }
  , 'Drives': { abbreviation: 'Drs', language: 'English' }
  , 'Estate': { abbreviation: 'Est', language: 'English' }
  , 'Estates': { abbreviation: 'Ests', language: 'English' }
  , 'Expressway': { abbreviation: 'Expy', language: 'English' }
  , 'Extension': { abbreviation: 'Ext', language: 'English' }
  , 'Extensions': { abbreviation: 'Exts', language: 'English' }
  , 'Fall': { abbreviation: 'Fall', language: 'English' }
  , 'Falls': { abbreviation: 'Fls', language: 'English' }
  , 'Ferry': { abbreviation: 'Fry', language: 'English' }
  , 'Field': { abbreviation: 'Fld', language: 'English' }
  , 'Fields': { abbreviation: 'Flds', language: 'English' }
  , 'Flat': { abbreviation: 'Flt', language: 'English' }
  , 'Flats': { abbreviation: 'Flts', language: 'English' }
  , 'Ford': { abbreviation: 'Frd', language: 'English' }
  , 'Fords': { abbreviation: 'Frds', language: 'English' }
  , 'Forest': { abbreviation: 'Frst', language: 'English' }
  , 'Forge': { abbreviation: 'Frg', language: 'English' }
  , 'Forges': { abbreviation: 'Frgs', language: 'English' }
  , 'Fork': { abbreviation: 'Frk', language: 'English' }
  , 'Forks': { abbreviation: 'Frks', language: 'English' }
  , 'Fort': { abbreviation: 'Ft', language: 'English' }
  , 'Freeway': { abbreviation: 'Fwy', language: 'English' }
  , 'Garden': { abbreviation: 'Gdn', language: 'English' }
  , 'Gardens': { abbreviation: 'Gdns', language: 'English' }
  , 'Gateway': { abbreviation: 'Gtwy', language: 'English' }
  , 'Glen': { abbreviation: 'Gln', language: 'English' }
  , 'Glens': { abbreviation: 'Glns', language: 'English' }
  , 'Green': { abbreviation: 'Grn', language: 'English' }
  , 'Greens': { abbreviation: 'Grns', language: 'English' }
  , 'Grove': { abbreviation: 'Grv', language: 'English' }
  , 'Groves': { abbreviation: 'Grvs', language: 'English' }
  , 'Harbor': { abbreviation: 'Hbr', language: 'English' }
  , 'Harbors': { abbreviation: 'Hbrs', language: 'English' }
  , 'Haven': { abbreviation: 'Hvn', language: 'English' }
  , 'Heights': { abbreviation: 'Hts', language: 'English' }
  , 'Highway': { abbreviation: 'Hwy', language: 'English' }
  , 'Hill': { abbreviation: 'Hl', language: 'English' }
  , 'Hills': { abbreviation: 'Hls', language: 'English' }
  , 'Hollow': { abbreviation: 'Holw', language: 'English' }
  , 'Inlet': { abbreviation: 'Inlt', language: 'English' }
  , 'Island': { abbreviation: 'Is', language: 'English' }
  , 'Islands': { abbreviation: 'Iss', language: 'English' }
  , 'Isle': { abbreviation: 'Isle', language: 'English' }
  , 'Junction': { abbreviation: 'Jct', language: 'English' }
  , 'Junctions': { abbreviation: 'Jcts', language: 'English' }
  , 'Key': { abbreviation: 'Ky', language: 'English' }
  , 'Keys': { abbreviation: 'Kys', language: 'English' }
  , 'Knoll': { abbreviation: 'Knl', language: 'English' }
  , 'Knolls': { abbreviation: 'Knls', language: 'English' }
  , 'Lake': { abbreviation: 'Lk', language: 'English' }
  , 'Lakes': { abbreviation: 'Lks', language: 'English' }
  , 'Land': { abbreviation: 'Land', language: 'English' }
  , 'Landing': { abbreviation: 'Lndg', language: 'English' }
  , 'Lane': { abbreviation: 'Ln', language: 'English' }
  , 'Light': { abbreviation: 'Lgt', language: 'English' }
  , 'Lights': { abbreviation: 'Lgts', language: 'English' }
  , 'Loaf': { abbreviation: 'Lf', language: 'English' }
  , 'Lock': { abbreviation: 'Lck', language: 'English' }
  , 'Locks': { abbreviation: 'Lcks', language: 'English' }
  , 'Lodge': { abbreviation: 'Ldg', language: 'English' }
  , 'Loop': { abbreviation: 'Loop', language: 'English' }
  , 'Mall': { abbreviation: 'Mall', language: 'English' }
  , 'Manor': { abbreviation: 'Mnr', language: 'English' }
  , 'Manors': { abbreviation: 'Mnrs', language: 'English' }
  , 'Meadow': { abbreviation: 'Mdw', language: 'English' }
  , 'Meadows': { abbreviation: 'Mdws', language: 'English' }
  , 'Mews': { abbreviation: 'Mews', language: 'English' }
  , 'Mill': { abbreviation: 'Ml', language: 'English' }
  , 'Mills': { abbreviation: 'Mls', language: 'English' }
  , 'Mission': { abbreviation: 'Msn', language: 'English' }
  , 'Motorway': { abbreviation: 'Mtwy', language: 'English' }
  , 'Mount': { abbreviation: 'Mt', language: 'English' }
  , 'Mountain': { abbreviation: 'Mtn', language: 'English' }
  , 'Mountains': { abbreviation: 'Mtns', language: 'English' }
  , 'Neck': { abbreviation: 'Nck', language: 'English' }
  , 'Orchard': { abbreviation: 'Orch', language: 'English' }
  , 'Oval': { abbreviation: 'Oval', language: 'English' }
  , 'Overpass': { abbreviation: 'Opas', language: 'English' }
  , 'Park': { abbreviation: 'Park', language: 'English' }
  , 'Parks': { abbreviation: 'Park', language: 'English' }
  , 'Parkway': { abbreviation: 'Pkwy', language: 'English' }
  , 'Parkways': { abbreviation: 'Pkwy', language: 'English' }
  , 'Pass': { abbreviation: 'Pass', language: 'English' }
  , 'Passage': { abbreviation: 'Psge', language: 'English' }
  , 'Path': { abbreviation: 'Path', language: 'English' }
  , 'Pike': { abbreviation: 'Pike', language: 'English' }
  , 'Pine': { abbreviation: 'Pne', language: 'English' }
  , 'Pines': { abbreviation: 'Pnes', language: 'English' }
  , 'Place': { abbreviation: 'Pl', language: 'English' }
  , 'Plain': { abbreviation: 'Pln', language: 'English' }
  , 'Plains': { abbreviation: 'Plns', language: 'English' }
  , 'Plaza': { abbreviation: 'Plz', language: 'English' }
  , 'Point': { abbreviation: 'Pt', language: 'English' }
  , 'Points': { abbreviation: 'Pts', language: 'English' }
  , 'Port': { abbreviation: 'Prt', language: 'English' }
  , 'Ports': { abbreviation: 'Prts', language: 'English' }
  , 'Prairie': { abbreviation: 'Pr', language: 'English' }
  , 'Radial': { abbreviation: 'Radl', language: 'English' }
  , 'Ramp': { abbreviation: 'Ramp', language: 'English' }
  , 'Ranch': { abbreviation: 'Rnch', language: 'English' }
  , 'Rapid': { abbreviation: 'Rpd', language: 'English' }
  , 'Rapids': { abbreviation: 'Rpds', language: 'English' }
  , 'Rest': { abbreviation: 'Rst', language: 'English' }
  , 'Ridge': { abbreviation: 'Rdg', language: 'English' }
  , 'Ridges': { abbreviation: 'Rdgs', language: 'English' }
  , 'River': { abbreviation: 'Riv', language: 'English' }
  , 'Road': { abbreviation: 'Rd', language: 'English' }
  , 'Roads': { abbreviation: 'Rds', language: 'English' }
  , 'Route': { abbreviation: 'Rte', language: 'English' }
  , 'Row': { abbreviation: 'Row', language: 'English' }
  , 'Rue': { abbreviation: 'Rue', language: 'English' }
  , 'Run': { abbreviation: 'Run', language: 'English' }
  , 'Shoal': { abbreviation: 'Shl', language: 'English' }
  , 'Shoals': { abbreviation: 'Shls', language: 'English' }
  , 'Shore': { abbreviation: 'Shr', language: 'English' }
  , 'Shores': { abbreviation: 'Shrs', language: 'English' }
  , 'Skyway': { abbreviation: 'Skwy', language: 'English' }
  , 'Spring': { abbreviation: 'Spg', language: 'English' }
  , 'Springs': { abbreviation: 'Spgs', language: 'English' }
  , 'Spur': { abbreviation: 'Spur', language: 'English' }
  , 'Spurs': { abbreviation: 'Spur', language: 'English' }
  , 'Square': { abbreviation: 'Sq', language: 'English' }
  , 'Squares': { abbreviation: 'Sqs', language: 'English' }
  , 'Station': { abbreviation: 'Sta', language: 'English' }
  , 'Stravenue': { abbreviation: 'Stra', language: 'English' }
  , 'Stream': { abbreviation: 'Strm', language: 'English' }
  , 'Street': { abbreviation: 'St', language: 'English' }
  , 'Streets': { abbreviation: 'Sts', language: 'English' }
  , 'Summit': { abbreviation: 'Smt', language: 'English' }
  , 'Terrace': { abbreviation: 'Ter', language: 'English' }
  , 'Throughway': { abbreviation: 'Trwy', language: 'English' }
  , 'Trace': { abbreviation: 'Trce', language: 'English' }
  , 'Track': { abbreviation: 'Trak', language: 'English' }
  , 'Trafficway': { abbreviation: 'Trfy', language: 'English' }
  , 'Trail': { abbreviation: 'Trl', language: 'English' }
  , 'Trailer': { abbreviation: 'Trlr', language: 'English' }
  , 'Tunnel': { abbreviation: 'Tunl', language: 'English' }
  , 'Turnpike': { abbreviation: 'Tpke', language: 'English' }
  , 'Underpass': { abbreviation: 'Upas', language: 'English' }
  , 'Union': { abbreviation: 'Un', language: 'English' }
  , 'Unions': { abbreviation: 'Uns', language: 'English' }
  , 'Valley': { abbreviation: 'Vly', language: 'English' }
  , 'Valleys': { abbreviation: 'Vlys', language: 'English' }
  , 'Viaduct': { abbreviation: 'Via', language: 'English' }
  , 'View': { abbreviation: 'Vw', language: 'English' }
  , 'Views': { abbreviation: 'Vws', language: 'English' }
  , 'Village': { abbreviation: 'Vlg', language: 'English' }
  , 'Villages': { abbreviation: 'Vlgs', language: 'English' }
  , 'Ville': { abbreviation: 'Vl', language: 'English' }
  , 'Vista': { abbreviation: 'Vis', language: 'English' }
  , 'Walk': { abbreviation: 'Walk', language: 'English' }
  , 'Walks': { abbreviation: 'Walk', language: 'English' }
  , 'Wall': { abbreviation: 'Wall', language: 'English' }
  , 'Way': { abbreviation: 'Way', language: 'English' }
  , 'Ways': { abbreviation: 'Ways', language: 'English' }
  , 'Well': { abbreviation: 'Wl', language: 'English' }
  , 'Wells': { abbreviation: 'Wls', language: 'English' }
};

module.exports.CommonlyMisspelledStreetNameSuffixes = {
    'Allee':    'Alley'
  , 'Ally':     'Alley'
  , 'Aly':      'Alley'
  , 'Annex':    'Anex'
  , 'Annx':     'Anex'
  , 'Anx':      'Anex'
  , 'Arc':      'Arcade'
  , 'Av':       'Avenue'
  , 'Aven':     'Avenue'
  , 'Avenu':    'Avenue'
  , 'Avn':      'Avenue'
  , 'Avnue':    'Avenue'
  , 'Bayoo':    'Bayou'
  , 'Bayoo':    'Bayou'
  , 'Bch':      'Beach'
  , 'Bluf':     'Bluff'
  , 'Bot':      'Bottom'
  , 'Bottm':    'Bottom'
  , 'Boul':     'Boulevard'
  , 'Boulv':    'Boulevard'
  , 'Brnch':    'Branch'
  , 'Brdge':    'Bridge'
  , 'Bypa':     'Bypass'
  , 'Bypas':    'Bypass'
  , 'Byps':     'Bypass'
  , 'Cmp':      'Camp'
  , 'Canyn':    'Canyon'
  , 'Cnyn':     'Canyon'
  , 'Causwa':   'Causeway'
  , 'Cen':      'Center'
  , 'Cent':     'Center'
  , 'Centr':    'Center'
  , 'Centre':   'Center'
  , 'Cnter':    'Center'
  , 'Cntr':     'Center'
  , 'Circ':     'Circle'
  , 'Circl':    'Circle'
  , 'Crcl':     'Circle'
  , 'Crcle':    'Circle'
  , 'Crsent':   'Crescent'
  , 'Crsnt':    'Crescent'
  , 'Crssng':   'Crossing'
  , 'Div':      'Divide'
  , 'Dvd':      'Divide'
  , 'Driv':     'Drive'
  , 'Drv':      'Drive'
  , 'Exp':      'Expressway'
  , 'Expr':     'Expressway'
  , 'Express':  'Expressway'
  , 'Expw':     'Expressway'
  , 'Extn':     'Extension'
  , 'Extnsn':   'Extension'
  , 'Frry':     'Ferry'
  , 'Forests':  'Forest'
  , 'Forg':     'Forge'
  , 'Frt':      'Fort'
  , 'Freewy':	  'Freeway'
  , 'Frway':    'Freeway'
  , 'Frwy':     'Freeway'
  , 'Gardn':    'Garden'
  , 'Grden':    'Garden'
  , 'Grdn':     'Garden'
  , 'Grdns':    'Gardens'
  , 'Gatewy':   'Gateway'
  , 'Gatway':   'Gateway'
  , 'Gtway':    'Gateway'
  , 'Grov':     'Grove'
  , 'Harb':     'Harbor'
  , 'Harbr':    'Harbor'
  , 'Hrbor':    'Harbor'
  , 'Ht':       'Heights'
  , 'Highwy':   'Highway'
  , 'Hiway':    'Highway'
  , 'Hiwy':     'Highway'
  , 'Hway':     'Highway'
  , 'Hllw':     'Hollow'
  , 'Hollows':  'Hollow'
  , 'Holw':     'Hollow'
  , 'Holws':    'Hollow'	
  , 'Islnd':    'Island'
  , 'Islnds':   'Islands'
  , 'Isles':    'Isle'
  , 'Jction':   'Junction'
  , 'Jctn':     'Junction'
  , 'Junctn':   'Junction'
  , 'Juncton':  'Junction'
  , 'Jctns':    'Junctions'
  , 'Knol':     'Knoll'
  , 'Lndng':    'Landing'
  , 'Ldge':     'Lodge'
  , 'Lodg':     'Lodge'
  , 'Loops':    'Loop'
  , 'Medow':    'Meadow'
  , 'Medows':   'Meadows'
  , 'Missn':    'Mission'
  , 'Mssn':     'Mission'
  , 'Mnt':      'Mount'
  , 'Mntain':   'Mountain'
  , 'Mntn':     'Mountain'
  , 'Mountin':  'Mountain'
  , 'Mtin':     'Mountain'
  , 'Mntns':    'Mountains'
  ,	'Orchrd':   'Orchard'
  , 'Ovl':      'Oval'
  , 'Prk':      'Park'
  , 'Parkwy':   'Parkway'
  , 'Pkway':    'Parkway'
  , 'Pky':      'Parkway'
  , 'Pkwys':    'Parkways'
  , 'Paths':    'Path'
  , 'Pikes':    'Pike'
  , 'Plza':     'Plaza'
  , 'Prr':      'Prairie'
  , 'Rad':      'Radial'
  , 'Radiel':   'Radial'
  , 'Ranches':  'Ranch'
  , 'Rnchs':    'Ranch'
  , 'Rdge':     'Ridge'	
  , 'Rvr':      'River'
  , 'Rivr':     'River'
  , 'Shoar':    'Shore'
  , 'Shoars':   'Shores'
  , 'Spng':     'Spring'
  , 'Sprng':    'Spring'
  , 'Spngs':    'Springs'
  , 'Sprngs':   'Springs'
  , 'Sqr':      'Square'
  , 'Sqre':     'Square'
  , 'Squ':      'Square'
  , 'Sqrs':     'Squares'	
  , 'Statn':    'Station'
  , 'Stn':      'Station'
  , 'Strav':    'Stravenue'
  , 'Straven':  'Stravenue'
  , 'Stravn':   'Stravenue'
  , 'Strvn':    'Stravenue'
  , 'Strvnue':  'Stravenue'
  , 'Streme':   'Stream'
  , 'Strm':     'Stream'
  , 'Strt':     'Street'
  , 'Str':      'Street'
  , 'Sumit':    'Summit'
  , 'Sumitt':   'Summit'
  , 'Summitt':  'Summit'
  , 'Terr':     'Terrace'
  , 'Traces':   'Trace'
  , 'Tracks':   'Track'
  , 'Trk':      'Track'
  , 'Trks':     'Track'	
  , 'Trails':   'Trail'
  , 'Trls':     'Trail'
  , 'Trlrs':    'Trailer'
  , 'Tunel':    'Tunnel'
  , 'Tunls':    'Tunnel'
  , 'Tunnels':  'Tunnel'
  , 'Tunnl':    'Tunnel'
  , 'Trnpk':    'Turnpike'
  , 'Turnpk':   'Turnpike'
  , 'Vally':    'Valley'
  , 'Vlly':     'Valley'
  , 'Vdct':     'Viaduct'
  , 'Viadct':   'Viaduct'
  , 'Vill':     'Village'
  , 'Villag':   'Village'
  , 'Villg':    'Village'
  , 'Villiage': 'Village'
  , 'Vist':     'Vista'
  , 'Vst':      'Vista'
  , 'Vsta':     'Vista'
  , 'Wy':       'Way'
};

//build objects for each of the misspellings in the form of:
// { correction: String, correction: String, abbreviation: String, language: String }
for (var s in module.exports.CommonlyMisspelledStreetNameSuffixes) {
  module.exports.CommonlyMisspelledStreetNameSuffixes[s] = extend(
    { 'misspelling': s, 'correction': module.exports.CommonlyMisspelledStreetNameSuffixes[s] },
    module.exports.StreetNameSuffixes[module.exports.CommonlyMisspelledStreetNameSuffixes[s]]
  );  
}
