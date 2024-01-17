
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "Description");
document.body.appendChild(newImg);

const newSection = document.createElement("section");
const newHeader = document.createElement("h2");
newHeader.innerText = "CSE 121b";
newSection.appendChild(newHeader);
const newPara = document.createElement("p");
newSection.innerText = "Welcome to Javascript Language.";
document.body.appendChild(newSection);
