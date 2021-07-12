

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

/// Form Text Field initialization ///

var edtFirstName = document.getElementById('firstname');
var edtLastName = document.getElementById('lastname');
var edtPhone = document.getElementById('phone');
var edtEmail = document.getElementById('email');
var edtPassword = document.getElementById('createpassword');



/// Form Text Field initialization ///

var registerBtn = document.getElementById('registerBtn');
registerBtn.onClick = function(){
  validateInfo();
}

function validateInfo(){
  if (edtFirstName.text == "" || edtLastName.text== "" || edtPhone == "" || edtEmail == "" || edtPassword == "") {

  }
}
