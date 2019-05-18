
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
    //alert("You clicked About!");
    // $("#Home").removeClass("active");
    // $("#Projects").removeClass("active");
    // $("#About").addClass("active");
    setNav("About");
    let about_str = "I'm a computer science student at PSU planning to graduate in December of 2019.";
    $("#main_window").html("<h1>About</h1><p>" + about_str + "</p>");
}

function projects() {
    setNav("Projects");
    let about_str = "projects here";
    $("#main_window").html("<h1>Projects</h1><p>" + about_str + "</p>");
}

function home() {
    setNav("Home");
    $("#main_window").html("<h1>Matthew Hubbard</h1>" +
        "<img src='email_profile_pic.jpg' alt='Matthew R. Hubbard' style='width:40%;height:40%;'>");
}
