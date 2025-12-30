var siteRedirects = {
    "/Games/EndlessJumper/TermsOfService": "/Games/EndlessJumper/PrivacyPolicy/",
    "/EndlessJumper/TermsOfService": "/Games/EndlessJumper/PrivacyPolicy/",
    "/EndlessJumper/PrivacyPolicy": "/Games/EndlessJumper/PrivacyPolicy/",
    "/Games/CatCarnival/Credits": "/Games/CatCarnival"
}



var siteRedirectsKeys = Object.keys(siteRedirects);

var currentUrl = window.location.href.replace("https://jaydenholliss.com.au", "");

if (siteRedirectsKeys.includes(currentUrl)) {
    window.location.replace(siteRedirects[currentUrl]);
}

else if (currentUrl[currentUrl.length-1] == "/") {
    currentUrl = currentUrl.substring(0, currentUrl.length-1)
    if (siteRedirectsKeys.contains(currentUrl)) {
        window.location.replace("https://jaydenholliss.com.au"+siteRedirects[currentUrl]);
    }
}

