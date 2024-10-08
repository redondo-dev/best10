export default function handler (req , res){


    const ailliersdroits =[
            {
              "firstName": "George",
              "lastName": "Best",
              "nationalTeam": "Irlande du Nord",
              "matches": 37,
              "goals": 9,
           "flag":"https://fr.wikipedia.org/wiki/Irlande_du_Nord#/media/Fichier:Flag_of_the_United_Kingdom_(3-5).svg",
              "photo": "https://media.gettyimages.com/id/1500607178/fr/photo/george-best-manchester-united-player-pre-season-photocall-old-trafford-july-1968.jpg?s=1024x1024&w=gi&k=20&c=fR1kYB7RWYaeBrkrvsPOjsFDLkRS0Q28HqT7a-Vv9l4="
            },

            {
 
        "firstName": "Rabah",
        "lastName": "Madjer",  
        "nationalTeam": "Algérie",     
        "matches": 87,
        "goals": 28,
        "flag": 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
        "photo": "https://media.gettyimages.com/id/1222406654/fr/photo/rabah-madjer-of-algeria-poses-for-photo-1989.jpg?s=1024x1024&w=gi&k=20&c=SZmZ85VJsPOn5BYQcwU7NQLiY5fSGfbuYgzxalLUx5c="
            },
            {
              "firstName": "David",
              "lastName": "Beckham",
              "nationalTeam": "Angleterre",
              "matches": 115,
              "goals": 17,
              "flag":"https://fr.wikipedia.org/wiki/Portail:Angleterre#/media/Fichier:Flag_of_England.svg",
              "photo": "https://media.gettyimages.com/id/460493284/fr/photo/london-united-kingdom-david-beckham-of-manchester-united-celebrates-after-scoring-the-third.jpg?s=612x612&w=gi&k=20&c=AccMwAHtFf_GLhge3zDygr2xZ1sugXgsKu5M-CIoDkI="
            },
            {
              "firstName": "Gianluigi",
              "lastName": "Lentini",
              "nationalTeam": "Italie",
              "matches": 13,
              "goals": 0,
              "flag": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
              "photo": "https://media.gettyimages.com/id/79649348/fr/photo/circa-1990-italy-v-switzerland-gianluigi-lentini-italy-takes-on-the-switzerland-defence.jpg?s=1024x1024&w=gi&k=20&c=eMhbpVjrc8kJ0PWJSrUjfx6TL3Q-_bjN-DnaLUHzc3c="
            },
            {
              "firstName": "Roberto",
              "lastName": "Donadoni",
              "nationalTeam": "Italie",
              "matches": 63,
              "goals": 5,
              "flag": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
              "photo": "https://media.gettyimages.com/id/1245878779/fr/photo/roberto-donadoni-of-italy-poses-for-photo-before-the-fifa-world-cup-usa-1994.jpg?s=1024x1024&w=gi&k=20&c=ssLVmD77JWNxIhcyCVGyCJxdU-s1odwssGDQ6lSYQJQ="
            },
            {
              "firstName": "Cristiano",
              "lastName": "Ronaldo",
              "nationalTeam": "Portugal",
              "matches": 200,
              "goals": 123,
              "flag": 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
              "photo": "https://media.gettyimages.com/id/1444228076/fr/photo/doha-qatar-cristiano-ronaldo-of-portugal-celebrates-after-scoring-their-teams-first-goal-via.jpg?s=1024x1024&w=gi&k=20&c=s78F0WPtgPH949sppNAs-3WRtKgptJ7EtyH5foKof4U="
            },
            {
              "firstName": "Luis",
              "lastName": "Figo",
              "nationalTeam": "Portugal",
              "matches": 127,
              "goals": 32,
              "flag": 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
              "photo": "https://media.gettyimages.com/id/1093838918/fr/photo/eindhoven-netherlands-luis-figo-of-portugal-in-action-during-the-uefa-euro-2000-group-a-match.jpg?s=1024x1024&w=gi&k=20&c=wKHzsDlcyNvDYMU4X0Ewm1IeJ1ocwaljxtHqMYjUV6k="
            },
            {
              "firstName": "Andriy",
              "lastName": "Shevchenko",
              "nationalTeam": "Ukraine",
              "matches": 111,
              "goals": 48,
              "flag": 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
              "photo":"https://media.gettyimages.com/id/146179383/fr/photo/kiev-ukraine-andriy-shevchenko-of-ukraine-celebrates-scoring-their-second-goal-during-the-uefa.jpg?s=2048x2048&w=gi&k=20&c=yTxN1EeAUKm7qpDptLPIzoKj5MLcfdyE5EnuXduU17o="
            }
          ]
          
          res.status(200).json(ailliersdroits);
        }
    
     
     

    