

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener('DOMContentLoaded', extractImageUrls)
function extractImageUrls(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {  
        for (element of data.message) {
            displayImage(element)
        }
    //    console.log(dogs)  
       })
}

function displayImage(dog) {
    let placeHolder = document.getElementById('dog-image-container')
    let image = document.createElement('img')
    image.src=dog
   placeHolder.appendChild(image)

}
// challenge 2 ====
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener('DOMContentLoaded', displayAll)
function displayAll(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res =>res.json())
    .then(data=>{
        for (element in data.message){
            // console.log(element)
            showAllBreeds(element)
        }
    })
}
function showAllBreeds(element){
    let ul = document.getElementById('dog-breeds');
    let li = document.createElement('li')
    // the line immediately below is for challenge 3
    li.addEventListener('click', changeColor)
    li.innerText = element
    ul.append(li)

}

// === challenge 3 ===
document.addEventListener('DOMContentLoaded', extractDogs)
function extractDogs(){
    let ul = document.getElementById("dog-breeds");
    // let dog = ul.getElementsByTagName("li");
    // console.log(li)
    // for (item of li){
    //     console.log(item.outerHTML)
    //     item.addEventListener("click", changeColor)
    // }
}
function changeColor(event){
    event.target.style.color = 'pink'
}

// === challenge 4 ===
document.addEventListener('DOMContentLoaded', dogArray)
function dogArray(){
    let allDogs =[];
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res =>res.json())
    .then((data) => {
            for (item in data.message) {
                allDogs.push(item);
            }
        document.getElementById('breed-dropdown').addEventListener('change', () => filteredDogs(allDogs)) 
        })
    }
function filteredDogs(allDogs){
    let filtered = allDogs.filter(dropDownValue);
    console.log(filtered) 
    let ul = document.getElementById('dog-breeds');
    ul.innerHTML = ''
    for (element of filtered){
        let li = document.createElement('li')
        li.innerText = element
        ul.append(li)
    }
}
function dropDownValue(dog){
    let alphabet = document.getElementById('breed-dropdown').value
    return dog.charAt(0) === alphabet
}
