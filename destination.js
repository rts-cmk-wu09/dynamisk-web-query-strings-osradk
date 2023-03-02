//create en url object
const des_wrapper = document.querySelector("#des_wrapper");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`data/${id}.json`)
  .then((response) => response.json())
  .then((destinationData) => {
    console.log(destinationData.title);

    const imgdiv = document.createElement("div");
    const textdiv = document.createElement("div");
    const img = document.createElement("img");
    const icon = document.createElement("p");
    // ekstra opgave
    icon.innerHTML = `<i id=heartId${destinationData.id} data-favorite=${localStorage.getItem(`heartId${destinationData.id}`)||false} class="fa-solid fa-heart"></i>`;

    const favorit = document.createElement("p");
    favorit.classList.add("favorit");
    favorit.textContent = "Favorit";
    
    img.src = "img/" + destinationData.image;
    console.log(img.src);
    const destination = document.createElement("h1");
    destination.textContent = destinationData.destination;
    console.log(destinationData.destination);
    const title = document.createElement("h2");
    const subtitle = document.createElement("p");
    subtitle.textContent = destinationData.subtitle;
    title.textContent = destinationData.title;
    const text = document.createElement("p");
    text.textContent = destinationData.text;
    const facilities = document.createElement("ul");
    facilities.textContent = "Facilities";
    destinationData.facilities.forEach((facility) => {
      const li = document.createElement("li");
      li.textContent = facility;
      facilities.appendChild(li);
    });
    textdiv.appendChild(destination);
    textdiv.appendChild(title);
    textdiv.appendChild(subtitle);
    textdiv.appendChild(text);
    textdiv.appendChild(facilities);
    imgdiv.appendChild(img);
    imgdiv.appendChild(icon);
    imgdiv.appendChild(favorit);
    des_wrapper.appendChild(imgdiv);
    des_wrapper.appendChild(textdiv);
  })
  .catch((error) => console.log(error));
