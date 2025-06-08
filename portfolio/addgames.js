var games = {
    0: {
        "name": "Guns GirlZ: Operation Gekkou - Retro",
        "type": "itch",
        "link": "https://mister-spaceman.itch.io/guns-girlz-operation-gekkou-retro",
        "image": "https://img.itch.zone/aW1nLzc3MDkxNjYucG5n/315x250%23c/crs5zF.png"
    },
    1: {
        "name": "Cat Carnival",
        "type": "itch",
        "link": "https://jayden-holliss.itch.io/cat-carnival",
        "image": "https://img.itch.zone/aW1nLzE3MzYxNDkzLnBuZw==/original/TVE%2BND.png"
    },
    2: {
        "name": "Toy Survival",
        "type": "itch",
        "link": "https://jayden-holliss.itch.io/toy-survival",
        "image": "https://img.itch.zone/aW1nLzE4OTMyMDY4LnBuZw==/315x250%23c/3UJj9Z.png"
    },
    3: {
        "name": "Your Screen",
        "type": "itch",
        "link": "https://jayden-holliss.itch.io/your-screen",
        "image": ""
    },
    4: {
        "name": "Bubble Wubble",
        "type": "ggj",
        "link": "https://globalgamejam.org/games/2025/bubble-wubble-2",
        "image": ""
    },
    5: {
        "name": "Audio Waves",
        "type": "itch",
        "link": "",
        "image": ""
    },
    6: {
        "name": "Super Fast Racing",
        "type": "itch",
        "link": "https://jayden-holliss.itch.io/super-fast-racing",
        "image": "https://img.itch.zone/aW1nLzE5OTU5MTc3LnBuZw==/original/MrHtTV.png"
    },
    7: {
        "name": "Endless Jumper",
        "type": "google",
        "link": "https://play.google.com/store/apps/details?id=com.GoodEnoughToBeTheBest.EndlessJumper",
        "image": "https://play-lh.googleusercontent.com/5Y4l6Dj4jI3iTYOPPauvB12LG__GfP4lnTa1nhpzjGQSpT9ajqrZLxhOMUQyVmN39Rc3=w240-h480-rw"
    },
    8: {
        "name": "Seeds of Klotho",
        "type": "itch",
        "link": "https://teamhyposphere.itch.io/seeds-of-klotho",
        "image": "https://img.itch.zone/aW1nLzIxNTc2NTY0LnBuZw==/315x250%23c/Dr4%2BVn.png"
    },
};
var typesCompleted = 0;
var undefinedImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

setTimeout(FetchGames.bind(this, 'gamesHolder', 'any'));
setTimeout(FetchGames.bind(this, 'googleGamesHolder', 'google'));
setTimeout(FetchGames.bind(this, 'itchGamesHolder', 'itch'));
setTimeout(FetchGames.bind(this, 'ggjGamesHolder', 'ggj'));

function FetchGames(inputclass, type) {
    let gamesHolder = document.getElementsByClassName(inputclass)[0];
    if (gamesHolder != undefined) {
        SetGames(gamesHolder, type);
    }
    else {
        clearTimeout();
        setTimeout(FetchGames.bind(this, inputclass, type), 200);
    }
}



function SetGames(gamesHolder, type) {
    for (let i = 0; i < Object.keys(games).length; i++) {
        let content = (gamesHolder.innerHTML);
        //console.log(content);
        let gameLink = games[i].link;
        if (gameLink != "") {
            let gameImage = games[i].image;
            if (gameImage == "") {
                gameImage = undefinedImage;
            }
            let gameColour = '#870051';
            let gameType = '';
            switch (games[i].type) {
                case "steam":
                    gameColour = "#145689";
                    gameType = "Steam";
                    break;
                case "google":
                    gameColour = "#A4C639";
                    gameType = "Google Play Store";
                    break;
                case "itch":
                    gameColour = "#FA5C5C";
                    gameType = "itch.io";
                    break;
                case "ggj":
                    gameColour = "#1FA9E1";
                    gameType = "Global Game Jam";
                    break;
                default:
                    gameColour = "#870051";
                    gameType = '';
                    break;

            }
            if (type == 'any' || games[i].type == type) {
                content += '<div class="gamecontent"> <div class="thumb_wrapper"><h3 style="padding-top:5px;padding-bottom:5px;max-width:200px;font-size:1em;height: 2em;max-height: 2em;min-height: 1em;">'+games[i].name+'</h3><br><a href="'+gameLink+'"><img src="' + gameImage + '" class="thumb" srcset="' + gameImage + ' 2x" style="max-height:200px;min-height:200px;height:200px;"></a><div class="downloadbutton" style="align-items: center;text-align: center;"><a href="' + gameLink + '" class="button" target="_blank" style="background-color:' + gameColour + ';max-width: 180px;text-wrap: auto;">Download on ' + gameType + '</a></div>&lrm;</div><p>&lrm;</div><p>&lrm;'
            }


            
        }
        if (content != undefined) {
            gamesHolder.innerHTML = content;
        }

    }
    typesCompleted++;
    
    



}


AddCollapse();

function AddCollapse() {
    if (typesCompleted >= 4) {
        SetCollapse();
    }
    else {
        clearTimeout();
        setTimeout(SetCollapse, 200);
    }
}

function SetCollapse() {
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
setTimeout(function(){ coll[0].click(); }, 300);


}