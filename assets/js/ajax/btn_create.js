$(document).ready(function () {
  //$("#msg-success").hide();
  $(".btn_create").click(function (e) {
    e.stopPropagation();
    e.preventDefault();

    let prefix = $(this)
      .parent("form")
      .find("input[name='prefix']")
      .val()
      .trim()
      .split("");
    let number = $(this)
      .parent("form")
      .find("input[name='number']")
      .val()
      .trim()
      .split("");
    let name = $(this).parent("form").find("input[name='name']").val().trim();

    var pre = [];
    var newPre = [];
    var newNum = [];

    var cero = [false, false];

    number.forEach((e, i) => {
      if (e === "-" || e === " ") {
        e = null;
      }
      newNum.push(e);
    });

    number = newNum.join("");

    prefix.forEach((e, i) => {
      if (e === "-" || e === " ") {
        e = null;
      }
      pre.push(e);
    });

    pre.join("").split("").forEach((e, i) => {
      if (i === 0 && e === "0") {
        cero[0] = true;
      }
      if (i === 1 && e === "0") {
        cero[1] = true;
      }
      newPre.push(e);
    });

    console.log(newPre);

    if (cero[0] === true && cero[1] === true) {
      newPre.splice(0, 2, "+");
    }
    prefix = newPre.join("");

    var array = [
      {
        prefix: "+1",
        name: "Canada",
      },
      {
        prefix: "+1340",
        name: "United States Virgin Islands (USA)",
      },
      {
        prefix: "+1670",
        name: "Northern Mariana Islands (USA)",
      },
      {
        prefix: "+1340",
        name: "Guam (USA)",
      },
      {
        prefix: "+1684 ",
        name: "American Samoa (USA)",
      },
      {
        prefix: "+1787",
        name: "Puerto Rico (USA)",
      },
      {
        prefix: "+1939",
        name: "Puerto Rico (USA)",
      },
      {
        prefix: "+1242",
        name: "Bahamas",
      },
      {
        prefix: "+1246",
        name: "Barbados",
      },
      {
        prefix: "+1264",
        name: "Anguilla",
      },
      {
        prefix: "+1268",
        name: "Antigua and Barbuda",
      },
      {
        prefix: "+1284",
        name: "British Virgin Islands",
      },
      {
        prefix: "+1345",
        name: "Cayman Islands",
      },
      {
        prefix: "+1441",
        name: "Bermuda",
      },
      {
        prefix: "+1473",
        name: "Grenada",
      },
      {
        prefix: "+1649",
        name: "Turks and Caicos Islands",
      },
      {
        prefix: "+1658",
        name: "Jamaica",
      },
      {
        prefix: "+1876",
        name: "Jamaica",
      },
      {
        prefix: "+1664",
        name: "Montserrat",
      },
      {
        prefix: "+1721",
        name: "Sint Maarten",
      },
      {
        prefix: "+1758",
        name: "Saint Lucia",
      },
      {
        prefix: "+1767",
        name: "Dominica",
      },
      {
        prefix: "+1784",
        name: "Saint Vincent and the Grenadines",
      },
      {
        prefix: "+1809",
        name: "Dominican Republic",
      },
      {
        prefix: "+1829",
        name: "Dominican Republic",
      },
      {
        prefix: "+1849",
        name: "Dominican Republic",
      },
      {
        prefix: "+1868",
        name: "Trinidad and Tobago",
      },
      {
        prefix: "+1869",
        name: "Saint Kitts and Nevis",
      },
      {
        prefix: "+20",
        name: "Egypt",
      },
      {
        prefix: "+210",
        name: "unassigned",
      },
      {
        prefix: "+211",
        name: "South Sudan",
      },
      {
        prefix: "+212",
        name: "Morocco (including Western Sahara)",
      },
      {
        prefix: "+213",
        name: "Algeria",
      },
      {
        prefix: "+214",
        name: "unassigned",
      },
      {
        prefix: "+215",
        name: "unassigned",
      },
      {
        prefix: "+216",
        name: "Tunisia",
      },
      {
        prefix: "+217",
        name: "unassigned",
      },
      {
        prefix: "+218",
        name: "Libya",
      },
      {
        prefix: "+219",
        name: "unassigned",
      },
      {
        prefix: "+220",
        name: "Gambia",
      },
      {
        prefix: "+221",
        name: "Senegal",
      },
      {
        prefix: "+222",
        name: "Mauritania",
      },
      {
        prefix: "+223",
        name: "Mali",
      },
      {
        prefix: "+224",
        name: "Guinea",
      },
      {
        prefix: "+225",
        name: "Ivory Coast",
      },
      {
        prefix: "+226",
        name: "Burkina Faso",
      },
      {
        prefix: "+227",
        name: "Niger",
      },
      {
        prefix: "+228",
        name: "Togo",
      },
      {
        prefix: "+229",
        name: "Benin",
      },
      {
        prefix: "+230",
        name: "Mauritius",
      },
      {
        prefix: "+231",
        name: "Liberia",
      },
      {
        prefix: "+232",
        name: "Sierra Leone",
      },
      {
        prefix: "+233",
        name: "Ghana",
      },
      {
        prefix: "+234",
        name: "Nigeria",
      },
      {
        prefix: "+235",
        name: "Chad",
      },
      {
        prefix: "+236",
        name: "Central African Republic",
      },
      {
        prefix: "+237",
        name: "Cameroon",
      },
      {
        prefix: "+238",
        name: "Cape Verde",
      },
      {
        prefix: "+239",
        name: "São Tome and Principe",
      },
      {
        prefix: "+240",
        name: "Equatorial Guinea",
      },
      {
        prefix: "+241",
        name: "Gabon",
      },
      {
        prefix: "+242",
        name: "Republic of the Congo",
      },
      {
        prefix: "+243",
        name: "Democratic Republic of the Congo",
      },
      {
        prefix: "+244",
        name: "Angola",
      },
      {
        prefix: "+245",
        name: "Guinea-Bissau",
      },
      {
        prefix: "+246",
        name: "British Indian Ocean Territory",
      },
      {
        prefix: "+247",
        name: "Ascension Island",
      },
      {
        prefix: "+248",
        name: "Seychelles",
      },
      {
        prefix: "+249",
        name: "Sudan",
      },
      {
        prefix: "+250",
        name: "Rwanda",
      },
      {
        prefix: "+251",
        name: "Ethiopia",
      },
      {
        prefix: "+252",
        name: "Somalia",
      },
      {
        prefix: "+253",
        name: "Djibouti",
      },
      {
        prefix: "+254",
        name: "Kenya",
      },
      {
        prefix: "+255",
        name: "Tanzania",
      },
      {
        prefix: "+256",
        name: "Uganda",
      },
      {
        prefix: "+257",
        name: "Burundi",
      },
      {
        prefix: "+258",
        name: "Mozambique",
      },
      {
        prefix: "+259",
        name: "unassigned",
      },
      {
        prefix: "+260",
        name: "Zambia",
      },
      {
        prefix: "+261",
        name: "Madagascar",
      },
      {
        prefix: "+262",
        name: "Reunion",
      },
      {
        prefix: "+262269",
        name: "Mayotte",
      },
      {
        prefix: "+262639",
        name: "Mayotte",
      },
      {
        prefix: "+263",
        name: "Zimbabwe",
      },
      {
        prefix: "+264",
        name: "Namibia",
      },
      {
        prefix: "+265",
        name: "Malawi",
      },
      {
        prefix: "+266",
        name: "Lesotho",
      },
      {
        prefix: "+267",
        name: "Botswana",
      },
      {
        prefix: "+268",
        name: "Eswatini",
      },
      {
        prefix: "+269",
        name: "Comoros",
      },
      {
        prefix: "+27",
        name: "South Africa",
      },
      {
        prefix: "+290",
        name: "Saint Helena",
      },
      {
        prefix: "+2908",
        name: "Tristan da Cunha",
      },
      {
        prefix: "+291",
        name: "Eritrea",
      },
      {
        prefix: "+292",
        name: "unassigned",
      },
      {
        prefix: "+293",
        name: "unassigned",
      },
      {
        prefix: "+294",
        name: "unassigned",
      },
      {
        prefix: "+295",
        name: "unassigned",
      },
      {
        prefix: "+296",
        name: "unassigned",
      },
      {
        prefix: "+297",
        name: "Aruba",
      },
      {
        prefix: "+298",
        name: "Faroe Islands",
      },
      {
        prefix: "+299",
        name: "Greenland",
      },
      {
        prefix: "+30",
        name: "Greece",
      },
      {
        prefix: "+31",
        name: "Netherlands",
      },
      {
        prefix: "+32",
        name: "Belgium",
      },
      {
        prefix: "+33",
        name: "France",
      },
      {
        prefix: "+34",
        name: "Spain",
      },
      {
        prefix: "+350",
        name: "Gibraltar",
      },
      {
        prefix: "+351",
        name: "Portugal",
      },
      {
        prefix: "+352",
        name: "Luxembourg",
      },
      {
        prefix: "+353",
        name: "Ireland",
      },
      {
        prefix: "+354",
        name: "Iceland",
      },
      {
        prefix: "+355",
        name: "Albania",
      },
      {
        prefix: "+356",
        name: "Malta",
      },
      {
        prefix: "+357",
        name: "Cyprus (including  Akrotiri and Dhekelia)",
      },
      {
        prefix: "+358",
        name: "Finland",
      },
      {
        prefix: "+35818",
        name: "Aland Islands",
      },
      {
        prefix: "+359",
        name: "Bulgaria",
      },
      {
        prefix: "+36",
        name: "Hungary",
      },
      {
        prefix: "+370",
        name: "Lithuania",
      },
      {
        prefix: "+371",
        name: "Latvia",
      },
      {
        prefix: "+372",
        name: "Estonia",
      },
      {
        prefix: "+373",
        name: "Moldova",
      },
      {
        prefix: "+374",
        name: "Armenia",
      },
      {
        prefix: "+37447",
        name: "Artsakh",
      },
      {
        prefix: "+37497",
        name: "Artsakh (mobile phones)",
      },
      {
        prefix: "+375",
        name: "Belarus",
      },
      {
        prefix: "+376",
        name: "Andorra",
      },
      {
        prefix: "+377",
        name: "Monaco",
      },
      {
        prefix: "+378",
        name: "San Marino",
      },
      {
        prefix: "+379",
        name: "Vatican City",
      },
      {
        prefix: "+38 ",
        name: "Discontinued (was assigned to the  Socialist Federal Republic of Yugoslavia until its break-up)",
      },
      {
        prefix: "+380",
        name: "Ukraine",
      },
      {
        prefix: "+381",
        name: "Serbia",
      },
      {
        prefix: "+382",
        name: "Montenegro",
      },
      {
        prefix: "+383",
        name: "Kosovo",
      },
      {
        prefix: "+384",
        name: "unassigned",
      },
      {
        prefix: "+385",
        name: "Croatia",
      },
      {
        prefix: "+386",
        name: "Slovenia",
      },
      {
        prefix: "+387",
        name: "Bosnia and Herzegovina",
      },
      {
        prefix: "+388",
        name: "Discontinued",
      },
      {
        prefix: "+389",
        name: "North Macedonia",
      },
      {
        prefix: "+39",
        name: "Italy",
      },
      {
        prefix: "+3906698",
        name: "Vatican City",
      },
      {
        prefix: "+390549",
        name: "San Marino(if calling from Italy)",
      },
      {
        prefix: `+4191`,
        name: `Italy (This is the dialling code for the Italian exclave of Campione d'Italia)`,
      },
      {
        prefix: "+40",
        name: "Romania",
      },
      {
        prefix: "+41",
        name: "Switzerland",
      },
      {
        prefix: "+42",
        name: "Discontinued",
      },
      {
        prefix: "+420",
        name: "Czech Republic",
      },
      {
        prefix: "+421",
        name: "Slovakia",
      },
      {
        prefix: "+422",
        name: "unassigned",
      },
      {
        prefix: "+423",
        name: "Liechtenstein",
      },
      {
        prefix: "+424",
        name: "unassigned",
      },
      {
        prefix: "+425",
        name: "unassigned",
      },
      {
        prefix: "+426",
        name: "unassigned",
      },
      {
        prefix: "+427",
        name: "unassigned",
      },
      {
        prefix: "+428",
        name: "unassigned",
      },
      {
        prefix: "+429",
        name: "unassigned",
      },
      {
        prefix: "+43",
        name: "Austria",
      },
      {
        prefix: "+44",
        name: "United Kingdom",
      },
      {
        prefix: "+441481",
        name: "Guernsey",
      },
      {
        prefix: "+441534",
        name: "Jersey",
      },
      {
        prefix: "+441624",
        name: "Isle of Man",
      },
      {
        prefix: "+45",
        name: "Denmark",
      },
      {
        prefix: "+46",
        name: "Sweden",
      },
      {
        prefix: "+47",
        name: "Norway",
      },
      {
        prefix: "+4779",
        name: "Svalbard",
      },
      {
        prefix: "+48",
        name: "Poland",
      },
      {
        prefix: "+49",
        name: "Germany",
      },
      {
        prefix: "+500",
        name: "Falkland Islands",
      },
      {
        prefix: "+500x",
        name: "South Georgia and the South Sandwich Islands",
      },
      {
        prefix: "+501",
        name: "Belize",
      },
      {
        prefix: "+502",
        name: "Guatemala",
      },
      {
        prefix: "+503",
        name: "El Salvador",
      },
      {
        prefix: "+504",
        name: "Honduras",
      },
      {
        prefix: "+505",
        name: "Nicaragua",
      },
      {
        prefix: "+506",
        name: "Costa Rica",
      },
      {
        prefix: "+507",
        name: "Panama",
      },
      {
        prefix: "+508",
        name: "Saint-Pierre and Miquelon",
      },
      {
        prefix: "+509",
        name: "Haiti",
      },
      {
        prefix: "+51",
        name: "Peru",
      },
      {
        prefix: "+52",
        name: "Mexico",
      },
      {
        prefix: "+53",
        name: "Cuba",
      },
      {
        prefix: "+54",
        name: "Argentina",
      },
      {
        prefix: "+55",
        name: "Brazil",
      },
      {
        prefix: "+56",
        name: "Chile",
      },
      {
        prefix: "+57",
        name: "Colombia",
      },
      {
        prefix: "+58",
        name: "Venezuela",
      },
      {
        prefix: "+590",
        name: "Guadeloupe (including Saint Barthelemy, Saint Martin)",
      },
      {
        prefix: "+591",
        name: "Bolivia",
      },
      {
        prefix: "+592",
        name: "Guyana",
      },
      {
        prefix: "+593",
        name: "Ecuador",
      },
      {
        prefix: "+594",
        name: "French Guiana",
      },
      {
        prefix: "+595",
        name: "Paraguay",
      },
      {
        prefix: "+596",
        name: "Martinique",
      },
      {
        prefix: "+597",
        name: "Suriname",
      },
      {
        prefix: "+598",
        name: "Uruguay",
      },
      {
        prefix: "+5993",
        name: "Sint Eustatius",
      },
      {
        prefix: "+5994",
        name: "Saba",
      },
      {
        prefix: "+5999",
        name: "Curaçao",
      },
      {
        prefix: "+60",
        name: "Malaysia",
      },
      {
        prefix: "+61",
        name: "Australia 1",
      },
      {
        prefix: "+6189162",
        name: "Cocos Islands",
      },
      {
        prefix: "+6189164",
        name: "Christmas Island",
      },
      {
        prefix: "+62",
        name: "Indonesia",
      },
      {
        prefix: "+63",
        name: "Philippines",
      },
      {
        prefix: "+64",
        name: "New Zealand",
      },
      {
        prefix: "+64xx",
        name: "Pitcairn Islands",
      },
      {
        prefix: "+65",
        name: "Singapore",
      },
      {
        prefix: "+66",
        name: "Thailand",
      },
      {
        prefix: "+6721x",
        name: "Australia Australian Antarctic Territory",
      },
      {
        prefix: "+6723",
        name: "Norfolk Island",
      },
      {
        prefix: "+673",
        name: "Brunei",
      },
      {
        prefix: "+674",
        name: "Nauru",
      },
      {
        prefix: "+675",
        name: "Papua New Guinea",
      },
      {
        prefix: "+676",
        name: "Tonga",
      },
      {
        prefix: "+677",
        name: "Solomon Islands",
      },
      {
        prefix: "+678",
        name: "Vanuatu",
      },
      {
        prefix: "+679",
        name: "Fiji",
      },
      {
        prefix: "+680",
        name: "Palau",
      },
      {
        prefix: "+681",
        name: "Wallis and Futuna",
      },
      {
        prefix: "+682",
        name: "Cook Islands",
      },
      {
        prefix: "+683",
        name: "Niue",
      },
      {
        prefix: "+685",
        name: "Samoa",
      },
      {
        prefix: "+686",
        name: "Kiribati",
      },
      {
        prefix: "+687",
        name: "New Caledonia",
      },
      {
        prefix: "+688",
        name: "Tuvalu",
      },
      {
        prefix: "+689",
        name: "French Polynesia",
      },
      {
        prefix: "+690",
        name: "Tokelau",
      },
      {
        prefix: "+691",
        name: "Federated States of Micronesia",
      },
      {
        prefix: "+692",
        name: "Marshall Islands",
      },
      {
        prefix: "+693",
        name: "unassigned",
      },
      {
        prefix: "+694",
        name: "unassigned",
      },
      {
        prefix: "+695",
        name: "unassigned",
      },
      {
        prefix: "+696",
        name: "unassigned",
      },
      {
        prefix: "+697",
        name: "unassigned",
      },
      {
        prefix: "+698",
        name: "unassigned",
      },
      {
        prefix: "+699",
        name: "unassigned",
      },
      {
        prefix: "+7",
        name: "Russia",
      },
      {
        prefix: "+76xx",
        name: "Kazakhstan",
      },
      {
        prefix: "+7xx",
        name: "Kazakhstan",
      },
      {
        prefix: "+7840",
        name: "Abkhazia ",
      },
      {
        prefix: "+7940",
        name: "Abkhazia",
      },
      {
        prefix: "+99544",
        name: "Abkhazia",
      },
      {
        prefix: "+800",
        name: "International Freephone (UIFN)",
      },
      {
        prefix: "+801",
        name: "unassigned",
      },
      {
        prefix: "+802",
        name: "unassigned",
      },
      {
        prefix: "+803",
        name: "unassigned",
      },
      {
        prefix: "+804",
        name: "unassigned",
      },
      {
        prefix: "+805",
        name: "unassigned",
      },
      {
        prefix: "+806",
        name: "unassigned",
      },
      {
        prefix: "+807",
        name: "unassigned",
      },
      {
        prefix: "+808",
        name: "reserved for Shared Cost Services",
      },
      {
        prefix: "+809",
        name: "unassigned",
      },
      {
        prefix: "+81",
        name: "Japan",
      },
      {
        prefix: "+82",
        name: "South Korea",
      },
      {
        prefix: "+83x",
        name: "unassigned",
      },
      {
        prefix: "+84",
        name: "Vietnam",
      },
      {
        prefix: "+850",
        name: "North Korea",
      },
      {
        prefix: "+851",
        name: "unassigned",
      },
      {
        prefix: "+852",
        name: "Hong Kong",
      },
      {
        prefix: "+853",
        name: "Macau",
      },
      {
        prefix: "+854",
        name: "unassigned",
      },
      {
        prefix: "+855",
        name: "Cambodia",
      },
      {
        prefix: "+856",
        name: "Laos",
      },
      {
        prefix: "+857",
        name: "unassigned, formerly ANAC satellite service",
      },
      {
        prefix: "+858",
        name: "unassigned, formerly ANAC satellite service",
      },
      {
        prefix: "+859",
        name: "unassigned",
      },
      {
        prefix: "+86",
        name: "China",
      },
      {
        prefix: "+870",
        name: 'Inmarsat "SNAC" service',
      },
      {
        prefix: "+871",
        name: "unassigned (formerly used by Inmarsat, Atlantic East), discontinued in 2008",
      },
      {
        prefix: "+872",
        name: "unassigned (formerly used by Inmarsat, Pacific), discontinued in 2008",
      },
      {
        prefix: "+873",
        name: "unassigned (formerly used by Inmarsat, Indian), discontinued in 2008",
      },
      {
        prefix: "+874",
        name: "unassigned (formerly used by Inmarsat, Atlantic West), discontinued 2008",
      },
      {
        prefix: "+875",
        name: "reserved for Maritime Mobile service",
      },
      {
        prefix: "+876",
        name: "reserved for Maritime Mobile service",
      },
      {
        prefix: "+877",
        name: "reserved for Maritime Mobile service",
      },
      {
        prefix: "+878",
        name: "Universal Personal Telecommunications services",
      },
      {
        prefix: "+879",
        name: "reserved for national non-commercial purposes",
      },
      {
        prefix: "+880",
        name: "Bangladesh",
      },
      {
        prefix: "+881",
        name: "Global Mobile Satellite System",
      },
      {
        prefix: "+882",
        name: "International Networks",
      },
      {
        prefix: "+883",
        name: "International Networks",
      },
      {
        prefix: "+884",
        name: "unassigned",
      },
      {
        prefix: "+885",
        name: "unassigned",
      },
      {
        prefix: "+886",
        name: "Taiwan",
      },
      {
        prefix: "+887",
        name: "unassigned",
      },
      {
        prefix: "+888",
        name: "Telecommunications for Disaster Relief by OCHA",
      },
      {
        prefix: "+889",
        name: "unassigned",
      },
      {
        prefix: "+89x",
        name: "unassigned",
      },
      {
        prefix: "+90",
        name: "Turkey",
      },
      {
        prefix: "+90392",
        name: "Northern Cyprus",
      },
      {
        prefix: "+91",
        name: "India",
      },
      {
        prefix: "+92",
        name: "Pakistan",
      },
      {
        prefix: "+92582",
        name: "Azad Kashmir",
      },
      {
        prefix: "+92581",
        name: "Gilgit Baltistan",
      },
      {
        prefix: "+93",
        name: "Afghanistan",
      },
      {
        prefix: "+94",
        name: "Sri Lanka",
      },
      {
        prefix: "+95",
        name: "Myanmar",
      },
      {
        prefix: "+960",
        name: "Maldives",
      },
      {
        prefix: "+961",
        name: "Lebanon",
      },
      {
        prefix: "+962",
        name: "Jordan",
      },
      {
        prefix: "+963",
        name: "Syria",
      },
      {
        prefix: "+964",
        name: "Iraq",
      },
      {
        prefix: "+965",
        name: "Kuwait",
      },
      {
        prefix: "+966",
        name: "Saudi Arabia",
      },
      {
        prefix: "+967",
        name: "Yemen",
      },
      {
        prefix: "+968",
        name: "Oman",
      },
      {
        prefix: "+969",
        name: "unassigned",
      },
      {
        prefix: "+970",
        name: "Palestine",
      },
      {
        prefix: "+971",
        name: "United Arab Emirates",
      },
      {
        prefix: "+972",
        name: "Israel",
      },
      {
        prefix: "+973",
        name: "Bahrain",
      },
      {
        prefix: "+974",
        name: "Qatar",
      },
      {
        prefix: "+975",
        name: "Bhutan",
      },
      {
        prefix: "+976",
        name: "Mongolia",
      },
      {
        prefix: "+977",
        name: "Nepal",
      },
      {
        prefix: "+978",
        name: "unassigned",
      },
      {
        prefix: "+979",
        name: "International Premium Rate Service",
      },
      {
        prefix: "+98",
        name: "Iran",
      },
      {
        prefix: "+990",
        name: "unassigned",
      },
      {
        prefix: "+991",
        name: "International Telecommunications Public Correspondence Service trial (ITPCS)",
      },
      {
        prefix: "+992",
        name: "Tajikistan",
      },
      {
        prefix: "+993",
        name: "Turkmenistan",
      },
      {
        prefix: "+994",
        name: "Azerbaijan",
      },
      {
        prefix: "+995",
        name: "Georgia",
      },
      {
        prefix: "+99534",
        name: "South Ossetia",
      },
      {
        prefix: "+99544",
        name: "Abkhazia",
      },
      {
        prefix: "+996",
        name: "Kyrgyzstan",
      },
      {
        prefix: "+997",
        name: "Kazakhstan",
      },
      {
        prefix: "+998",
        name: "Uzbekistan",
      },
      {
        prefix: "+999",
        name: "reserved for future global service",
      },
    ];

    var existCountry = [];

    array.forEach((e) => {
      if (e.prefix === prefix) {
        existCountry.push(e);
      }
    });

    if (existCountry.length > 0) {
      prefix = existCountry[0].prefix;
      name = existCountry[0].name;
    } else {
      if (prefix === "07" || prefix === "02" || prefix === "03") {
        name = "Romanian mobile number";
      }else {
        name = "German mobile number";
      }
    }

    $("#prefix").val(prefix);
    $("#number").val();
    $("#name").val(name);

    if (
      $("#prefix").val() === "" ||
      $("#number").val() === "" ||
      $("#name").val() === ""
    ) {
      alert("Please, complete all the fields");
    } else {
      $.ajax({
        method: "POST",
        url: "index.php?c=phone&a=create",
        data: {
          prefix: prefix,
          name: name,
          number: number,
        },
      }).done(function (response) {
        $("#registers").empty();
        var phones = JSON.parse(response);
        console.log(phones.data);
        if (phones.exist === 1) {
          console.log(response);
          alert("This combination of prefix and number already exist in our database");
        }
        let template = "";
        $.each(
          phones.exist === 1 ? phones.data[1] : phones.data[0],
          function (key, phone) {
            template += `<tr>
                    <td class="info">${phone["id"]}</td>
                    <td class="info">${phone["prefix"]}</td>
                    <td class="info">${phone["number"]}</td>
                    <td class="info">${phone["name"]}</td>
      
                    <td class="actions">
                        <a href="#" title="Delete item" data-id='${phone["id"]}' class='delete_id delete'>Delete
                        </a>
                        <a href="#" title="Edit item" data-id='${phone["id"]}' class='edit_id edit'>Edit
                        </a>
                    </td>
                  </tr>`;
          }
        );

        $("#id").val("");
        $("#prefix").val("");
        $("#number").val("");
        $("#name").val("");
        $("#registers").html(template);
      }); //ajax create finishes..
    }
  }); //create finishes
}); //ready finishes
