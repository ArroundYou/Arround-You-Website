$(window).resize(function () {
  const width = $("body").width();
  if (width <= 1234) {
    $("#media_div").html("<img src='/pic/345.jpg' class='media'/>");
  } else {
    $("#media_div").html(
      '<video src="./video/Pexels Videos 1654216.mp4" autoplay="true" mute loop class="media"/>'
    );
    $("#media_div img").css("max-height", "100vh");
  }
});
