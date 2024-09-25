

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
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Franz_Beckenbauer_-_2014_%28cropped%29.jpg/440px-Franz_Beckenbauer_-_2014_%28cropped%29.jpg',
              },
              {
                firstName: 'Gaetano',
                lastName: 'Scirea',
                birthDate: '1953-05-25',
                nationalTeam: 'Italie',
                matches: 78,
                goals: 2,
                flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Gaetano_Scirea_1981.jpg',
              },
              {
                firstName: 'Franco',
                lastName: 'Baresi',
                birthDate: '1960-05-08',
                nationalTeam: 'Italie',
                matches: 81,
                goals: 1,
                flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Franco_Baresi_2012.JPG',
              },
              {
                firstName: 'Ronald',
                lastName: 'Koeman',
                birthDate: '1963-03-21',
                nationalTeam: 'Pays-Bas',
                matches: 78,
                goals: 14,
                flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Ronald_Koeman_2014.jpg',
              },
              {
                firstName: 'Bobby',
                lastName: 'Moore',
                birthDate: '1941-04-12',
                nationalTeam: 'Angleterre',
                matches: 108,
                goals: 2,
                flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_England.svg',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Bobby_Moore_1969.jpg',
              },
              {
                firstName: 'Miloud',
                lastName: 'Hadefi',
                birthDate: '1973-01-01', // Remplacez par la date de naissance correcte
                nationalTeam: 'Algérie',
                matches: 40, // Remplacez par le nombre de matchs correct
                goals: 5, // Remplacez par le nombre de buts correct
                flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
                photo: 'https://example.com/photo-of-miloud-hadefi.jpg' // Remplacez par l'URL de l'image correcte
              }
              
            ];
          
            res.status(200).json(players);
          }
          









