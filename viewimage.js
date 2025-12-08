function ToggleImage(url, opening) {
    if (opening) {
        imageView.src = url;
        imageViewBase.style.visibility = "visible";
    }
    else {
        imageViewBase.style.visibility = "hidden";
    }
}


let carouselImages = document.getElementsByClassName("carouselItem");

if (carouselImages.length > 0) {
    fetch("/imageview.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.innerHTML = document.innerHTML + data;
        });


    for (let i = 0; i < carouselImages.length; i++) {
        carouselImages[i].addEventListener("click", function () {
            ToggleImageOn(carouselImages[i].src, true);
        });
    }

    var imageViewBase = document.getElementsByClassName("imageViewBase")[0];
    var imageView = document.getElementsByClassName("imageView")[0];

    imageViewBase.addEventListener("click", function () {
        ToggleImageOn("", false);
    });
}

