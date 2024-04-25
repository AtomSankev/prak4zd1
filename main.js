let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'firefox2.png');
        myHeading.innerHTML = 'NATO is cool, ' + localStorage.getItem('name');
        document.body.style.backgroundColor = '#3498db'; // Змінюємо колір на синій
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
        myHeading.innerHTML = 'Mozilla is cool, ' + localStorage.getItem('name');
        document.body.style.backgroundColor = '#FF9500'; // Повертаємо колір назад
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}








  
