const params = new URLSearchParams(document.location.search);
const id = params.get("id");

// const destinationSection = document.createElement("div");
// destinationSection.classList.add("destinationSection");
// document.querySelector("section").appendChild(destinationSection);

const destinationdetails = document.querySelector(".destinationdetails");
console.log(destinationdetails);

fetch(`./data/${id}.json`)
  .then((response) => response.json())
  .then((data) => {
console.log(data.image);
destinationdetails.innerHTML += ` 

<div class="imgdiv">
<img src="./img/${data.image[0]}" alt="">
<span>
<i id="${data.id}" class="${
    localStorage.getItem(data.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}">
    </i>
</span>
<span class="left"> <i class="fas fa-arrow-left"></i> </span>
<span class="right"> <i class="fas fa-arrow-right"></i> </span>
</div>
<div class="textdiv">

    <h2> ${data.destination} </h2>
    <h1> ${data.title} </h1>
    <p class="title"> ${data.title} </p>
    <p class="desc"> ${data.title} </p>
    <h3>
    Facilities
    </h3>
    <ul>`;

    data.facilities.forEach(facility => {
        document.querySelector("ul").innerHTML += `<li> ${facility} </li>`
    });

    destinationdetails.innerHTML += `    
    </ul>
    </div>

`;
  });



//ekster opgve

// First, define some variables to keep track of the current image index and the total number of images
let currentImageIndex = 0;


// In the fetch callback, update the variables and add a click listener to the left and right arrows
fetch(`./data/${id}.json`)
  .then((response) => response.json())
  .then((data) => {
    // Update the totalImages variable based on the number of images in the data
   let totalImages = data.image.length;

    // Add a click listener to the left arrow
    const leftArrow = document.querySelector(".left");
    leftArrow.addEventListener("click", () => {
      // Decrement the currentImageIndex, wrapping around to the end if necessary
      currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;

      // Update the image and heart icon elements based on the new index
      updateImageAndHeart(data);
    });

    // Add a click listener to the right arrow
    const rightArrow = document.querySelector(".right");
    rightArrow.addEventListener("click", () => {
      // Increment the currentImageIndex, wrapping around to the beginning if necessary
      currentImageIndex = (currentImageIndex + 1) % totalImages;

      // Update the image and heart icon elements based on the new index
      updateImageAndHeart(data);
    });

    // Call updateImageAndHeart to initialize the elements with the first image
    updateImageAndHeart(data);
  });

// Define a function to update the image and heart icon based on the currentImageIndex
function updateImageAndHeart(data) {
  const imageElement = document.querySelector(".imgdiv img");
  const heartIconElement = document.querySelector(".imgdiv i");

  // Update the image src and alt attributes based on the currentImageIndex
  imageElement.src = `./img/${data.image[currentImageIndex]}`;
  //imageElement.alt = `Image ${currentImageIndex + 1} of ${totalImages}`;

  // Update the heart icon class based on whether the user has "liked" the destination
  console.log(localStorage.getItem(data.id));  
  if (localStorage.getItem(data.id)) {
    heartIconElement.classList.remove("fa-regular");
    heartIconElement.classList.add("fa-solid");
  } else {
    heartIconElement.classList.remove("fa-solid");
    heartIconElement.classList.add("fa-regular");
  }
}
