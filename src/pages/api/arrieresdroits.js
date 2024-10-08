 export default function handler (req,res){


 const arrieresdroits =[
    {
      "firstName": "Cafu",
      "lastName": "Cafu",
      "nationalTeam": "Brésil",
      "matches": 142,
      "goals": 5,
      "flag": 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
      "photo": "https://media.gettyimages.com/id/1322213454/fr/photo/frankfurt-germany-cafu-of-brazil-in-action-during-the-world-cup-quarter-final-match-between.jpg?s=2048x2048&w=gi&k=20&c=lhd8WCQsqJZoWQwO7U9gJybGCe3IRRzAfZhlfwz7J5w="
    },
    {
      "firstName": "Berti",
      "lastName": "Vogts",
      "nationalTeam": "Allemagne",
      "matches": 96,
      "goals": 1,
      "flag": 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
      "photo": "https://media.gettyimages.com/id/1231557095/fr/photo/munich-west-germany-berti-vogts-of-west-germany-in-action-during-the-international-friendly.jpg?s=2048x2048&w=gi&k=20&c=U41jTVz_AamcHP2xnHvs5tdz3twikUCn3dMbOpGeV7w="
    },
    {
      "firstName": "Lilian",
      "lastName": "Thuram",
      "nationalTeam": "France",
      "matches": 142,
      "goals": 2,
      "photo": "https://media.gettyimages.com/id/52924140/fr/photo/france-international-97-98-fra-0-lilian-thuram-frankreich.jpg?s=2048x2048&w=gi&k=20&c=Zy9TPIhqB2d9I49xbs4GJHM95pI5KNxrvxkZxCkjZUw="
    },
    {
      "firstName": "Dani",
      "lastName": "Alves",
      "nationalTeam": "Brésil",
      "matches": 117,
      "goals": 8,
      "flag": 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
      "photo": "https://media.gettyimages.com/id/1339377108/fr/photo/recife-brazil-dani-alves-of-brazil-fixes-his-captains-armband-during-a-match-between-brazil.jpg?s=2048x2048&w=gi&k=20&c=rTwcbTtK3AYcospy8SSLAZFA1s2fqv-u4YDlxoXAH8Y="
    },
  
    {
      "firstName": "Philipp",
      "lastName": "Lahm",
      "nationalTeam": "Allemagne",
      "matches": 113,
      "goals": 5,
      "flag": 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
      "photo": "https://media.gettyimages.com/id/101582955/fr/photo/frankfurt-am-main-germany-team-captain-philipp-lahm-poses-during-the-official-team-photocall.jpg?s=2048x2048&w=gi&k=20&c=R-5AL6Ic3exLJp7RnUOsNj5MWIPpzAC-1YtOov6cptA="
    },
    {
      "firstName": "José",
      "lastName": "Bosingwa",
      "nationalTeam": "Portugal",
      "matches": 50,
      "goals": 0,
      "photo": ""
    },
 
    {
      "firstName": "Antonio",
      "lastName": "Rüdiger",
      "nationalTeam": "Allemagne",
      "matches": 49,
      "goals": 2,
      "photo": ""
    },
    {
      "firstName": "Djalma",
      "lastName": "Vitorino",
      "nationalTeam": "Brésil",
      "matches": 30,
      "goals": 0,
      "flag": 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
      "photo": "https://upload.wikimedia.org/wikipedia/commons/0/07/Djalma_Vitorino_2012.jpg"
    }
 
  ]
  res.status(200).json(arrieresdroits);
 }
 