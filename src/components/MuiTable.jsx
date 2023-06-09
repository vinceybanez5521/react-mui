import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import React from 'react'

const MuiTable = () => {
    return (
        <>
            <TableContainer component={Paper} sx={{
                maxHeight: "500px"
            }}>
                <Table aria-aria-label="simple table"
                    stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map(data => (
                                <TableRow key={data.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": { border: 0 }
                                    }}>
                                    <TableCell>{data.id}</TableCell>
                                    <TableCell>{data.first_name}</TableCell>
                                    <TableCell>{data.last_name}</TableCell>
                                    <TableCell align="center">{data.email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Nikki",
    "last_name": "Gillingham",
    "email": "ngillingham0@bbc.co.uk",
    "gender": "Male",
    "ip_address": "66.35.134.168"
}, {
    "id": 2,
    "first_name": "Killian",
    "last_name": "Monnery",
    "email": "kmonnery1@ucla.edu",
    "gender": "Male",
    "ip_address": "49.247.12.59"
}, {
    "id": 3,
    "first_name": "Rick",
    "last_name": "Allport",
    "email": "rallport2@slideshare.net",
    "gender": "Male",
    "ip_address": "14.219.148.24"
}, {
    "id": 4,
    "first_name": "Leeann",
    "last_name": "Nortunen",
    "email": "lnortunen3@istockphoto.com",
    "gender": "Female",
    "ip_address": "106.16.114.105"
}, {
    "id": 5,
    "first_name": "Curran",
    "last_name": "Donohue",
    "email": "cdonohue4@issuu.com",
    "gender": "Male",
    "ip_address": "64.220.62.102"
}, {
    "id": 6,
    "first_name": "Koral",
    "last_name": "Egginson",
    "email": "kegginson5@a8.net",
    "gender": "Female",
    "ip_address": "181.59.15.66"
}, {
    "id": 7,
    "first_name": "Hernando",
    "last_name": "Hardcastle",
    "email": "hhardcastle6@theguardian.com",
    "gender": "Male",
    "ip_address": "17.147.17.244"
}, {
    "id": 8,
    "first_name": "Tally",
    "last_name": "Magowan",
    "email": "tmagowan7@technorati.com",
    "gender": "Male",
    "ip_address": "183.96.149.41"
}, {
    "id": 9,
    "first_name": "Horacio",
    "last_name": "Muress",
    "email": "hmuress8@whitehouse.gov",
    "gender": "Male",
    "ip_address": "3.239.166.0"
}, {
    "id": 10,
    "first_name": "Marylin",
    "last_name": "Blakeden",
    "email": "mblakeden9@ezinearticles.com",
    "gender": "Female",
    "ip_address": "85.157.155.232"
}, {
    "id": 11,
    "first_name": "Charlene",
    "last_name": "Warters",
    "email": "cwartersa@bbb.org",
    "gender": "Female",
    "ip_address": "180.15.212.101"
}, {
    "id": 12,
    "first_name": "Chandler",
    "last_name": "Sprade",
    "email": "cspradeb@exblog.jp",
    "gender": "Male",
    "ip_address": "152.36.103.207"
}, {
    "id": 13,
    "first_name": "Kiersten",
    "last_name": "Kuschke",
    "email": "kkuschkec@posterous.com",
    "gender": "Female",
    "ip_address": "139.182.191.56"
}, {
    "id": 14,
    "first_name": "Carlita",
    "last_name": "Lockton",
    "email": "clocktond@addthis.com",
    "gender": "Female",
    "ip_address": "103.190.18.22"
}, {
    "id": 15,
    "first_name": "Cari",
    "last_name": "Stollberger",
    "email": "cstollbergere@newsvine.com",
    "gender": "Female",
    "ip_address": "27.71.204.223"
}, {
    "id": 16,
    "first_name": "Jamie",
    "last_name": "Yandell",
    "email": "jyandellf@google.es",
    "gender": "Male",
    "ip_address": "44.66.152.88"
}, {
    "id": 17,
    "first_name": "Brooks",
    "last_name": "Cutress",
    "email": "bcutressg@pinterest.com",
    "gender": "Male",
    "ip_address": "8.56.64.77"
}, {
    "id": 18,
    "first_name": "Constance",
    "last_name": "Van Vuuren",
    "email": "cvanvuurenh@reddit.com",
    "gender": "Female",
    "ip_address": "49.203.194.99"
}, {
    "id": 19,
    "first_name": "Del",
    "last_name": "Menendez",
    "email": "dmenendezi@a8.net",
    "gender": "Female",
    "ip_address": "37.79.217.31"
}, {
    "id": 20,
    "first_name": "Christie",
    "last_name": "Spelsbury",
    "email": "cspelsburyj@businessweek.com",
    "gender": "Agender",
    "ip_address": "72.170.106.161"
}, {
    "id": 21,
    "first_name": "Paloma",
    "last_name": "Dybald",
    "email": "pdybaldk@prnewswire.com",
    "gender": "Female",
    "ip_address": "64.86.192.54"
}, {
    "id": 22,
    "first_name": "Scott",
    "last_name": "Bilsford",
    "email": "sbilsfordl@ibm.com",
    "gender": "Male",
    "ip_address": "220.216.3.198"
}, {
    "id": 23,
    "first_name": "Curran",
    "last_name": "Wiggett",
    "email": "cwiggettm@unesco.org",
    "gender": "Male",
    "ip_address": "64.151.152.7"
}, {
    "id": 24,
    "first_name": "Rica",
    "last_name": "Bilfoot",
    "email": "rbilfootn@oakley.com",
    "gender": "Genderqueer",
    "ip_address": "45.174.205.37"
}, {
    "id": 25,
    "first_name": "Herman",
    "last_name": "Dommersen",
    "email": "hdommerseno@amazon.co.uk",
    "gender": "Male",
    "ip_address": "86.33.195.247"
}, {
    "id": 26,
    "first_name": "Trumann",
    "last_name": "Ridoutt",
    "email": "tridouttp@nba.com",
    "gender": "Male",
    "ip_address": "157.232.111.191"
}, {
    "id": 27,
    "first_name": "Krispin",
    "last_name": "Kimbrough",
    "email": "kkimbroughq@bloglines.com",
    "gender": "Male",
    "ip_address": "125.164.65.90"
}, {
    "id": 28,
    "first_name": "Cybil",
    "last_name": "Tobin",
    "email": "ctobinr@ocn.ne.jp",
    "gender": "Female",
    "ip_address": "51.104.234.62"
}, {
    "id": 29,
    "first_name": "Emory",
    "last_name": "Dax",
    "email": "edaxs@google.de",
    "gender": "Genderqueer",
    "ip_address": "58.232.132.251"
}, {
    "id": 30,
    "first_name": "Templeton",
    "last_name": "Rolfi",
    "email": "trolfit@ox.ac.uk",
    "gender": "Non-binary",
    "ip_address": "180.227.75.110"
}, {
    "id": 31,
    "first_name": "Rodolfo",
    "last_name": "Braiden",
    "email": "rbraidenu@blogspot.com",
    "gender": "Male",
    "ip_address": "5.225.239.238"
}, {
    "id": 32,
    "first_name": "Fanny",
    "last_name": "Wilsey",
    "email": "fwilseyv@berkeley.edu",
    "gender": "Agender",
    "ip_address": "251.231.239.223"
}, {
    "id": 33,
    "first_name": "Norene",
    "last_name": "Bentinck",
    "email": "nbentinckw@topsy.com",
    "gender": "Agender",
    "ip_address": "198.152.127.210"
}, {
    "id": 34,
    "first_name": "Henri",
    "last_name": "Dignan",
    "email": "hdignanx@google.com",
    "gender": "Male",
    "ip_address": "64.137.222.203"
}, {
    "id": 35,
    "first_name": "Theresita",
    "last_name": "Genge",
    "email": "tgengey@cbslocal.com",
    "gender": "Female",
    "ip_address": "44.151.107.14"
}, {
    "id": 36,
    "first_name": "Umberto",
    "last_name": "Groundwater",
    "email": "ugroundwaterz@sina.com.cn",
    "gender": "Non-binary",
    "ip_address": "61.246.17.109"
}, {
    "id": 37,
    "first_name": "Creighton",
    "last_name": "Balk",
    "email": "cbalk10@google.com.hk",
    "gender": "Male",
    "ip_address": "172.60.127.139"
}, {
    "id": 38,
    "first_name": "Cece",
    "last_name": "Union",
    "email": "cunion11@usgs.gov",
    "gender": "Male",
    "ip_address": "137.2.198.105"
}, {
    "id": 39,
    "first_name": "Bobbe",
    "last_name": "Faireclough",
    "email": "bfaireclough12@hao123.com",
    "gender": "Female",
    "ip_address": "238.88.77.170"
}, {
    "id": 40,
    "first_name": "Madelon",
    "last_name": "Jachimczak",
    "email": "mjachimczak13@yale.edu",
    "gender": "Female",
    "ip_address": "42.105.39.135"
}, {
    "id": 41,
    "first_name": "Lynnet",
    "last_name": "Budd",
    "email": "lbudd14@amazon.co.jp",
    "gender": "Female",
    "ip_address": "32.63.16.167"
}, {
    "id": 42,
    "first_name": "Ambrose",
    "last_name": "Schottli",
    "email": "aschottli15@nih.gov",
    "gender": "Male",
    "ip_address": "61.229.39.234"
}, {
    "id": 43,
    "first_name": "Rodolphe",
    "last_name": "Robbins",
    "email": "rrobbins16@hibu.com",
    "gender": "Male",
    "ip_address": "238.61.143.64"
}, {
    "id": 44,
    "first_name": "Corrinne",
    "last_name": "Whittam",
    "email": "cwhittam17@washington.edu",
    "gender": "Female",
    "ip_address": "149.16.227.199"
}, {
    "id": 45,
    "first_name": "Finlay",
    "last_name": "Francesc",
    "email": "ffrancesc18@blog.com",
    "gender": "Male",
    "ip_address": "184.170.37.97"
}, {
    "id": 46,
    "first_name": "Rafa",
    "last_name": "Pagden",
    "email": "rpagden19@wikia.com",
    "gender": "Female",
    "ip_address": "227.85.44.12"
}, {
    "id": 47,
    "first_name": "Gabbie",
    "last_name": "Howles",
    "email": "ghowles1a@hao123.com",
    "gender": "Male",
    "ip_address": "139.35.2.82"
}, {
    "id": 48,
    "first_name": "Cull",
    "last_name": "Thorby",
    "email": "cthorby1b@amazonaws.com",
    "gender": "Male",
    "ip_address": "56.186.108.236"
}, {
    "id": 49,
    "first_name": "Cornelius",
    "last_name": "Lauder",
    "email": "clauder1c@amazonaws.com",
    "gender": "Male",
    "ip_address": "93.136.175.209"
}, {
    "id": 50,
    "first_name": "Christel",
    "last_name": "Dinneges",
    "email": "cdinneges1d@nasa.gov",
    "gender": "Female",
    "ip_address": "239.134.88.130"
}, {
    "id": 51,
    "first_name": "Layney",
    "last_name": "Boman",
    "email": "lboman1e@studiopress.com",
    "gender": "Female",
    "ip_address": "210.139.13.130"
}, {
    "id": 52,
    "first_name": "Carrie",
    "last_name": "Gebbe",
    "email": "cgebbe1f@unc.edu",
    "gender": "Female",
    "ip_address": "6.182.76.200"
}, {
    "id": 53,
    "first_name": "Vasilis",
    "last_name": "Millward",
    "email": "vmillward1g@cornell.edu",
    "gender": "Genderqueer",
    "ip_address": "141.238.186.220"
}, {
    "id": 54,
    "first_name": "Hanna",
    "last_name": "Konrad",
    "email": "hkonrad1h@csmonitor.com",
    "gender": "Female",
    "ip_address": "61.60.65.54"
}, {
    "id": 55,
    "first_name": "Fairleigh",
    "last_name": "Pentland",
    "email": "fpentland1i@go.com",
    "gender": "Male",
    "ip_address": "112.211.225.98"
}, {
    "id": 56,
    "first_name": "Jeth",
    "last_name": "Sonschein",
    "email": "jsonschein1j@diigo.com",
    "gender": "Male",
    "ip_address": "89.244.237.14"
}, {
    "id": 57,
    "first_name": "Tucker",
    "last_name": "Strutz",
    "email": "tstrutz1k@hubpages.com",
    "gender": "Bigender",
    "ip_address": "50.107.213.141"
}, {
    "id": 58,
    "first_name": "Kitti",
    "last_name": "Stovold",
    "email": "kstovold1l@seesaa.net",
    "gender": "Female",
    "ip_address": "102.159.234.205"
}, {
    "id": 59,
    "first_name": "Crista",
    "last_name": "Fearnley",
    "email": "cfearnley1m@gizmodo.com",
    "gender": "Female",
    "ip_address": "51.128.170.198"
}, {
    "id": 60,
    "first_name": "Georgi",
    "last_name": "Ryman",
    "email": "gryman1n@nature.com",
    "gender": "Male",
    "ip_address": "212.222.116.129"
}, {
    "id": 61,
    "first_name": "Betteanne",
    "last_name": "Paiton",
    "email": "bpaiton1o@reddit.com",
    "gender": "Female",
    "ip_address": "251.129.248.235"
}, {
    "id": 62,
    "first_name": "Robin",
    "last_name": "Cottham",
    "email": "rcottham1p@prweb.com",
    "gender": "Male",
    "ip_address": "150.191.231.141"
}, {
    "id": 63,
    "first_name": "Linnie",
    "last_name": "Brangan",
    "email": "lbrangan1q@youtube.com",
    "gender": "Female",
    "ip_address": "182.69.144.69"
}, {
    "id": 64,
    "first_name": "Kane",
    "last_name": "Syson",
    "email": "ksyson1r@jiathis.com",
    "gender": "Male",
    "ip_address": "143.139.151.61"
}, {
    "id": 65,
    "first_name": "Hort",
    "last_name": "Tregien",
    "email": "htregien1s@godaddy.com",
    "gender": "Male",
    "ip_address": "159.124.39.54"
}, {
    "id": 66,
    "first_name": "Waldon",
    "last_name": "Aldwinckle",
    "email": "waldwinckle1t@csmonitor.com",
    "gender": "Male",
    "ip_address": "195.228.127.128"
}, {
    "id": 67,
    "first_name": "Franchot",
    "last_name": "Chate",
    "email": "fchate1u@bigcartel.com",
    "gender": "Male",
    "ip_address": "155.20.38.102"
}, {
    "id": 68,
    "first_name": "Halley",
    "last_name": "McNeillie",
    "email": "hmcneillie1v@sfgate.com",
    "gender": "Female",
    "ip_address": "120.181.180.211"
}, {
    "id": 69,
    "first_name": "Ronald",
    "last_name": "Semiraz",
    "email": "rsemiraz1w@altervista.org",
    "gender": "Male",
    "ip_address": "86.103.7.224"
}, {
    "id": 70,
    "first_name": "Jerrylee",
    "last_name": "Mauditt",
    "email": "jmauditt1x@themeforest.net",
    "gender": "Female",
    "ip_address": "202.33.54.203"
}, {
    "id": 71,
    "first_name": "Tammie",
    "last_name": "Clissett",
    "email": "tclissett1y@mapquest.com",
    "gender": "Female",
    "ip_address": "77.116.248.92"
}, {
    "id": 72,
    "first_name": "Dasya",
    "last_name": "Coldbath",
    "email": "dcoldbath1z@nationalgeographic.com",
    "gender": "Female",
    "ip_address": "195.23.168.158"
}, {
    "id": 73,
    "first_name": "Carleton",
    "last_name": "Grimsley",
    "email": "cgrimsley20@berkeley.edu",
    "gender": "Male",
    "ip_address": "227.237.37.252"
}, {
    "id": 74,
    "first_name": "Lu",
    "last_name": "Glendining",
    "email": "lglendining21@cdc.gov",
    "gender": "Female",
    "ip_address": "86.69.51.13"
}, {
    "id": 75,
    "first_name": "Hewitt",
    "last_name": "Bensusan",
    "email": "hbensusan22@canalblog.com",
    "gender": "Genderqueer",
    "ip_address": "152.245.102.141"
}, {
    "id": 76,
    "first_name": "Diane-marie",
    "last_name": "Borrow",
    "email": "dborrow23@bbc.co.uk",
    "gender": "Female",
    "ip_address": "134.134.110.121"
}, {
    "id": 77,
    "first_name": "Etta",
    "last_name": "Marley",
    "email": "emarley24@twitpic.com",
    "gender": "Female",
    "ip_address": "94.254.9.28"
}, {
    "id": 78,
    "first_name": "Boot",
    "last_name": "Hick",
    "email": "bhick25@wufoo.com",
    "gender": "Male",
    "ip_address": "217.161.225.166"
}, {
    "id": 79,
    "first_name": "Tobey",
    "last_name": "Castanie",
    "email": "tcastanie26@meetup.com",
    "gender": "Female",
    "ip_address": "143.3.139.25"
}, {
    "id": 80,
    "first_name": "Augustus",
    "last_name": "Wisdom",
    "email": "awisdom27@flickr.com",
    "gender": "Male",
    "ip_address": "61.35.249.212"
}, {
    "id": 81,
    "first_name": "Jud",
    "last_name": "Gawkes",
    "email": "jgawkes28@goodreads.com",
    "gender": "Male",
    "ip_address": "211.101.114.62"
}, {
    "id": 82,
    "first_name": "Brewster",
    "last_name": "Akerman",
    "email": "bakerman29@shop-pro.jp",
    "gender": "Male",
    "ip_address": "21.185.9.0"
}, {
    "id": 83,
    "first_name": "Hannie",
    "last_name": "Maughan",
    "email": "hmaughan2a@china.com.cn",
    "gender": "Female",
    "ip_address": "201.151.167.204"
}, {
    "id": 84,
    "first_name": "Lamond",
    "last_name": "Marti",
    "email": "lmarti2b@gnu.org",
    "gender": "Male",
    "ip_address": "45.227.35.136"
}, {
    "id": 85,
    "first_name": "Bettine",
    "last_name": "Ripping",
    "email": "bripping2c@statcounter.com",
    "gender": "Female",
    "ip_address": "150.125.142.118"
}, {
    "id": 86,
    "first_name": "Iggy",
    "last_name": "Wahlberg",
    "email": "iwahlberg2d@salon.com",
    "gender": "Male",
    "ip_address": "213.140.168.115"
}, {
    "id": 87,
    "first_name": "Cullan",
    "last_name": "Eccles",
    "email": "ceccles2e@bandcamp.com",
    "gender": "Male",
    "ip_address": "174.56.138.249"
}, {
    "id": 88,
    "first_name": "Dedie",
    "last_name": "Gittus",
    "email": "dgittus2f@seattletimes.com",
    "gender": "Female",
    "ip_address": "119.71.45.240"
}, {
    "id": 89,
    "first_name": "Norri",
    "last_name": "Crosham",
    "email": "ncrosham2g@cdc.gov",
    "gender": "Female",
    "ip_address": "43.195.32.197"
}, {
    "id": 90,
    "first_name": "Greta",
    "last_name": "Drinkel",
    "email": "gdrinkel2h@gov.uk",
    "gender": "Female",
    "ip_address": "172.199.230.184"
}, {
    "id": 91,
    "first_name": "Eimile",
    "last_name": "Percival",
    "email": "epercival2i@altervista.org",
    "gender": "Female",
    "ip_address": "175.162.32.226"
}, {
    "id": 92,
    "first_name": "Clayborn",
    "last_name": "Riccioppo",
    "email": "criccioppo2j@eepurl.com",
    "gender": "Male",
    "ip_address": "103.63.159.252"
}, {
    "id": 93,
    "first_name": "Glynn",
    "last_name": "Kindley",
    "email": "gkindley2k@squarespace.com",
    "gender": "Male",
    "ip_address": "235.27.226.16"
}, {
    "id": 94,
    "first_name": "Bridgette",
    "last_name": "Kindell",
    "email": "bkindell2l@yahoo.com",
    "gender": "Female",
    "ip_address": "205.190.17.239"
}, {
    "id": 95,
    "first_name": "Harley",
    "last_name": "Duckett",
    "email": "hduckett2m@cam.ac.uk",
    "gender": "Male",
    "ip_address": "188.111.211.126"
}, {
    "id": 96,
    "first_name": "Georgi",
    "last_name": "Allchorne",
    "email": "gallchorne2n@patch.com",
    "gender": "Male",
    "ip_address": "135.164.53.74"
}, {
    "id": 97,
    "first_name": "Mattheus",
    "last_name": "Burchard",
    "email": "mburchard2o@princeton.edu",
    "gender": "Male",
    "ip_address": "217.148.32.141"
}, {
    "id": 98,
    "first_name": "Chickie",
    "last_name": "Trebble",
    "email": "ctrebble2p@blinklist.com",
    "gender": "Male",
    "ip_address": "12.14.90.39"
}, {
    "id": 99,
    "first_name": "Maggy",
    "last_name": "Derdes",
    "email": "mderdes2q@t.co",
    "gender": "Female",
    "ip_address": "162.107.157.107"
}, {
    "id": 100,
    "first_name": "Candi",
    "last_name": "Paget",
    "email": "cpaget2r@hubpages.com",
    "gender": "Female",
    "ip_address": "85.236.36.192"
}];

export default MuiTable