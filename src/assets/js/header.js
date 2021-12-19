
function name(){

    $(document).ready(function() {
document.getElementById("hamburger").onclick = function () {
    this.classList.toggle("is-active");
  };
  
  const button = document.querySelector("#hamburger");
  
  button.addEventListener("click", (e) => {
    document.querySelector(".show-nav").classList.toggle("header__nav");
  });
});
}