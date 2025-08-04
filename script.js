const openButton = document.getElementById("openModal");
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".closeTab")
	
openButton.onclick = () => {
  modal.style.display = "block";
};

closeButton.onclick = () => {
	modal.style.display = "none";
}

window.onclick = (event) =>{
	if (event.target == modal){
	modal.style.display = "none";		
	}
}