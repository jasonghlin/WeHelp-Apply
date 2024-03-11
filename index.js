let slider = document.querySelector(".slider");
let sliderSwitch = false;

slider.addEventListener("click", function() {
    if(!sliderSwitch) {
      document.querySelector("body").style.backgroundColor = "#283149";
      sliderSwitch = true;
      $(".box").css("outlineColor", "#32a1ce");
      $("p").css("color", "#DBEDF3");
      $(".question").css("color", "#DBEDF3");
      $("hr").css("color", "white");

    } else if (sliderSwitch) {
      document.querySelector("body").style.backgroundColor = "white";
      sliderSwitch = false;
      $(".box").css("outlineColor", "gray");
      $("p").css("color", "black");
      $(".question").css("color", "black");
      $("hr").css("color", "grey");
    }    
})
