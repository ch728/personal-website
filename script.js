(function() {
  setModeEventListener();
  setBioEventListener();
  setGalleryPhoto();
  setInterval(() => {
  	setGalleryPhoto();
  }, 2500);
})();


/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", event => {
    event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
  });
}

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach(e => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = "#F2A365";
  off(bioType);
  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach(butt => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("bio")).forEach(e => {
    e.classList.remove("show");
  });
}

/* Gallery photos */

function setGalleryPhoto() {
  let num = Math.floor(Math.random() * 15) +1;
  document.getElementById("galleryPic").src = `./img/gallery/pic${num}.jpg`;	
}


