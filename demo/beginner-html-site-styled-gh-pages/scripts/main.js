var  myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Detori.png") {
    myImage.setAttribute("src", "images/Houston.png");
  } else {
    myImage.setAttribute("src", "images/Detori.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName(){
    let myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool," + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
    
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
  