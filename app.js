const premTeams = [
    {name: 'Burnley',
     backColor: '#6C1D45',
     frontColor: 'rgb(237,233,57)',
     shadowColor: '#99D6EA',
     badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/burnley_fc_logo.png'
     
    },

    {name: 'Aston Villa', 
     backColor: '#95BFE5',
     frontColor: '#670E36',
     shadowColor: '#FEE505',
     badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2018/08/aston_villa_fc.png'
    },

     {name: 'Bournemouth',
      backColor: '#DA291C',
      frontColor: 'white',
      shadowColor: '#000000',
      badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/afc_bournemouth_logo.png'
    },

    {name: 'Arsenal',
    backColor: '#EF0107',
    frontColor: 'white',
    shadowColor: '#063672',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/arsenal_crest_colors.jpg'

    },

    {name: 'Brighton and Hove Albion',
     backColor: '#0057B8',
     frontColor: 'white',
     shadowColor: '#FFCD00',
     badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/400px-Brighton__Hove_Albion_logo.svg_.png'

    },

    {name: 'Chelsea',
    backColor: '#034694',
    frontColor: 'white',
    shadowColor: '#DBA111',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/chelsea_fc_logo.png'

    },

    {name: 'Crystal Palace',
    backColor: '#1B458F',
    frontColor: '#A7A5A6',
    shadowColor: '#C4122E',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/crystal_palace_fc_logo.jpg'

    },

    {name: 'Everton',
    backColor: '#003399',
    frontColor: 'white',
    shadowColor: 'white',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/everton.png'

    },

    {name: 'Leicester City',
    backColor: '#003090',
    frontColor: 'white',
    shadowColor: '#FDBE11',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/leicester_city_fc_colors.png'

    },

    {name: 'Liverpool',
    backColor: '#C8102E',
    frontColor: '#F6EB61',
    shadowColor: '##00B2A9',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/liverpool_fc_colors.jpeg'

    },

    {name: 'Man City',
    backColor: '#6CABDD',
    frontColor: '#1C2C5B',
    shadowColor: '#1C2C5B',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/manchester_city_fc_logo_colors.png'

    },

    {name: 'Man Utd',
    backColor: '#DA291C',
    frontColor: '#FBE122',
    shadowColor: 'black',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/manchester_united_logo_colors.png'

    },

    {name: 'Newcastle Utd',
    backColor: '#241F20',
    frontColor: 'white',
    shadowColor: 'white',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/newcastle_united_fc_crest-768x773.png'

    },

    {name: 'Southampton',
    backColor: '#D71920',
    frontColor: 'white',
    shadowColor: '#FFC20E',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/southhampton_fc.png'

    },

    {name: 'Spurs',
    backColor: '#132257',
    frontColor: 'white',
    shadowColor: 'white',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/tottenham_hotspur_logo.png'

    },

    {name: 'Watford FC',
    backColor: '#FBEE23',
    frontColor: '#ED2127',
    shadowColor: '#11210C',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/watford.png'

    },

    {name: 'Norwich City',
    backColor: '#ffef00',
    frontColor: 'green',
    shadowColor: 'green',
    badge: ''

    },

    {name: 'West Ham Utd',
    backColor: '#7A263A',
    frontColor: '#1BB1E7',
    shadowColor: '#F3D459',
    badge: ''

    },

    {name: 'Wolves',
    backColor: '#FDB913',
    frontColor: '#231F20',
    shadowColor: '#231F20',
    badge: 'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2018/08/wolves-logo.png'

    },

    {name: 'Sheffield United',
    backColor: '#D71920',
    frontColor: 'white',
    shadowColor: '#FFC20E',
    badge: ''

    },

]

const addBtn = document.querySelector('.add');
const container = document.querySelector('.container');
const home = document.querySelector('.home');
const away = document.querySelector('.away');
const homeScore = document.querySelector('.home-score');
const versus = document.querySelector('.vs');
let rnd = Math.floor(Math.random() * premTeams.length);
let rnd2 = Math.floor(Math.random() * premTeams.length);

function pickTeam(arr) {
   
    // If there are elements still in the array
    if (arr.length) {
 
     // Grab that random element from the array
     const el = arr.splice(rnd, 1)[0];
     console.log(el);
 
     // Wait 1 second before calling the function
     // again with the reduced array
     setTimeout(() => pickTeam(arr), 2000);
   }



addBtn.addEventListener('click', () => {
    const fixture = document.createElement("div");
    const addHome = document.createElement("div");
    const addAway = document.createElement("div");
    const addHomeScore = document.createElement("div");
    const addAwayScore = document.createElement("div");
    const addVs = document.createElement("div");

    container.classList = 'container';
    fixture.classList = 'fixture';


    //home div
    addHome.classList = 'home';
    addHome.textContent = premTeams[rnd].name;
    addHome.style.backgroundColor = premTeams[rnd].backColor;
    addHome.style.color = premTeams[rnd].frontColor;
    addHome.style.borderColor = premTeams[rnd].shadowColor;


    //home score
    addHomeScore.classList = 'home-score';
    addHomeScore.textContent = '0';


    //versus
    addVs.classList = 'vs';
    addVs.textContent = 'Vs';


    //away score
    addAwayScore.classList = 'away-score';
    addAwayScore.textContent = '0';

    //away div
    addAway.classList = 'away';
    addAway.textContent = premTeams[rnd2].name;
    addAway.style.backgroundColor = premTeams[rnd2].backColor;
    addAway.style.color = premTeams[rnd2].frontColor;
    addAway.style.borderColor = premTeams[rnd2].shadowColor;
    
    
    container.appendChild(fixture);
    fixture.appendChild(addHome);
    fixture.appendChild(addHomeScore);
    fixture.appendChild(addVs);
    fixture.appendChild(addAwayScore);
    fixture.appendChild(addAway);
})


    