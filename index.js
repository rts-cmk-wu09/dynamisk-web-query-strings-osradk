const wrapper = document.querySelector("#wrapper");

fetch("data/destinations.json")
  .then((res) => res.json())
  .then((result) => {
    console.log(result.destinations[1]);
    for (let i = 0; i < result.destinations.length; i++) {
      const div = document.createElement("div");

      const img = document.createElement("img");
      const more = document.createElement("a");
      const icon = document.createElement("p");
      // ekstraopgave
      icon.innerHTML = `<i id=heartId${
        result.destinations[i].id
      } data-favorite=${
        localStorage.getItem(`heartId${result.destinations[i].id}`) || false
      } class="fa-solid fa-heart"></i>`;
      more.textContent = "More";
      more.href = `destination.html?id=${result.destinations[i].id}`;
      wrapper.appendChild(div);
      div.appendChild(img);
      div.appendChild(icon);
      div.appendChild(more);
      img.src = result.destinations[i].image;
    }
  });

//ekstraopgave
document.addEventListener("click", (e) => {

  let liked = localStorage.getItem(e.target.id) || "false";
  console.log(liked)
  if (liked == "false") {

    localStorage.setItem(e.target.id, true);
    e.target.dataset.favorite = true;
    e.target.style.color = "red"
    console.log("if")
  } else {

    localStorage.setItem(e.target.id, false);
    e.target.dataset.favorite = false;
    e.target.style.color = "black"
    console.log("else")
  }
});
