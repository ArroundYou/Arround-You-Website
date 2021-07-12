

const video = document.getElementById('theVideo');
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

const edtFirstName = document.getElementById('firstname');
const firstNameValidFeedName = document.getElementById('valid_feedback_first');

const edtLastName = document.getElementById('lastname');


const edtPhone = document.getElementById('phone');


const edtEmail = document.getElementById('email');


const edtPassword = document.getElementById('createpassword');

var cl = new cloudinary.Cloudinary({cloud_name: "arround-you", secure: true});


//// Validation of lengths and characters ////

edtFirstName.addEventListener('input',function(){
  if (edtFirstName.value.length >= 3) {
    firstNameValidFeedName.classList.remove('d-none');
      firstNameValidFeedName.classList.add('valid-feedback');

  }else {
      firstNameValidFeedName.classList.remove('valid-feedback');
      firstNameValidFeedName.classList.add('d-none');
  }
});



//// Validation of lengths and characters ////

/// Form Text Field initialization ///

const registerBtn = document.getElementById('registerBtn');
registerBtn.addEventListener('click', event => {
  validateInfo();

});


function validateInfo(){
  if (edtFirstName.value.length == 0 || edtLastName.value.length == 0 || edtPhone.value.length == 0  || edtEmail.value.length == 0 || edtPassword.value.length == 0) {
        alert('Complete all the fields to continue');
  }else {
    let fn = edtFirstName.value;
    let ln = edtLastName.value;
    let ph = edtPhone.value;
    let em  = edtEmail.value;
    let ps = edtPassword.value;

    uploadDataToDataBase(fn,ln,ph,em,ps);
  }
}


function uploadDataToDataBase(fn,ln,ph,em,ps){
  console.log(f);
}
