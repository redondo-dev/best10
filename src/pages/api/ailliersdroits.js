export default function handler (req , res){


    const ailliersdroits =[
            {
              "firstName": "George",
              "lastName": "Best",
              "nationalTeam": "Irlande du Nord",
              "matches": 37,
              "goals": 9,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/d/db/George_Best_1968.jpg"
            },
            {
              "firstName": "David",
              "lastName": "Beckham",
              "nationalTeam": "Angleterre",
              "matches": 115,
              "goals": 17,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/David_Beckham_2007.jpg"
            },
            {
              "firstName": "Gianluigi",
              "lastName": "Lentini",
              "nationalTeam": "Italie",
              "matches": 13,
              "goals": 0,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/8/84/Gianluigi_Lentini_1992.jpg"
            },
            {
              "firstName": "Roberto",
              "lastName": "Donadoni",
              "nationalTeam": "Italie",
              "matches": 63,
              "goals": 5,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/7/70/Roberto_Donadoni_2009.jpg"
            },
            {
              "firstName": "Cristiano",
              "lastName": "Ronaldo",
              "nationalTeam": "Portugal",
              "matches": 200,
              "goals": 123,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
            },
            {
              "firstName": "Luis",
              "lastName": "Figo",
              "nationalTeam": "Portugal",
              "matches": 127,
              "goals": 32,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Luis_Figo_2010.jpg"
            },
            {
              "firstName": "Andriy",
              "lastName": "Shevchenko",
              "nationalTeam": "Ukraine",
              "matches": 111,
              "goals": 48,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/3/38/Andriy_Shevchenko_2011.jpg"
            }
          ]
          
          res.status(200).json(ailliersdroits);
        }
    
     
     

    