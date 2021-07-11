// $(window).resize(function () {
//   const width = $("body").width();
//   if (width <= 1234) {
//     $("#media_div").html("<img src='/pics/345.jpg' class='media'/>");
//   } else {
//     $("#media_div").html(
//       '<video src="./video/Pexels Videos 1654216.mp4"  mute class="media"/>'
//     );
//     $("#media_div img").css("max-height", "100vh");
//   }
// });


var video = document.getElementById('theVideo');
video.play();
video.addEventListener("timeupdate", function(){
    if(this.currentTime >= 4.5) {
        this.currentTime = 0;
        this.play();
    }
});


$(window).resize(function() {
  video.load();
  video.play();
});
