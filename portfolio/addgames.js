var games = {
    0: {
        "name": "Cat Carnival",
        "type": "itch",
        "link": "https://jayden-holliss.itch.io/cat-carnival",
        "image": "https://img.itch.zone/aW1nLzE3MzYxNDkzLnBuZw==/original/TVE%2BND.png"
    },
    1: {
        "name": "Guns GirlZ: Operation Gekkou - Retro",
        "type": "itch",
        "link": "https://mister-spaceman.itch.io/guns-girlz-operation-gekkou-retro",
        "image": "https://img.itch.zone/aW1nLzc3MDkxNjYucG5n/315x250%23c/crs5zF.png"
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
        "name": "Super Fast Racing",
        "type": "itch",
        "link": "https://jayden-holliss.itch.io/super-fast-racing",
        "image": "https://img.itch.zone/aW1nLzE5OTU5MTc3LnBuZw==/original/MrHtTV.png"
    },
    5: {
        "name": "Audio Waves",
        "type": "itch",
        "link": "",
        "image": ""
    },
    6: {
        "name": "Endless Jumper",
        "type": "google",
        "link": "https://play.google.com/store/apps/details?id=com.GoodEnoughToBeTheBest.EndlessJumper",
        "image": "https://play-lh.googleusercontent.com/5aX2DldZU5VwAPz7xhwh0XBzZQVl3TRGnpYLD4nJZ6d2dXb6hULa8r8b5AgeLPzvwfnI=w240-h480-rw"
    },
};
var typesCompleted = 0;
var undefinedImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

setTimeout(MainGames, 200);

function MainGames() {
    let gamesHolder = document.getElementsByClassName("gamesHolder")[0];
    if (gamesHolder != undefined) {
        SetGames(gamesHolder, 'any');
    }
    else {
        clearTimeout();
        setTimeout(MainGames, 200);
    }
}
setTimeout(GoogleGames, 200);

function GoogleGames() {
    let gamesHolder = document.getElementsByClassName("googleGamesHolder")[0];
    if (gamesHolder != undefined) {
        SetGames(gamesHolder, 'google');
    }
    else {
        clearTimeout();
        setTimeout(GoogleGames, 200);
    }
}

setTimeout(ItchGames, 200);

function ItchGames() {
    let gamesHolder = document.getElementsByClassName("itchGamesHolder")[0];
    if (gamesHolder != undefined) {
        SetGames(gamesHolder, 'itch');
    }
    else {
        clearTimeout();
        setTimeout(ItchGames, 200);
    }
}

 


function SetGames(gamesHolder, type) {
    for (let i = 0; i < Object.keys(games).length; i++) {
        let content = (gamesHolder.innerHTML);
        // /console.log(content);
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
                    gameType = "Google Play Store"
                    break;
                case "itch":
                    gameColour = "#FA5C5C";
                    gameType = "itch.io"
                    break;
                default:
                    gameColour = "#870051";
                    gameType = '';
                    break;

            }
            if (type == 'any' || games[i].type == type) {
                content += '<div class="gamecontent" style="padding-left: 5px;padding-right: 5px;"> <div class="thumb_wrapper"><img src="' + gameImage + '" class="thumb" srcset="' + gameImage + ' 2x" style="max-height:200px;min-height:200px;height:200px;"><div class="downloadbutton" style="align-items: center;text-align: center;"><a href="' + gameLink + '" class="button" target="_blank" style="background-color:' + gameColour + ';max-width: 180px;text-wrap: auto;">Download on ' + gameType + '</a></div></div></div>'
            }


            
        }

    }
    if (content != undefined) {
        gamesHolder.innerHTML = content;
    }
    typesCompleted++;
    
    



}

function AddCollapse() {
    if (typesCompleted >= 3) {
        SetCollapse();
    }
    else {
        clearTimeout();
        setTimeout(SetCollapse, 200);
    }
}

function SetCollapse() {
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
} }