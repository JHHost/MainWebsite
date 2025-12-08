function ToggleImage(url, opening) {

    if (typeof imageViewBase === "imageViewBase" || typeof imageView === "imageViewBase") {
        SetVariables();
    }

    if (opening) {
        imageView.setAttribute("src", url);
        imageViewBase.style.visibility = "visible";
    }
    else {
        imageViewBase.style.visibility = "hidden";
    }
}


carouselImages = document.getElementsByClassName("carouselItem");

if (carouselImages.length > 0) {
    fetch("/viewimage.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.body.innerHTML = document.body.innerHTML + data;

            for (let i = 0; i < carouselImages.length; i++) {
                carouselImages[i].addEventListener("click", function () {
                    ToggleImage(carouselImages[i].src, true);
                });
            }

            SetVariables();

            imageViewBase.addEventListener("click", function () {
                ToggleImage("", false);
            });

        });



}

function SetVariables() {
    imageViewBase = document.getElementsByClassName("imageViewBase")[0];
    imageView = document.getElementById("imageView");
    return;
}