// const destinationlist = document.createElement("div");
// destinationlist.classList.add("destinationlist");
// document.body.appendChild(destinationlist);

const destinationlist = document.querySelector(".destinationlist");

fetch("./data/destinations.json")
  .then((response) => response.json())
  .then((data) => {
    data.destinations.forEach((destination) => {
      destinationlist.innerHTML += ` 
    <figure id="${destination.id}">
    <img src="./img/${destination.image}" alt="">
    <div class="divfigure">
        <span>
           <i id="${destination.id}" class="${
        localStorage.getItem(destination.id)
          ? "fa-solid fa-heart"
          : "fa-regular fa-heart"
      }">
            </i>
        </span>
        <a href="./destination.html?id=${destination.id}">More</a>
    </div>
    </figure>   
  
    `;
    });
  });

