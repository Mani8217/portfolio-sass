/*function myFunction() {
    var x = document.querySelector(".header-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  */

  $(document).ready(function(){
    $("#icon").click(function(){
      $("#header-nav").slideToggle("slow")
    })
  })