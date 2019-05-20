
function setNav(navButton){
    $("#Home").removeClass("active");
    $("#Projects").removeClass("active");
    $("#About").removeClass("active");
    if(navButton === "Home") {
        $("#Home").addClass("active");
    }
    else if(navButton === "Projects") {
        $("#Projects").addClass("active");
    }
    else if(navButton === "About"){
        $("#About").addClass("active");
    }
};

function about() {
    setNav("About");
    let htmlStr = "<h1>About</h1><p>I'm a computer science student at PSU planning to graduate in December of 2019. I play " +
        "guitar and like plants. Here's my majesty palm and spider plant. The spider plant shown is a clone of a larger one I have.</p>";
    htmlStr += "<img src='majesty_palm.jpg' height='40%' width='40%'>";
    htmlStr += "<img src='spider_plant.jpg' height='40%' width='40%'>";
    $("#mainWindow").html(htmlStr);
}

function projects() {
    setNav("Projects");
    let htmlStr = "<h1 id='marker'>Projects</h1>";
    // Robot Project 1
    htmlStr += "<h1 style='font-size: 28pt'>Arduino Robot</h1>";
    htmlStr += "<iframe width='640' height='360' src='https://www.youtube.com/embed/rlwySEcKMw0?rel=0?version=3&autoplay=1&controls=1&&showinfo=0&loop=1​' " +
        "frameborder='1' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    htmlStr += "<p style='font-size: 20pt; text-align: left;'>I built a small robot using an Arduino Uno microprocessor, L293d IC motor driver, and a small dc motor.</p>";

    //This website Project 2
    htmlStr += "<hr style='border-color:black;'>";
    htmlStr += "<h1 style='font-size:28pt'>Portfolio Website</h1>";
    htmlStr += "<div style='font-size:20pt;text-align:left;'><p style='font-size:20pt;text-align:left;display:inline;'>" +
        "I built this portfolio website for my web dev class. You can find the source" +
        "code </p><a style='font-size:20pt;text-align:left;display:inline;' href='https://github.com/Matthew-Hubbard/hubbard_cs465_portfolio'>here</a>" +
        "<p style='font-size:20pt;text-align:left;display:inline'>." +
        " Bootstrap was used in conjunction with html, css, javascript, jquery.</p></div>";

    //Capstone Project 3
    htmlStr += "<hr style='border-color:black;'>";
    htmlStr += "<h1 style='font-size:28pt'>Capstone: OIT Web Apps</h1>";
    htmlStr += "<p style='font-size: 20pt; text-align: left; display:inline'>I'm team lead for my Capstone project at PSU. We're working with OIT to port their old grails applications" +
        " to a more modern framework, Vue.js. The front-end code is available </p><a style='font-size:20pt;text-align:left;' " +
        "href='https://github.com/psu-oit-capstone/emp-front-end'>here</a><p style='font-size: 20pt; text-align: left; display: inline'>.</p>";
    $("#mainWindow").html(htmlStr);
}

function home() {
    setNav("Home");
    $("#mainWindow").html("<h1>Matthew Hubbard's Portfolio</h1><p>Welcome to my portfolio site. Check out my about page and what projects I've done.</p>");
}
