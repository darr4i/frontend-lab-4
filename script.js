let counter = 0;
let photoPath = "https://vgorode.ua/img/article/3872/6_main-v1577255306.jpg";

function addImg() {
    counter++;
    const newImage = document.createElement("img");
    newImage.setAttribute("id", "cityPhoto_" + counter);
    newImage.setAttribute("src", `${photoPath}`);
    newImage.setAttribute("width", "300");
    newImage.style.display = "block";

    const parent = document.querySelector(".city-photo");
    parent.appendChild(newImage);
}

function deleteImg() {
    const existingImage =
        counter === 0
            ? document.getElementById("cityPhoto")
            : document.getElementById(`cityPhoto_${counter}`);
    if (existingImage.id !== "cityPhoto") {
        const parent = document.querySelector(".city-photo");
        if (parent.contains(existingImage)) {
            parent.removeChild(existingImage);
            counter = Math.max(0, counter - 1);
        } else {
            console.error("Image not found in parent node.");
        }
    } else {
        existingImage.parentNode.removeChild(existingImage);
    }
}

function resizeImg(action) {
    const existingImage =
        counter === 0
            ? document.getElementById("cityPhoto")
            : document.getElementById(`cityPhoto_${counter}`);

    if (existingImage) {
        const currentWidth = existingImage.width;

        if (action === "increase") {
            existingImage.setAttribute("width", currentWidth + 100);
        } else if (action === "decrease" && currentWidth >= 150) {
            existingImage.setAttribute("width", currentWidth - 100);
        }
    }
}

let clickedElements = new Set();
const elementId = "hobby2"; 

function setColorById() {
    const element = document.getElementById(elementId);
    toggleColor(element);
}

function setColorByQuery() {
    const element = document.querySelector(".hobbies li:nth-child(3)"); 
    toggleColor(element);
}

function toggleColor(element) {
    const currentColor = element.style.backgroundColor;

    if (currentColor === "yellow") {
        element.style.backgroundColor = "rgb(237, 227, 215)"; 
        element.style.color = "black";
    } else {
        element.style.backgroundColor = "yellow"; 
        element.style.color = "black";
    }

    clickedElements.add(element);
}

document.getElementById(elementId).addEventListener("click", setColorById);
document.querySelector(".hobbies li:nth-child(3)").addEventListener("click", setColorByQuery);
