
const divIndex = document.querySelector(".destinationlist");
console.log("destinationlist:" + divIndex);

if (divIndex != null) {
  divIndex.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-heart")) {
      let destinationId = e.target.closest("figure").attributes.id.value;
      SaveToLocalStorage(e, destinationId);
    }
  });
}

const divDestionation = document.querySelector(".destinationdetails");
console.log("destinationSection: " + divDestionation);

if (divDestionation != null) {
  console.log("virker!");
  divDestionation.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-heart")) {
      let destinationId = e.target.id;
      SaveToLocalStorage(e, destinationId);     
    }
  });
}

function SaveToLocalStorage(e, id) {
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, id);
    e.target.classList.add("fa-solid");
  } else {
    localStorage.removeItem(id);
    e.target.classList.remove("fa-solid");
    e.target.classList.add("fa-regular");
  }
}