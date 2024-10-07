
 export default function handler (res,req){


 const arrieresdroits =[
    {
      "firstName": "Cafu",
      "lastName": "Cafu",
      "nationalTeam": "Brésil",
      "matches": 142,
      "goals": 5,
      "photo": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Cafu_2015.jpg"
    },
    {
      "firstName": "Lilian",
      "lastName": "Thuram",
      "nationalTeam": "France",
      "matches": 142,
      "goals": 2,
      "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Lilian_Thuram_2018.jpg"
    },
    {
      "firstName": "Dani",
      "lastName": "Alves",
      "nationalTeam": "Brésil",
      "matches": 117,
      "goals": 8,
      "photo": "https://upload.wikimedia.org/wikipedia/commons/3/34/Dani_Alves_2018.jpg"
    },
  
    {
      "firstName": "Philipp",
      "lastName": "Lahm",
      "nationalTeam": "Allemagne",
      "matches": 113,
      "goals": 5,
      "photo": "https://upload.wikimedia.org/wikipedia/commons/0/09/Philipp_Lahm_2014.jpg"
    },
    {
      "firstName": "José",
      "lastName": "Bosingwa",
      "nationalTeam": "Portugal",
      "matches": 50,
      "goals": 0,
      "photo": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Jos%C3%A9_Bosingwa_2014.jpg"
    },
 
    {
      "firstName": "Antonio",
      "lastName": "Rüdiger",
      "nationalTeam": "Allemagne",
      "matches": 49,
      "goals": 2,
      "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Antonio_R%C3%BCdiger_2018.jpg"
    },
    {
      "firstName": "Djalma",
      "lastName": "Vitorino",
      "nationalTeam": "Brésil",
      "matches": 30,
      "goals": 0,
      "photo": "https://upload.wikimedia.org/wikipedia/commons/0/07/Djalma_Vitorino_2012.jpg"
    }
 
  ]
  res.status(200).json(arrieresdroits);
 }
 