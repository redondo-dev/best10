export default function handler(req, res) { 
    // Liste des joueurs avec le numéro 09
    const arrieresgauches=[  
    {
      "firstName": "Paolo",
      "lastName": "Maldini",
      "birthDate": "1968-06-26",
      "nationalTeam": "Italie",
      "matches": 126,
      "goals": 4,
      "flag": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      "photo": "https://media.gettyimages.com/id/640256403/fr/photo/paolo-maldini-in-action-during-a-quarter-finals-match-of-the-1998-fifa-world-cup-against.jpg?s=2048x2048&w=gi&k=20&c=lcnt93hjVP5Q_8p-73F1cGiLLCwTppDKoAGJH5nf2aQ="
    },
    {
        "firstName": "Giacinto",
        "lastName": "Facchetti",
        "nationalTeam": "Italie",
        "matches": 94,
        "goals": 4,
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        "photo": "https://media.gettyimages.com/id/1247212030/fr/photo/rome-italy-italian-captain-giacinto-facchetti-lines-up-before-the-fifa-world-cup.jpg?s=2048x2048&w=gi&k=20&c=q0gd_C3i44RqUUuV3OR9yj2BgINlUI1ntkDXkogwkCk="
      },
    {
      "firstName": "Roberto",
      "lastName": "Carlos",
      "birthDate": "1973-04-10",
      "nationalTeam": "Brésil",
      "matches": 125,
      "goals": 11,
      "flag": 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
      "photo": "https://media.gettyimages.com/id/52627973/fr/photo/montevideo-uruguay-roberto-carlos-of-brazil-in-action-during-the-2006-world-cup-qualifier-south.jpg?s=2048x2048&w=gi&k=20&c=NSU0KNx8GjcrdmIkYp0IK3R5YcRAtAuwFLBc2tVailg="
    },
  
    {
        "firstName": "Marcelo",
        "lastName": "Vieira da Silva Júnior",
        "nationalTeam": "Brésil",
        "matches": 58,
        "goals": 6,
        "flag": 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
        "photo": "https://media.gettyimages.com/id/841371126/fr/photo/porto-alegre-brazil-marcelo-of-brazil-kicks-the-ball-with-of-ecuador-during-a-match-between.jpg?s=2048x2048&w=gi&k=20&c=gEaUS_MoYoW06KxSYqCfxc2bnbh3TitPUxEGPbEWSkY="
      },
 
      {
        "firstName": "Ashley",
        "lastName": "Cole",
        "nationalTeam": "Angleterre",
        "matches": 107,
        "goals": 7,
        "flag": 'https://fr.wikipedia.org/wiki/Drapeau_de_l%27Angleterre#/media/Fichier:Flag_of_England.svg',

        "photo": "https://media.gettyimages.com/id/101635856/fr/photo/rustenburg-south-africa-ashley-cole-of-england-poses-during-the-official-fifa-world-cup-2010.jpg?s=2048x2048&w=gi&k=20&c=HuyhbF2a6IUlUJ0K86GBiltRwdMGERCPpqYssA2FffU="
      },
   
      
      ];
      res.status(200).json(arrieresgauches);
    }

 
  