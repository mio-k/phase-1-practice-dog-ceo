console.log('%c HI', 'color: firebrick')

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
    li = element
    ul.append(li)

}

// === challenge 3 ===
