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
            photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Romario_Brazil_2011.jpg',
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
    photo: 'https://media.gettyimages.com/id/51256930/fr/photo/ronaldo-of-brazil.jpg?s=2048x2048&w=gi&k=20&c=RBYM3f9aH5Hzp-lkZYW43yBpGmH5uAnJTXiI-JNSbjU=',
},

{
    firstName: 'Gerd',
    lastName: 'Müller',
    birthDate: '1945-11-03',
    nationalTeam: 'Allemagne',
    matches: 62, // Nombre de matchs
    goals: 68, // Nombre de buts
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    jersey: 'https://example.com/germany-shirt.png',
    photo: 'https://media.gettyimages.com/id/82351209/fr/photo/gerd-muller-of-west-germany.jpg?s=2048x2048&w=gi&k=20&c=5J83pzy6J_BFNa9o7G0ymJ55JgC_BVuPYmytn7upQfA=',
},

  {
    firstName: 'Careca',
    lastName: '',
    birthDate: '1960-10-05',
    nationalTeam: 'Brésil',
    matches: 60,
    goals: 30,
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Careca_1986.jpg',
  },
  {
    firstName: 'Paolo',
    lastName: 'Rossi',
    birthDate: '1956-09-23',
    nationalTeam: 'Italie',
    matches: 48,
    goals: 20,
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Paolo_Rossi_2011.jpg',
  },
{
    firstName: 'Gabriel',
    lastName: 'Batistuta',
    birthDate: '1969-02-01',
    nationalTeam: 'Argentine',
    matches: 77, // Nombre de matchs
    goals: 54, // Nombre de buts
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    jersey: 'https://example.com/argentina-shirt.png',
    photo: 'https://media.gettyimages.com/id/74313427/fr/photo/gabriel-batistuta-of-argentina.jpg?s=2048x2048&w=gi&k=20&c=HttB5j0IxAJ0BNrnBnNsSUSeRhRf0VY4U0HfCBedFH8=',
},
{
    firstName: 'Fernando',
    lastName: 'Torres',
    birthDate: '1984-03-20',
    nationalTeam: 'Espagne',
    matches: 110, 
    goals: 38, 
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    jersey: 'https://example.com/spain-shirt.png',
    photo: 'https://media.gettyimages.com/id/451743582/fr/photo/fernando-torres-of-spain.jpg?s=2048x2048&w=gi&k=20&c=lBFGPZfVrHx3AZr5zkbRryYimOF_wMYJvdZUgRx5qzI=',
}
    ]
    res.status(200).json(avantcentres);
}