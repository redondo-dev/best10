
export default function handler(req, res) { 
    // Liste des joueurs avec le numéro 10
    const players = [
      {
        firstName: 'Pelé',
        lastName: 'Edson Arantes',
        birthDate: '1940-10-23',
        nationalTeam: 'Brésil',
        matches: 92,
        goals: 77,
        flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
        photo: 'https://media.gettyimages.com/id/496570815/fr/photo/brazilian-footballer-pele-playing-for-brazil-circa-1958.jpg?s=612x612&w=0&k=20&c=H2qMiM4V23r4DCPe36G1NX-b22V_imP3YjcCaN8-Jxg=',
      },
      {
        firstName: 'Diego',
        lastName: 'Maradona',
        birthDate: '1960-10-30',
        nationalTeam: 'Argentine',
        matches: 91,
        goals: 34,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
        photo: 'https://media.gettyimages.com/id/1363115696/fr/photo/mexico-city-mexico-argentina-captain-diego-maradona-holds-aloft-the-trophy-after-the-fifa.jpg?s=2048x2048&w=gi&k=20&c=3JHsqKcIosEE9-pItYjH6IwCu6v4cHQNsWtXAbWVjY8=',
      },
      {
        firstName: 'Lakhdar',
        lastName: 'Belloumi',
        birthDate: '1958-12-29',
        nationalTeam: 'Algérie',
        matches: 100,
        goals: 28,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
        photo: 'https://media.gettyimages.com/id/79653119/fr/photo/1986-world-cup-finals-guadalajara-mexico-6th-june-brazil-1-v-algeria-0-algerias-lakhdar.jpg?s=1024x1024&w=gi&k=20&c=qTtNqPhNSIaJ1Wi9uwMbhyyYIVi0cYWwxnu7PQ-6ggo=',
      },
      {
        firstName: 'Dragan',
        lastName: 'Stojković',
        birthDate: '1965-03-03',
        nationalTeam: 'Yougoslavie / Serbie',
        matches: 84,
        goals: 15,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
        photo: 'https://media.gettyimages.com/id/52939241/fr/photo/nationalmannschaft-1997-jugoslawien-11-10-97-dragan-stojkovic-yug-einzelaktion.jpg?s=612x612&w=gi&k=20&c=M1t2lO5jvwNscMfiVJccQPCjHeq-aEld2gNGTzZaHzQ=',
      },
      {
        firstName: 'Gianni',
        lastName: 'Rivera',
        birthDate: '1943-08-18',
        nationalTeam: 'Italie',
        matches: 60, // Nombre de matchs
        goals: 22, // Nombre de buts
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
        jersey: 'https://example.com/italy-shirt.png',
        photo: 'https://media.gettyimages.com/id/1222008112/fr/photo/gianni-rivera-of-italy-poses-for-photo-1970.jpg?s=2048x2048&w=gi&k=20&c=8Pw0jqYZbMi8eO9_ycoJ9ottoE93KYXxOZKXkcF-DrA=',
    },
    {
        firstName: 'Valentino',
        lastName: 'Mazzola',
        birthDate: '1910-05-26',
        nationalTeam: 'Italie',
        matches: 70, // Nombre de matchs
        goals: 22, // Nombre de buts
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
        photo: 'https://pbs.twimg.com/media/FCitRtNWYAQxf2M.jpg',
    },
    
      {
        firstName: 'Roberto',
        lastName: 'Baggio',
        birthDate: '1967-02-18',
        nationalTeam: 'Italie',
        matches: 56,
        goals: 27,
        flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
        photo: 'https://media.gettyimages.com/id/640256401/fr/photo/roberto-baggio-in-action-during-a-first-round-match-of-the-1994-fifa-world-cup-against-norway.jpg?s=2048x2048&w=gi&k=20&c=AL4W0wjPfZ5Qt7l0gcJovSyEFz7WK19GFdIz7W1d3cw=',
      },
      {
        firstName: 'Dejan',
        lastName: 'Savićević',
        birthDate: '1965-01-15',
        nationalTeam: 'Monténégro',
        matches: 63,
        goals: 20,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
        photo: 'https://media.gettyimages.com/id/1209368/fr/photo/dejan-savicevic-of-yugoslavia-during-the-euro-2000-qualifier-against-the-republic-of-ireland-at.jpg?s=2048x2048&w=gi&k=20&c=Rj2Tlb4azp00mYGLAvCZvDUEMG8VkXHk4XXwftci4eE=',
      },
      {
        firstName: 'Michel',
        lastName: 'Platini',
        birthDate: '1955-06-21',
        nationalTeam: 'France',
        matches: 72,
        goals: 41,
        flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        photo: 'https://media.gettyimages.com/id/79653336/fr/photo/1986-world-cup-finals-leon-mexico-1st-june-france-1-v-canada-0-frances-michel-platini.jpg?s=2048x2048&w=gi&k=20&c=AwcdpT6SkUI8in1d6XmvxoJ3AXJtzr7Od7jyT4asgMk=',
      },
      {
        firstName: 'Michael',
        lastName: 'Laudrup',
        birthDate: '1964-06-15',
        nationalTeam: 'Danemark',
        matches: 104,
        goals: 37,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
        photo: 'https://media.gettyimages.com/id/52942620/fr/photo/united-kingdom-euro-1996-den-1-sheffield-michael-laudrup-den.jpg?s=612x612&w=gi&k=20&c=HgUcFHPqf5ljXFBydx_YS9_4yhAFw6cM7pE5VPZXu9g=',
      },
      {
        firstName: 'Ruud',
        lastName: 'Gullit',
        birthDate: '1962-09-01',
        nationalTeam: 'Pays-Bas',
        matches: 66,
        goals: 17,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
        photo: 'https://media.gettyimages.com/id/52943827/fr/photo/munich-germany-em-1988-finale-niederlande-0-muenchen-ger-ruud-gullit-ned.jpg?s=612x612&w=gi&k=20&c=xELpNOJznl5z_3HZAWGPoeubLHq7IST6yy1IQs_DZP4=',
      },
      {
        firstName: 'Lionel',
        lastName: 'Messi',
        birthDate: '1987-06-24',
        nationalTeam: 'Argentine',
        matches: 176,
        goals: 106,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
        photo: 'https://media.gettyimages.com/id/1428217516/fr/photo/harrison-new-jersey-lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against.jpg?s=612x612&w=gi&k=20&c=iLk5cI81Mwk5sJkNoymq-r6NHTBEyBWWjpkuavZMiLY=',
      },
      {
        firstName: 'Zinedine',
        lastName: 'Zidane',
        birthDate: '1972-06-23',
        nationalTeam: 'France',
        matches: 108,
        goals: 31,
        flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        photo: 'https://media.gettyimages.com/id/52928229/fr/photo/france-wm-france-98-finale-paris-brasilien-3-frankreich-fussballweltmeister-1998-zinedine.jpg?s=612x612&w=0&k=20&c=IM3e5rMb-NiAyQzI9tn8rm4ko-h6tz2SU2-XnpEMYZQ=',
      },


      {
        firstName: 'Rivaldo',
        lastName: 'Vítor Borba Ferreira',
        birthDate: '1972-04-19',
        nationalTeam: 'Brésil',
        matches: 74,
        goals: 35,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
        photo: 'https://media.gettyimages.com/id/2618211/fr/photo/leicester-rivaldo-of-brazil-running-with-the-ball-during-the-international-friendly-match.jpg?s=612x612&w=0&k=20&c=zObPQt4JtI1HXYHB5DD9Uyq3-mUCfjSFn9RiHrh_te8=',
      },
      {
        firstName: 'Zico',
        lastName: '(Arthur Antunes Coimbra)',
        birthDate: '1953-03-03',
        nationalTeam: 'Brésil',
        matches: 71,
        goals: 48,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
        photo: 'https://media.gettyimages.com/id/79043364/fr/photo/1982-world-cup-finals-seville-spain-23rd-june-brazil-4-v-new-zealand-0-brazils-zico-celebrates.jpg?s=2048x2048&w=gi&k=20&c=qroIm-0eFnvDMz2dyvyUznXYYVNBjyPNt-FFAIGbBgY=',
      },
      {
        firstName: 'Jorge',
        lastName: 'González (Mágico González)',
        birthDate: '1958-03-13',
        nationalTeam: 'El Salvador',
        matches: 62,
        goals: 21,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
        photo: 'https://lh3.googleusercontent.com/proxy/28W1WQ1diHXfccqdZxKaKlvSiK_-_UoTunVyM6WLRE8pb4-oWAcFImUBpuxdOm3_PqTjuSdY0-ubapFfazk1y1nI6D_x57-_R_ivg5WqZvZYTzaLIXqA2i693GDWxrjJadtWgMsnzqnXZjRO',
      },
      {
        firstName: 'Aissa',
        lastName: 'Draoui',
        birthDate: '1935-07-06', // Date fictive, remplace par la vraie
        nationalTeam: 'Algérie',
        matches: '', 
        goals: '', 
        flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
        photo: 'https://ekladata.com/-e_KdFIk3b7MQfh46KXxSS2iiX0.jpg', 
      },
   
      {
        firstName: 'Rachid',
        lastName: 'Mekhloufi',
        birthDate: '1936-01-01', 
        nationalTeam: 'Algérie',
        matches:'' , 
        goals:'' , 
        flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
        photo: 'https://pbs.twimg.com/media/GUw6HG3WIAA34eg.jpg:large', 
      },
      {
        firstName: 'Hassen',
        lastName: 'Lalmas',
        birthDate: '1943-03-12',
        nationalTeam: 'Algérie',
        matches: 43, // Nombre de matchs
        goals: 12, // Nombre de buts
        flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Algeria.svg',
        photo: 'https://i.pinimg.com/736x/8b/ce/53/8bce53c08baa431e4d288f16ccc9efa8.jpg', // Ajoutez l'URL correcte
     
    },
    {
      firstName: 'Mustapha',
      lastName: 'Dahleb',
      birthDate: '1958-01-10',
      nationalTeam: 'Algérie',
      matches: 20, 
      goals: 6, 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
      jersey: 'https://example.com/algeria-shirt.png',
      photo: 'https://media.gettyimages.com/id/1228299642/fr/photo/mustapha-dahleb-of-algeria-during-the-world-cup-match-between-algeria-and-austria-at-estadio.jpg?s=2048x2048&w=gi&k=20&c=qOfj7RYmdII_1iKcaBDHpj4h9bWIm0SUZuwoRyq23LE=',
  },
    {
        firstName: 'Francesco',
        lastName: 'Totti',
        birthDate: '1976-09-27',
        nationalTeam: 'Italie',
        matches: 58, // Nombre de matchs
        goals: 9, // Nombre de buts
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
        photo: 'https://media.gettyimages.com/id/71298989/fr/photo/kaiserslautern-germany-francesco-totti-of-italy-celebrates-after-scoring-the-match-winning.jpg?s=612x612&w=0&k=20&c=hSIdwKRRGsB8x2IrNDJJ_kxd-9DIrPz7wAGNFRFy7RI=',
       
    },
    
      
      {
        firstName: 'Gheorghe',
        lastName: 'Hagi',
        birthDate: '1965-02-05',
        nationalTeam: 'Roumanie',
        matches: 124,
        goals: 35,
        flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg', 
        photo: 'https://media.gettyimages.com/id/2006177658/fr/photo/newcastle-england-gheorghe-hagi-of-romania-running-during-the-uefa-euro-1996-group-b-match.jpg?s=1024x1024&w=gi&k=20&c=NatvimBgIghmyNH7G1L2dZv23uxzHs7ThkZhs9ASdiI=',


        },
        {
                firstName: 'Carlos',
                 lastName: 'Valderrama',
                birthDate: '1961-09-02',
                nationalTeam: 'Colombie',
                matches: 111,
                goals: 11,
                flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg', 
                // jersey: 'https://example.com/colombia-shirt.png',
                photo: 'https://media.gettyimages.com/id/542261300/fr/photo/carlos-valderama-during-the-national-anthem-before-a-round-of-16-match-of-the-1990-fifa-world.jpg?s=2048x2048&w=gi&k=20&c=Z6HCJaYnpdU-9RFl-AQVGtjz8gNJE59jk7lVUmy_SEo=',
            },
            {
                firstName: 'Marco',
                lastName: 'Etcheverry',
                birthDate: '1970-09-26',
                nationalTeam: 'Bolivie',
                matches: 71,
                goals: 13,
                flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg',
                photo: 'https://media.gettyimages.com/id/78953694/fr/photo/june-1997-copa-america-marco-etcheverry-bolivia.jpg?s=2048x2048&w=gi&k=20&c=I2ZOs_CiI83sWHh2Ta1GIVZH2wFdNIBFwv9-7QyZMrk=',
            },
            {
                firstName: 'Jay-Jay',
                lastName: 'Okocha',
                 birthDate: '1973-08-14',
                nationalTeam: 'Nigeria',
                matches: 73,
                goals: 14,
                flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
                photo: 'https://media.gettyimages.com/id/53158581/fr/photo/kano-nigeria-jay-jay-okocha-of-nigeria-in-action-during-the-2006-world-cup-qualifying-match.jpg?s=1024x1024&w=gi&k=20&c=lZ4l5Ow1bGfWFpkpFn_iJ72ULeMOKZz7pWgKMUU5cKs=',
              },
           
              {
                  firstName: 'Tarak',
                  lastName: 'Dhiab',
                  birthDate: '1954-01-15',
                  nationalTeam: 'Tunisie',
                  flag:'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
                  photo:''
                 
              
              },
              
              {
                  firstName: 'Oleg',
                  lastName: 'Protasov',
                  birthDate: '1964-02-04',
                  nationalTeam: 'URSS / Ukraine',
                  matches: 68,
                   goals: 29,
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
                  photo: 'https://media.gettyimages.com/id/79653543/fr/photo/1990-world-cup-finals-bari-italy-9th-june-romania-2-v-ussr-0-ussrs-oleg-protasov.jpg?s=612x612&w=gi&k=20&c=_E3cxBEUjDlm8tT_po5UEQnber2FF98XPfuDx--Hl_w=',
              },
           
              {
                  firstName: 'Alex',
                  lastName: 'Aguinaga',
                  birthDate: '1968-07-09',
                  nationalTeam: 'Équateur',
                  matches: 109,
                  goals: 23,
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
                  photo: 'https://media.gettyimages.com/id/79050644/fr/photo/football-2002-world-cup-qualifier-south-american-conmebol-group-24th-april-2001-quito-ecuador-2.jpg?s=2048x2048&w=gi&k=20&c=0IVHt5Ops35vInDNi4Z3idmDFDqEfqReruCGvUuBz1M=',
              },
             
              {
                  firstName: 'Riquelme',
                  lastName: 'Juan Román',
                  birthDate: '1978-06-24',
                  nationalTeam: 'Argentine',
                  matches: 51,
                  goals: 17,
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
                  photo: 'https://media.gettyimages.com/id/71172926/fr/photo/hamburg-germany-juan-roman-riquelme-of-argentina-runs-with-the-ball-during-the-fifa-world-cup.jpg?s=2048x2048&w=gi&k=20&c=LpMIPM20Y-PSy25-xa8o5LKBvcocS7vOmVllZ7xkepA=',
                },
                {
                  firstName: 'Ortega',
                  lastName: 'Ariel',
                  birthDate: '1974-03-04',
                  nationalTeam: 'Argentine',
                  matches: 87,
                  goals: 17,
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
                 
                  photo: 'https://media.gettyimages.com/id/78978098/fr/photo/football-2002-fifa-world-cup-finals-group-f-sapporo-japan-7th-june-2002-argentina-0-v-england-1.jpg?s=1024x1024&w=gi&k=20&c=Y61Dvi5NZJ0WQ6NsxGtWjb9oaFJiEpZnhcD-0tIxdbo=',
                },
                {
                  firstName: 'Timoumi',
                  lastName: 'Abdeljalil',
                  birthDate: '1967-04-23',
                  nationalTeam: 'Morocco',
                  matches: 60,
                  goals: 8,
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
                  photo: 'https://media.gettyimages.com/id/79653021/fr/photo/1986-world-cup-finals-monterrey-mexico-6th-june-england-0-v-morocco-0-moroccos-mohamed-timoumi.jpg?s=1024x1024&w=gi&k=20&c=3jFhf8XhatryOQ8kTzPLfLRnqrtnFzbpE75B_Kma_zI=',
                },
          
              {
                  firstName: 'Zinedine',
                  lastName: 'Benbarek',
                  birthDate: '1927-03-05',
                  nationalTeam: 'Maroc',
                  matches: 37, 
                  goals: 10, 
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
                  jersey: 'https://example.com/morocco-shirt.png',
                  photo: 'https://media.gettyimages.com/id/518161998/fr/photo/zinedine-benbarek-of-morocco.jpg?s=2048x2048&w=gi&k=20&c=2GszG2-nIjfW7_9KnsvtbA8F_gDgTEZsdDQ3GRFDbEc=',
              },
              {
                  firstName: 'Alfredo',
                  lastName: 'Di Stéfano',
                  birthDate: '1926-07-04',
                  nationalTeam: 'Argentine',
                  matches: 31, 
                  goals: 23, 
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
                  photo: 'https://media.gettyimages.com/id/3429336/fr/photo/argentinian-born-spanish-footballer-alfredo-di-stefano-makes-his-first-appearance-for-espanol-of.jpg?s=612x612&w=gi&k=20&c=GJiajJhp0YKw37rP_Do9HN-lde3PcL66yICk1ZYyZ4w=',
              },
              {
                  firstName: 'Santillana',
                  lastName: 'carlos',
                  birthDate: '1952-08-28',
                  nationalTeam: 'Espagne',
                  matches: 56, 
                  goals: 23, 
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
                  photo: 'https://media.gettyimages.com/id/93713667/fr/photo/carlos-santillana-of-spain-during-the-spain-v-england-world-cup-match-held-at-bernabeu-stadium.jpg?s=2048x2048&w=gi&k=20&c=GiBCJLaJTW-dPuDQudrtdWjcUlGUqHJm2gyrtVLd714=',
              },
              {
                  firstName: 'Neymar',
                  lastName: 'Jr',
                  birthDate: '1992-02-05',
                  nationalTeam: 'Brésil',
                  matches: 123, // Nombre de matchs
                  goals: 77, // Nombre de buts
                  flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
               photo:'https://media.gettyimages.com/id/1280084624/fr/photo/lima-peru-neymar-jr-of-brazil-celebrates-after-scoring-the-fourth-goal-of-his-team-during-a.jpg?s=1024x1024&w=gi&k=20&c=i_eGFXru076cirp51GWES1kwI42nmqUIfgVao4YTLU4='
              },
              {
                  firstName: 'Rui costa',
                  lastName: 'Manuel ',
                  birthDate: '29-04-1972',
                  nationalTeam: 'Portugal',
                  matches: 94, 
                  goals: 26, 
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
                  photo: 'https://media.gettyimages.com/id/1093838858/fr/photo/eindhoven-netherlands-rui-costa-of-portugal-in-action-during-the-uefa-euro-2000-group-a-match.jpg?s=2048x2048&w=gi&k=20&c=F6S70a189QSmxAyWEjbuR5yIhZ_wMEFYQ37-sU-PhYY=',
              },
              {
                firstName: 'Oleg',
                lastName: 'blokhine  ',
                birthDate: '05-11-1952',
                nationalTeam: 'URSS/Ukraine',
                matches: 112, 
                goals: 42, 
                flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
                photo: 'https://media.gettyimages.com/id/79651720/fr/photo/2nd-june-1984-friendly-international-wembley-england-0-v-russia-2-russias-oleg-blokhin.jpg?s=2048x2048&w=gi&k=20&c=0fl3JJGYXj61BX7VtbZsZGi7aMo-lFeNHSg-2wZDm0c='
              },
                
            
              {
                  firstName: 'Enzo',
                  lastName: 'Schifo',
                  birthDate: '1969-08-15',
                  nationalTeam: 'Belgique',
                  matches: 64, // Nombre de matchs
                  goals: 14, // Nombre de buts
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
                  photo: 'https://media.gettyimages.com/id/735860205/fr/photo/belgian-footballer-and-captain-of-the-national-team-enzo-scifo-pictured-in-action-playing-for.jpg?s=1024x1024&w=gi&k=20&c=ZGaa6agcaQ_aXXIQSLvX_WrtMox_OZOYCpgsscgj0i0=',
              },
              {
                  firstName: 'Abedi',
                  lastName: 'Pelé',
                  birthDate: '1964-11-05',
                  nationalTeam: 'Ghana',
                  matches: 73, // Nombre de matchs
                  goals: 31, // Nombre de buts
                  flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
                  jersey: 'https://example.com/ghana-shirt.png',
                  photo: 'https://media.gettyimages.com/id/1235984/fr/photo/ghanas-abedi-pele-chases-the-ball-during-ghanas-2-1-victory-today-at-port-elizabeth-in-the-first.jpg?s=2048x2048&w=gi&k=20&c=u76gYa-TQJq388Csd9G8KFz5E54JJNWYw2zB2SxcICc=',
              },
              {
                  firstName: 'Gil',
                  lastName: 'Bocande',
                  birthDate: '1955-11-25',
                  nationalTeam: 'Senegal',
                  matches: 32, 
                  goals: 5, 
                  flag:'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
                  photo: 'https://media.gettyimages.com/id/829412022/fr/photo/jules-francois-bocande-of-senegal-during-the-african-cup-nations-match-between-senegal-and.jpg?s=2048x2048&w=gi&k=20&c=pxGvD2Ja_GZ5DvSMqFTf0fyyZTTAQNfk1RH1zgq5zJA=',
              },
             
              {
                firstName: 'Lothar',
                lastName: 'Matthäus',
                birthDate: '1961-03-21',
                nationalTeam: 'Allemagne',
                matches: 150, 
                goals: 23, 
                flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
                photo: 'https://media.gettyimages.com/id/1281077/fr/photo/lothar-matthaus-of-germany-on-the-ball-against-northern-ireland-in-the-european-championship.jpg?s=2048x2048&w=gi&k=20&c=rBd1n8wIezPHr_Fvtfo0ULtfaL3pNRehUfVCtIpyhFg=',
            },
            {
                firstName: 'Tomáš',
                lastName: 'Rosický',
                birthDate: '1980-10-04',
                nationalTeam: 'République Tchèque',
                matches: 105, 
                goals: 23, 
                flag:'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
                photo: 'https://media.gettyimages.com/id/541012628/fr/photo/tomas-rosicky-of-czech-republic-during-the-uefa-euro-2016-group-d-match-between-czech-republic.jpg?s=1024x1024&w=gi&k=20&c=tTy2tlGbq2YkbaZ39GKwWKSYdEDWkuaCukRBD4XNudk=',
            },
            {
                firstName: 'tomas',
                lastName: 'Shkuravy',
                birthDate: '1963-10-18',
                nationalTeam: 'Republique tchéque',
                matches: 70, 
                goals: 15, 
                flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
                photo: 'https://media.gettyimages.com/id/1227172182/fr/photo/tom%C3%A1%C5%A1-skuhrav%C3%BD-of-genoa-poses-for-photo-during-the-serie-a-1990-91-italy.jpg?s=2048x2048&w=gi&k=20&c=C-AD3BLJtp5pl-RZzk7fs2eY-tYqI9OqYSRmeh-heUM=',
            } 
              
                
    ];
    res.status(200).json(players);
}