var games = {
    0: {
        "name": "Guns GirlZ: Operation Gekkou - Retro",
        "type": ["itch"],
        "link": ["https://hoyostans.itch.io/guns-girlz-operation-gekkou-retro"],
        "image": "https://img.itch.zone/aW1nLzIxNjYxOTUwLnBuZw==/315x250%23c/AsGUtZ.png"
    },
    1: {
        "name": "Cat Carnival",
        "type": ["itch", "google"],
        "link": ["https://jayden-holliss.itch.io/cat-carnival", "https://play.google.com/store/apps/details?id=com.ProjectFish.CatCarnival"],
        "image": "https://img.itch.zone/aW1nLzE3MzYxNDkzLnBuZw==/original/TVE%2BND.png"
    },
    2: {
        "name": "Toy Survival",
        "type": ["itch"],
        "link": ["https://jayden-holliss.itch.io/toy-survival"],
        "image": "https://img.itch.zone/aW1nLzE4OTMyMDY4LnBuZw==/315x250%23c/3UJj9Z.png"
    },
    3: {
        "name": "Bubble Wubble",
        "type": ["ggj"],
        "link": ["https://globalgamejam.org/games/2025/bubble-wubble-2"],
        "image": ""
    },
    4: {
        "name": "Audio Waves",
        "type": ["itch"],
        "link": [],
        "image": ""
    },
    5: {
        "name": "Super Fast Racing",
        "type": ["itch"],
        "link": ["https://jayden-holliss.itch.io/super-fast-racing"],
        "image": "https://img.itch.zone/aW1nLzE5OTU5MTc3LnBuZw==/original/MrHtTV.png"
    },
    6: {
        "name": "Endless Jumper",
        "type": ["google"],
        "link": ["https://play.google.com/store/apps/details?id=com.GoodEnoughToBeTheBest.EndlessJumper"],
        "image": "https://play-lh.googleusercontent.com/5Y4l6Dj4jI3iTYOPPauvB12LG__GfP4lnTa1nhpzjGQSpT9ajqrZLxhOMUQyVmN39Rc3=w240-h480-rw"
    },
    7: {
        "name": "Seeds of Klotho",
        "type": ["itch"],
        "link": ["https://teamhyposphere.itch.io/seeds-of-klotho"],
        "image": "https://img.itch.zone/aW1nLzIxNTc2NTY0LnBuZw==/315x250%23c/Dr4%2BVn.png"
    },
    8: {
        "name": "NEEDA History Investigation Series",
        "type": ["itch"],
        "link": ["https://jayden-holliss.itch.io/needa"],
        "image": "https://img.itch.zone/aW1nLzIyNzM4ODM5LnBuZw==/347x500/hN93yN.png"
    },
    9: {
        "name": "Online Drawing Game",
        "type": ["itch"],
        "link": ["https://jayden-holliss.itch.io/online-drawing"],
        "image": "https://img.itch.zone/aW1nLzIyNzM4NzU0LnBuZw==/347x500/K9RuRK.png"
    },
    10: {
        "name": "Path To The Future",
        "type": ["itch"],
        "link": ["https://jayden-holliss.itch.io/path-to-the-future"],
        "image": "https://img.itch.zone/aW1nLzIzNzc0OTIxLnBuZw==/original/mpMnMH.png"
    },
    11: {
        "name": "Murder Hunt",
        "type": ["itch"],
        "link": ["https://jayden-holliss.itch.io/murder-hunt"],
        "image": "https://img.itch.zone/aW1nLzIzODM0NzMzLnBuZw==/315x250%23c/vCij4G.png"
    },



};



var typeData = {
    "steam": {
        gameColour: "#145689",
        gameType: "Steam"
    },
    "google": {
        gameColour: "#A4C639",
        gameType: "Google Play Store"
    },
    "itch": {
        gameColour: "#FA5C5C",
        gameType: "itch.io"
    },
    "ggj": {
        gameColour: "#1FA9E1",
        gameType: "Global Game Jam"
    },
    "default": {
        gameColour: "#870051",
        gameType: ""

    }
}

var typesCompleted = 0;
var undefinedImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";


if (typeof pageType !== 'undefined' || pageType == "portfolio") {

    setTimeout(FetchGames.bind(this, 'gamesHolder', 'any'));
    setTimeout(FetchGames.bind(this, 'googleGamesHolder', 'google'));
    setTimeout(FetchGames.bind(this, 'itchGamesHolder', 'itch'));
    setTimeout(FetchGames.bind(this, 'ggjGamesHolder', 'ggj'));

}

else if (pageType == "game" && typeof game !== 'undefined')


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
        console.log(gameLink);
        if (gameLink.length > 0) {
            console.log(gameLink);
            let gameImage = games[i].image;
            if (gameImage == "") {
                gameImage = undefinedImage;

            }

            if (type == 'any' || games[i].type.includes(type)) {
                let itemTypes = games[i].type;
                let contentTmp = "";
                contentTmp += '<div class="gamecontent"> <div class="thumb_wrapper"><h3 style="padding-top:5px;padding-bottom:5px;max-width:200px;font-size:1em;height: 2em;max-height: 2em;min-height: 1em;">' + games[i].name + '</h3><br>';
                if (itemTypes.length == 1) {
                    contentTmp += '<a href="' + gameLink[0] + '"><img src="' + gameImage + '" class="thumb" srcset="' + gameImage + ' 2x" style="max-height:200px;min-height:200px;height:200px;"></a>';
                }
                else if (type != 'any') {
                    for (let p = 0; p < itemTypes.length; p++) {
                        if (type == itemTypes[p]) {
                            contentTmp += '<a href="' + gameLink[p] + '"><img src="' + gameImage + '" class="thumb" srcset="' + gameImage + ' 2x" style="max-height:200px;min-height:200px;height:200px;"></a>';
                        }
                    }
                }
                else {
                    contentTmp += '<img src="' + gameImage + '" class="thumb" srcset="' + gameImage + ' 2x" style="max-height:200px;min-height:200px;height:200px;">';
                }
                contentTmp += '<div style="display: flex; flex-wrap: wrap; justify-content: center;">Downloads</div><div style="display: flex; flex-wrap: wrap; justify-content: center;">';
                let size = (180 / itemTypes.length);
                for (let p = 0; p < itemTypes.length; p++) {
                    if (type == 'any') {
                        contentTmp += '<div class="folioDownloadButton"><a href="' + gameLink[p] + '" class="button" target="_blank" style="background-color:' + typeData[itemTypes[p]].gameColour + ';max-width: ' + size.toString() + 'px;min-width: ' + size.toString() + 'px;width: ' + size.toString() + 'px;text-wrap: auto;" title="' + typeData[itemTypes[p]].gameType + '"><div class="gameiconbutton"><img src="/img/GamePlatforms/'+itemTypes[p]+ '.png" class="platformicon"></div></a></div>'
                    }
                    else if (type == itemTypes[p]) {
                        contentTmp += '<div class="folioDownloadButton"><a href="' + gameLink[p] + '" class="button" target="_blank" style="background-color:' + typeData[itemTypes[p]].gameColour + ';max-width: 180px;min-width: 180px; width: 180px;text-wrap: auto;" title="' + typeData[itemTypes[p]].gameType + '"><div class="gameiconbutton"><img src="/img/GamePlatforms/'+itemTypes[p]+ '.png" class="platformicon"></div></a></div>'
                    }

                }
                contentTmp += '</div>&lrm;</div><p>&lrm;</div><p>&lrm;';

                content += contentTmp;
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
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    setTimeout(function () { coll[0].click(); }, 400);


}