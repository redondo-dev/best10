

        export default function handler(req, res) {
            const players = [
              {
                firstName: 'Franz',
                lastName: 'Beckenbauer',
                birthDate: '1945-09-11',
                nationalTeam: 'Allemagne',
                matches: 103,
                goals: 14,
                flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
                photo:'https://media.gettyimages.com/id/550982127/fr/photo/football-european-championship-qualifying-group-8-return-leg-westfalen-stadium-dortmund.jpg?s=2048x2048&w=gi&k=20&c=43ixD46T4Ac0hH_1QAamUPBSl78VElNDM9fQHP_4b14='
              },
              {
                firstName: 'Gaetano',
                lastName: 'Scirea',
                birthDate: '1953-05-25',
                nationalTeam: 'Italie',
                matches: 78,
                goals: 2,
                flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
                photo: 'https://media.gettyimages.com/id/79042460/fr/photo/1982-world-cup-finals-semi-final-barcelona-spain-8th-july-italy-2-v-poland-0-italys-gaetano.jpg?s=2048x2048&w=gi&k=20&c=MzqYa4Ph3noU6HD2jx7QqBRqv47P9T4ge9R1VcCJC-8=',
              },
              {
                firstName: 'Franco',
                lastName: 'Baresi',
                birthDate: '1960-05-08',
                nationalTeam: 'Italie',
                matches: 81,
                goals: 1,
                flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
                photo:'https://media.gettyimages.com/id/612546272/fr/photo/italys-captain-franco-baresi-during-the-final-of-the-1994-fifa-world-cup-against-brazil.jpg?s=2048x2048&w=gi&k=20&c=oUqGbaWWil8x-dklfWNfRY7kce1eKg3boTz0biEX4w0=',
              },
              {
                firstName: 'Ronald',
                lastName: 'Koeman',
                birthDate: '1963-03-21',
                nationalTeam: 'Pays-Bas',
                matches: 78,
                goals: 14,
                flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
                photo: 'https://media.gettyimages.com/id/1055853664/fr/photo/dutch-professional-footballer-ronald-koeman-defender-with-fc-barcelona-posed-prior-to-playing.jpg?s=2048x2048&w=gi&k=20&c=F9_VtndnSVAaHR0d1CeRgZSbiNCIWnXvCYqrsLgbxXc=',
              },
              {
                firstName: 'Bobby',
                lastName: 'Moore',
                birthDate: '1941-04-12',
                nationalTeam: 'Angleterre',
                matches: 108,
                goals: 2,
                flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_England.svg',
                photo: 'https://media.gettyimages.com/id/80747075/fr/photo/sport-football-1966-world-cup-finals-quarter-final-23rd-july-1966-wembley-stadium-london.jpg?s=2048x2048&w=gi&k=20&c=FtMRfgusUkbu0sGCuBj1vnoyQy9g6dQWeRM9VcBNLLM=',
              },
              {
                firstName: 'Miloud',
                lastName: 'Hadefi',
                birthDate: '1973-01-01', 
                nationalTeam: 'Algérie',
                matches: 40, 
                goals: 5, 
                flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
                photo: 'https://elwatan-dz.com/storage/4002/HEDEFI.gif' 
              }
              
            ];
          
            res.status(200).json(players);
          }
          









