function menu() {
    let element = document.getElementById("list");
    if (element.style.display == "none") {
        element.style.display = "block";
        element.style.transform = "translate(0)";
    } else {
        element.style.display = "none";
         
    }
}

function listBtn() {
    let element = document.getElementById("list");
    if (element.style.display == "block") {
        element.style.display = "none";
        element.style.transform = "translate(0)";
    } else {
        element.style.display = "block";
    }
}

function main() {
    let element = document.getElementById("list");
    if (element.style.display == "block") {
        element.style.display = "none";
        element.style.transform = "translate(0)";
    } else {
        element.style.display = "none";
    }
}

function back() {
    let element = document.getElementById("list");
    if (element.style.display == "block") {
        element.style.display = "none";
        element.style.transform = "translate(0)";
        alert("Back to the Main");
    } else {
        element.style.display = "block";
    }
}
