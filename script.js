var openModalBtn = document.querySelector(".open-modal");
var closeModalBtn = document.querySelector(".close");
var modal = document.querySelector(".modal");
var modalBody = document.querySelector(".modal-body");
var modalText = document.querySelector(".modal-text");
var isClosed = true;

if (isClosed === true) {
  modal.style.display = "none";
}

openModalBtn.onclick = () => {
  setTimeout(() => {
    modal.style.display = "block";
    modalBody.classList.remove("zoom-in");
    modalBody.classList.add("zoom-out");
  }, 200);
};

closeModalBtn.onclick = () => {
  modalBody.classList.remove("zoom-out");
  modalBody.classList.add("zoom-in");
  modal.style.display = "none";
};
