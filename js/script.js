const logOutButton = document.querySelector(".log-out-button");
const modalBody = document.querySelector(".modal-body");
const modalButton = document.querySelector(".modal-button");
let isModalOpen = false;

const modalObj = {
  elem: document.querySelector(".modal"),
  open() {
    this.elem.style.zIndex = "10";
    modalBody.classList.add("scale-in");
  },
  close() {
    this.elem.style.zIndex = "-1";
    modalBody.classList.remove("scale-in");
  },
};

logOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isModalOpen) {
    modalObj.open();
    isModalOpen = true;
  }
});

modalButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (isModalOpen) {
    modalObj.close();
    isModalOpen = false;
  }
});
