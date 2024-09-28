export default function handler(req, res) { 
    // Liste des joueurs avec le numéro 09
    const avantcentres= [


        {
            firstName: 'Marco',
            lastName: 'van Basten',
            birthDate: '1964-10-31',
            nationalTeam: 'Pays-Bas',
            matches: 58, 
            goals: 24, 
            flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
            jersey: 'https://example.com/netherlands-shirt.png',
            photo: 'https://media.gettyimages.com/id/79051349/fr/photo/23rd-june-1988-munich-west-germany-1988-european-championships-final-holland-2-v-ussr-0.jpg?s=2048x2048&w=gi&k=20&c=_UL8e6RKLkh6a0AFAmgl2YAZJcz1ypcxZ7zUPcTAxq4=',
        },
        {
            firstName: 'Romário',
            lastName: 'de Souza Faria',
            birthDate: '1966-01-29',
            nationalTeam: 'Brésil',
            matches: 70,
            goals: 55,
            flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
            photo: 'https://media.gettyimages.com/id/1920459/fr/photo/romario-of-brazil-holds-the-trophy-aloft-after-the-world-cup-final-against-italy-at-the-rose.jpg?s=2048x2048&w=gi&k=20&c=sq6jEHkwNdffNc84LBLle8pTJdAUCbDzSC5LH6lj7G0=',
          },

{
    firstName: 'Ronaldo',
    lastName: 'Nazário',
    birthDate: '1976-09-22',
    nationalTeam: 'Brésil',
    matches: 98, // Nombre de matchs
    goals: 62, // Nombre de buts
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    jersey: 'https://example.com/brazil-shirt.png',
photo:'https://media.gettyimages.com/id/52844942/fr/photo/kobe-japan-wm-2002-in-japan-und-korea-kobe-match-54-achtelfinale-brasilien-0-ronaldo-bra.jpg?s=2048x2048&w=gi&k=20&c=Hf_YLAVRyl0iYgF1oAflvy1871XFjl9l7c8L6VOrjD4='},

{
    firstName: 'Gerd',
    lastName: 'Müller',
    birthDate: '1945-11-03',
    nationalTeam: 'Allemagne',
    matches: 62, 
    goals: 68,
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    photo: 'https://media.gettyimages.com/id/78963578/fr/photo/1974-1974-world-cup-finals-in-germany-west-germany-striker-gerd-muller-pictured-in-the-olympic.jpg?s=2048x2048&w=gi&k=20&c=lj8liWIl_CLL3aqrZKB9D0l_3v6SBlJIJmAsPyQzzWo=',
},

  {
    firstName: 'Careca',
    lastName: '',
    birthDate: '1960-10-05',
    nationalTeam: 'Brésil',
    matches: 60,
    goals: 30,
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    photo: 'https://media.gettyimages.com/id/79033025/fr/photo/1986-world-cup-finals-guadalajara-mexico-12th-june-brazil-3-v-northern-ireland-0-brazils-careca.jpg?s=2048x2048&w=gi&k=20&c=lqeYLEEpy-r0ZDN0QKbnfapvy18GiuZP-7iauIu9kY0=',
  },
  {
    firstName: 'Paolo',
    lastName: 'Rossi',
    birthDate: '1956-09-23',
    nationalTeam: 'Italie',
    matches: 48,
    goals: 20,
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    photo: 'https://media.gettyimages.com/id/79042204/fr/photo/1982-world-cup-final-madrid-spain-11th-july-italy-3-v-west-germany-1-italys-paolo-rossi.jpg?s=2048x2048&w=gi&k=20&c=hMhigWtJ4qlDSSWOZh-UV6iRTSNTXpzMMT4o1WVE4Pc=',
  },
{
    firstName: 'Gabriel',
    lastName: 'Batistuta',
    birthDate: '1969-02-01',
    nationalTeam: 'Argentine',
    matches: 77, 
    goals: 54, 
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg', 
    photo :'https://media.gettyimages.com/id/1123162/fr/photo/gabriel-batistuta-of-argentina-celebrates-after-scoring-in-the-world-cup-group-h-game-against.jpg?s=612x612&w=0&k=20&c=TwXIGdVdblD00-mBlmePS4Yac1hEbSSKEvfxQhmJ7b8='
},


{
    "firstName": "Ademir",
    "lastName": "Menezes",
    "birthDate": "1922-04-02",
    "nationalTeam": "Brésil",
    "matches": 39,
    "goals": 32,
    "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Brazil.svg",
    "photo": "", 
  },
  {
    "firstName": "Leônidas",
    "lastName": "da Silva",
    "birthDate": "1913-09-06",
    "nationalTeam": "Brésil",
    "matches": 19,
    "goals": 7,
    "photo": "https://example.com/leonidas_photo.jpg",  
    "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Brazil.svg"  
  },
  {
    firstName: 'Gunnar',
    lastName: 'Nordahl',
    birthDate: '1921-10-19',
    nationalTeam: 'Suède',
    matches: 33, 
    goals: 43, 
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Gunnar_Nordahl.jpg',
   
},
  
    ]
    res.status(200).json(avantcentres);
}