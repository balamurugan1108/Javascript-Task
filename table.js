function Binding() {
    debugger
    var tables = [
        {
            "id": 1,
            "email": "crospars0@discovery.com",
            "gender": "Female",
            "last_name": "Rospars",
            "first_name": "Cicely",
            "ip_address": "136.4.50.121"
        },
        {
            "id": 2,
            "email": "mbaccup1@nature.com",
            "gender": "Bigender",
            "last_name": "Baccup",
            "first_name": "Marmaduke",
            "ip_address": "248.53.9.242"
        },
        {
            "id": 3,
            "email": "apembry2@netlog.com",
            "gender": "Female",
            "last_name": "Pembry",
            "first_name": "Ashley",
            "ip_address": "173.143.124.122"
        },
        {
            "id": 4,
            "email": "rolwen3@psu.edu",
            "gender": "Female",
            "last_name": "Olwen",
            "first_name": "Rona",
            "ip_address": "218.239.152.127"
        },
        {
            "id": 5,
            "email": "lmacsween4@oakley.com",
            "gender": "Female",
            "last_name": "MacSween",
            "first_name": "Leonie",
            "ip_address": "162.104.114.125"
        },
        {
            "id": 6,
            "email": "mleavry5@spiegel.de",
            "gender": "Female",
            "last_name": "Leavry",
            "first_name": "Maisey",
            "ip_address": "184.42.120.216"
        },
        {
            "id": 7,
            "email": "crex6@nasa.gov",
            "gender": "Male",
            "last_name": "Rex",
            "first_name": "Cory",
            "ip_address": "25.147.180.40"
        },
        {
            "id": 8,
            "email": "cvanyarkin7@arizona.edu",
            "gender": "Female",
            "last_name": "Vanyarkin",
            "first_name": "Charlotta",
            "ip_address": "93.9.236.186"
        },
        {
            "id": 9,
            "email": "hfruchter8@illinois.edu",
            "gender": "Male",
            "last_name": "Fruchter",
            "first_name": "Humphrey",
            "ip_address": "161.126.186.187"
        },
        {
            "id": 10,
            "email": "lnial9@springer.com",
            "gender": "Female",
            "last_name": "Nial",
            "first_name": "Laurel",
            "ip_address": "115.218.88.231"
        },
        {
            "id": 11,
            "email": "amcgivenaa@jiathis.com",
            "gender": "Male",
            "last_name": "McGivena",
            "first_name": "Arlan",
            "ip_address": "204.54.74.178"
        },
        {
            "id": 12,
            "email": "jdelafeldb@jimdo.com",
            "gender": "Female",
            "last_name": "De la Feld",
            "first_name": "Jorie",
            "ip_address": "50.98.119.99"
        },
        {
            "id": 13,
            "email": "emaccoughanc@fda.gov",
            "gender": "Male",
            "last_name": "MacCoughan",
            "first_name": "Eb",
            "ip_address": "224.199.93.88"
        },
        {
            "id": 14,
            "email": "nflightd@sogou.com",
            "gender": "Male",
            "last_name": "Flight",
            "first_name": "Nevin",
            "ip_address": "98.209.72.110"
        },
        {
            "id": 15,
            "email": "bstrikere@ycombinator.com",
            "gender": "Female",
            "last_name": "Striker",
            "first_name": "Brandise",
            "ip_address": "60.240.68.129"
        },
        {
            "id": 16,
            "email": "hwintringhamf@github.com",
            "gender": "Male",
            "last_name": "Wintringham",
            "first_name": "Hastings",
            "ip_address": "143.84.176.53"
        },
        {
            "id": 17,
            "email": "nwilboreg@latimes.com",
            "gender": "Male",
            "last_name": "Wilbore",
            "first_name": "Nels",
            "ip_address": "150.48.90.1"
        },
        {
            "id": 18,
            "email": "rduffyh@google.cn",
            "gender": "Male",
            "last_name": "Duffy",
            "first_name": "Roderigo",
            "ip_address": "243.238.178.158"
        },
        {
            "id": 19,
            "email": "bmanchetti@dyndns.org",
            "gender": "Male",
            "last_name": "Manchett",
            "first_name": "Berky",
            "ip_address": "24.64.226.25"
        },
        {
            "id": 20,
            "email": "lslopierj@loc.gov",
            "gender": "Genderfluid",
            "last_name": "Slopier",
            "first_name": "Lauree",
            "ip_address": "241.156.163.234"
        },
        {
            "id": 21,
            "email": "olouisetk@blogs.com",
            "gender": "Female",
            "last_name": "Louiset",
            "first_name": "Octavia",
            "ip_address": "36.90.3.115"
        },
        {
            "id": 22,
            "email": "hdarrelll@creativecommons.org",
            "gender": "Male",
            "last_name": "Darrell",
            "first_name": "Hubey",
            "ip_address": "119.121.94.198"
        },
        {
            "id": 23,
            "email": "mbriknerm@webeden.co.uk",
            "gender": "Female",
            "last_name": "Brikner",
            "first_name": "Manya",
            "ip_address": "233.33.49.239"
        },
        {
            "id": 24,
            "email": "mlouisotn@123-reg.co.uk",
            "gender": "Female",
            "last_name": "Louisot",
            "first_name": "Marthe",
            "ip_address": "225.186.139.90"
        },
        {
            "id": 25,
            "email": "dferoneto@wiley.com",
            "gender": "Female",
            "last_name": "Feronet",
            "first_name": "Deena",
            "ip_address": "210.203.236.198"
        },
        {
            "id": 26,
            "email": "vlofthousep@xrea.com",
            "gender": "Female",
            "last_name": "Lofthouse",
            "first_name": "Vevay",
            "ip_address": "28.198.85.168"
        },
        {
            "id": 27,
            "email": "gduffrieq@un.org",
            "gender": "Male",
            "last_name": "Duffrie",
            "first_name": "Giacobo",
            "ip_address": "172.95.87.255"
        },
        {
            "id": 28,
            "email": "bsmurfittr@example.com",
            "gender": "Female",
            "last_name": "Smurfitt",
            "first_name": "Bibby",
            "ip_address": "65.153.157.159"
        },
        {
            "id": 29,
            "email": "lstaddons@china.com.cn",
            "gender": "Female",
            "last_name": "Staddon",
            "first_name": "Leilah",
            "ip_address": "241.44.44.104"
        },
        {
            "id": 30,
            "email": "sfelminghamt@si.edu",
            "gender": "Female",
            "last_name": "Felmingham",
            "first_name": "Shannah",
            "ip_address": "78.216.63.60"
        },
        {
            "id": 31,
            "email": "dbenmoreu@parallels.com",
            "gender": "Male",
            "last_name": "Benmore",
            "first_name": "Duky",
            "ip_address": "131.83.223.9"
        },
        {
            "id": 32,
            "email": "snormandv@elegantthemes.com",
            "gender": "Male",
            "last_name": "Normand",
            "first_name": "Sylvan",
            "ip_address": "179.63.96.132"
        },
        {
            "id": 33,
            "email": "rkofaxw@latimes.com",
            "gender": "Male",
            "last_name": "Kofax",
            "first_name": "Raymund",
            "ip_address": "133.228.191.183"
        },
        {
            "id": 34,
            "email": "etaplinx@yahoo.com",
            "gender": "Male",
            "last_name": "Taplin",
            "first_name": "Ephrayim",
            "ip_address": "14.131.173.96"
        },
        {
            "id": 35,
            "email": "hrainforthy@intel.com",
            "gender": "Bigender",
            "last_name": "Rainforth",
            "first_name": "Harman",
            "ip_address": "130.185.149.172"
        },
        {
            "id": 36,
            "email": "zpfeffelz@1688.com",
            "gender": "Female",
            "last_name": "Pfeffel",
            "first_name": "Zsa zsa",
            "ip_address": "73.169.153.214"
        },
        {
            "id": 37,
            "email": "wtwaits10@shutterfly.com",
            "gender": "Male",
            "last_name": "Twaits",
            "first_name": "Wittie",
            "ip_address": "96.93.106.6"
        },
        {
            "id": 38,
            "email": "haleksandrov11@marriott.com",
            "gender": "Male",
            "last_name": "Aleksandrov",
            "first_name": "Hill",
            "ip_address": "61.165.77.56"
        },
        {
            "id": 39,
            "email": "anesbitt12@reverbnation.com",
            "gender": "Female",
            "last_name": "Nesbitt",
            "first_name": "Ag",
            "ip_address": "50.210.6.204"
        },
        {
            "id": 40,
            "email": "lpatterfield13@vinaora.com",
            "gender": "Male",
            "last_name": "Patterfield",
            "first_name": "Lynn",
            "ip_address": "55.182.11.18"
        },
        {
            "id": 41,
            "email": "alightwing14@globo.com",
            "gender": "Male",
            "last_name": "Lightwing",
            "first_name": "Aluin",
            "ip_address": "248.75.219.217"
        },
        {
            "id": 42,
            "email": "ccoultass15@studiopress.com",
            "gender": "Female",
            "last_name": "Coultass",
            "first_name": "Colleen",
            "ip_address": "76.57.64.34"
        },
        {
            "id": 43,
            "email": "abettley16@sciencedirect.com",
            "gender": "Female",
            "last_name": "Bettley",
            "first_name": "Aubree",
            "ip_address": "51.74.170.56"
        },
        {
            "id": 44,
            "email": "lconsterdine17@people.com.cn",
            "gender": "Polygender",
            "last_name": "Consterdine",
            "first_name": "Leelah",
            "ip_address": "6.4.146.128"
        },
        {
            "id": 45,
            "email": "tdrowsfield18@unblog.fr",
            "gender": "Female",
            "last_name": "Drowsfield",
            "first_name": "Truda",
            "ip_address": "238.197.104.167"
        },
        {
            "id": 46,
            "email": "aimason19@chron.com",
            "gender": "Female",
            "last_name": "Imason",
            "first_name": "Alison",
            "ip_address": "176.197.15.174"
        },
        {
            "id": 47,
            "email": "vfutty1a@barnesandnoble.com",
            "gender": "Female",
            "last_name": "Futty",
            "first_name": "Vanna",
            "ip_address": "40.22.31.42"
        },
        {
            "id": 48,
            "email": "lsedgefield1b@shop-pro.jp",
            "gender": "Male",
            "last_name": "Sedgefield",
            "first_name": "Lemmy",
            "ip_address": "254.32.205.12"
        },
        {
            "id": 49,
            "email": "kpicott1c@weibo.com",
            "gender": "Male",
            "last_name": "Picott",
            "first_name": "Kristoforo",
            "ip_address": "53.72.241.71"
        },
        {
            "id": 50,
            "email": "rbullard1d@rediff.com",
            "gender": "Genderqueer",
            "last_name": "Bullard",
            "first_name": "Raleigh",
            "ip_address": "166.69.224.114"
        },
        {
            "id": 51,
            "email": "dferruzzi1e@yellowbook.com",
            "gender": "Female",
            "last_name": "Ferruzzi",
            "first_name": "Daveen",
            "ip_address": "85.6.27.191"
        },
        {
            "id": 52,
            "email": "iisland1f@census.gov",
            "gender": "Female",
            "last_name": "Island",
            "first_name": "Ivy",
            "ip_address": "93.74.193.168"
        },
        {
            "id": 53,
            "email": "ayurygyn1g@studiopress.com",
            "gender": "Male",
            "last_name": "Yurygyn",
            "first_name": "Ase",
            "ip_address": "173.56.58.102"
        },
        {
            "id": 54,
            "email": "cbartaletti1h@artisteer.com",
            "gender": "Female",
            "last_name": "Bartaletti",
            "first_name": "Courtnay",
            "ip_address": "51.186.104.32"
        },
        {
            "id": 55,
            "email": "jbehan1i@chronoengine.com",
            "gender": "Male",
            "last_name": "Behan",
            "first_name": "Jamaal",
            "ip_address": "20.39.77.160"
        },
        {
            "id": 56,
            "email": "amackowle1j@nytimes.com",
            "gender": "Male",
            "last_name": "MacKowle",
            "first_name": "Adrien",
            "ip_address": "141.203.161.72"
        },
        {
            "id": 57,
            "email": "plahy1k@over-blog.com",
            "gender": "Female",
            "last_name": "Lahy",
            "first_name": "Phillis",
            "ip_address": "19.37.71.211"
        },
        {
            "id": 58,
            "email": "mhambidge1l@forbes.com",
            "gender": "Female",
            "last_name": "Hambidge",
            "first_name": "Maggie",
            "ip_address": "129.47.116.90"
        },
        {
            "id": 59,
            "email": "hmostyn1m@deviantart.com",
            "gender": "Female",
            "last_name": "Mostyn",
            "first_name": "Harlene",
            "ip_address": "106.199.95.14"
        },
        {
            "id": 60,
            "email": "alubman1n@exblog.jp",
            "gender": "Male",
            "last_name": "Lubman",
            "first_name": "Anatol",
            "ip_address": "192.189.29.91"
        },
        {
            "id": 61,
            "email": "fwithams1o@sun.com",
            "gender": "Bigender",
            "last_name": "Withams",
            "first_name": "Fidela",
            "ip_address": "137.167.73.143"
        },
        {
            "id": 62,
            "email": "ldaily1p@mediafire.com",
            "gender": "Male",
            "last_name": "Daily",
            "first_name": "Lorry",
            "ip_address": "41.195.189.146"
        },
        {
            "id": 63,
            "email": "cgersam1q@nyu.edu",
            "gender": "Male",
            "last_name": "Gersam",
            "first_name": "Collin",
            "ip_address": "38.59.224.101"
        },
        {
            "id": 64,
            "email": "jgilpin1r@zimbio.com",
            "gender": "Genderfluid",
            "last_name": "Gilpin",
            "first_name": "Jillian",
            "ip_address": "118.58.120.214"
        },
        {
            "id": 65,
            "email": "jpattenden1s@samsung.com",
            "gender": "Male",
            "last_name": "Pattenden",
            "first_name": "Jonah",
            "ip_address": "151.51.29.160"
        },
        {
            "id": 66,
            "email": "eengel1t@foxnews.com",
            "gender": "Female",
            "last_name": "Engel",
            "first_name": "Emera",
            "ip_address": "38.103.37.87"
        },
        {
            "id": 67,
            "email": "ocorner1u@wisc.edu",
            "gender": "Male",
            "last_name": "Corner",
            "first_name": "Otho",
            "ip_address": "68.199.70.23"
        },
        {
            "id": 68,
            "email": "awillford1v@alibaba.com",
            "gender": "Male",
            "last_name": "Willford",
            "first_name": "Aymer",
            "ip_address": "119.243.65.115"
        },
        {
            "id": 69,
            "email": "bmellanby1w@dagondesign.com",
            "gender": "Female",
            "last_name": "Mellanby",
            "first_name": "Blakeley",
            "ip_address": "118.168.125.219"
        },
        {
            "id": 70,
            "email": "ocurling1x@oracle.com",
            "gender": "Male",
            "last_name": "Curling",
            "first_name": "Odell",
            "ip_address": "155.216.180.168"
        },
        {
            "id": 71,
            "email": "wwigzell1y@gmpg.org",
            "gender": "Male",
            "last_name": "Wigzell",
            "first_name": "Worth",
            "ip_address": "29.130.62.9"
        },
        {
            "id": 72,
            "email": "oleman1z@bandcamp.com",
            "gender": "Female",
            "last_name": "Leman",
            "first_name": "Olia",
            "ip_address": "65.65.93.11"
        },
        {
            "id": 73,
            "email": "emitroshinov20@yellowpages.com",
            "gender": "Male",
            "last_name": "Mitroshinov",
            "first_name": "Ellerey",
            "ip_address": "108.84.236.192"
        },
        {
            "id": 74,
            "email": "dcorneille21@yelp.com",
            "gender": "Male",
            "last_name": "Corneille",
            "first_name": "Dario",
            "ip_address": "234.20.238.250"
        },
        {
            "id": 75,
            "email": "gandrini22@skyrock.com",
            "gender": "Female",
            "last_name": "Andrini",
            "first_name": "Ginny",
            "ip_address": "71.121.181.214"
        },
        {
            "id": 76,
            "email": "kdrain23@google.cn",
            "gender": "Male",
            "last_name": "Drain",
            "first_name": "Kelwin",
            "ip_address": "187.0.154.130"
        },
        {
            "id": 77,
            "email": "mpeacop24@github.io",
            "gender": "Female",
            "last_name": "Peacop",
            "first_name": "Min",
            "ip_address": "34.218.76.39"
        },
        {
            "id": 78,
            "email": "akluge25@plala.or.jp",
            "gender": "Male",
            "last_name": "Kluge",
            "first_name": "Artie",
            "ip_address": "41.142.182.155"
        },
        {
            "id": 79,
            "email": "cdefau26@g.co",
            "gender": "Male",
            "last_name": "Defau",
            "first_name": "Carver",
            "ip_address": "197.87.155.191"
        },
        {
            "id": 80,
            "email": "savrahamian27@hugedomains.com",
            "gender": "Male",
            "last_name": "Avrahamian",
            "first_name": "Scott",
            "ip_address": "207.110.107.224"
        },
        {
            "id": 81,
            "email": "glate28@tripod.com",
            "gender": "Female",
            "last_name": "Late",
            "first_name": "Galina",
            "ip_address": "136.168.154.193"
        },
        {
            "id": 82,
            "email": "jsides29@answers.com",
            "gender": "Female",
            "last_name": "Sides",
            "first_name": "Jenny",
            "ip_address": "201.2.45.118"
        },
        {
            "id": 83,
            "email": "gcraik2a@webs.com",
            "gender": "Female",
            "last_name": "Craik",
            "first_name": "Gennifer",
            "ip_address": "229.121.21.95"
        },
        {
            "id": 84,
            "email": "hcapron2b@list-manage.com",
            "gender": "Female",
            "last_name": "Capron",
            "first_name": "Henrie",
            "ip_address": "212.37.231.192"
        },
        {
            "id": 85,
            "email": "breinbach2c@deliciousdays.com",
            "gender": "Female",
            "last_name": "Reinbach",
            "first_name": "Brooks",
            "ip_address": "252.111.35.75"
        },
        {
            "id": 86,
            "email": "mpiggford2d@360.cn",
            "gender": "Male",
            "last_name": "Piggford",
            "first_name": "Marshal",
            "ip_address": "149.180.51.87"
        },
        {
            "id": 87,
            "email": "pgercken2e@scientificamerican.com",
            "gender": "Male",
            "last_name": "Gercken",
            "first_name": "Peter",
            "ip_address": "32.27.245.116"
        },
        {
            "id": 88,
            "email": "mdodson2f@zimbio.com",
            "gender": "Male",
            "last_name": "Dodson",
            "first_name": "Matty",
            "ip_address": "55.139.138.126"
        },
        {
            "id": 89,
            "email": "slazer2g@toplist.cz",
            "gender": "Male",
            "last_name": "Lazer",
            "first_name": "Sanson",
            "ip_address": "150.194.251.102"
        },
        {
            "id": 90,
            "email": "nbescoby2h@webmd.com",
            "gender": "Female",
            "last_name": "Bescoby",
            "first_name": "Nancie",
            "ip_address": "51.119.143.138"
        },
        {
            "id": 91,
            "email": "ericciardo2i@tamu.edu",
            "gender": "Female",
            "last_name": "Ricciardo",
            "first_name": "Enrika",
            "ip_address": "10.182.199.2"
        },
        {
            "id": 92,
            "email": "kspeechly2j@nymag.com",
            "gender": "Female",
            "last_name": "Speechly",
            "first_name": "Kathi",
            "ip_address": "119.245.61.61"
        },
        {
            "id": 93,
            "email": "mmcilmorie2k@reuters.com",
            "gender": "Male",
            "last_name": "McIlmorie",
            "first_name": "Mordy",
            "ip_address": "99.245.102.102"
        },
        {
            "id": 94,
            "email": "hlittefair2l@fema.gov",
            "gender": "Female",
            "last_name": "Littefair",
            "first_name": "Harlie",
            "ip_address": "188.128.198.163"
        },
        {
            "id": 95,
            "email": "gbriscoe2m@alibaba.com",
            "gender": "Female",
            "last_name": "Briscoe",
            "first_name": "Glenine",
            "ip_address": "153.148.24.207"
        },
        {
            "id": 96,
            "email": "rolech2n@elpais.com",
            "gender": "Female",
            "last_name": "Olech",
            "first_name": "Reyna",
            "ip_address": "218.74.181.7"
        },
        {
            "id": 97,
            "email": "ceriksson2o@cnet.com",
            "gender": "Male",
            "last_name": "Eriksson",
            "first_name": "Cort",
            "ip_address": "129.65.155.98"
        },
        {
            "id": 98,
            "email": "vashcroft2p@craigslist.org",
            "gender": "Male",
            "last_name": "Ashcroft",
            "first_name": "Vito",
            "ip_address": "123.155.190.246"
        },
        {
            "id": 99,
            "email": "llampard2q@ovh.net",
            "gender": "Agender",
            "last_name": "Lampard",
            "first_name": "Lilllie",
            "ip_address": "160.201.157.147"
        },
        {
            "id": 100,
            "email": "pmacfarland2r@sohu.com",
            "gender": "Male",
            "last_name": "MacFarland",
            "first_name": "Pepe",
            "ip_address": "105.82.206.182"
        }
    ]
    var col = [];
    for (var i = 0; i < tables.length; i++) {
        for (var key in tables[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table")
    table.style.width="100%";
    table.style.textAlign="center";
    var tr = table.insertRow(-1); 
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    for (var i = 0; i < tables.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = tables[i][col[j]];
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
function dropdownFilter() {
    debugger
    let selectvalue, tabledata, rows, cells, gender, filter;
    selectvalue = document.getElementById("Genders");
    tabledata= document.getElementById("showData");
    rows = tabledata.getElementsByTagName("tr");
    filter = selectvalue.value;
    for (let row of rows) {
        cells = row.getElementsByTagName("td");
        gender = cells[2];
        if (filter === "All" || !gender || (filter === gender.textContent)) {
            row.style.display = "";
        }
        else {
            
            row.style.display = "none";
        }
    }
}
function TableFilter() {
    debugger
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("showData");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }