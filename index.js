window.onload = function() {
  var firebaseConfig = {
      apiKey: "AIzaSyDciI0VF3KJ6hSy6CDVIZ4TemwsE5gWKOc",
      authDomain: "tstr-c9aa8.firebaseapp.com",
      databaseURL: "https://tstr-c9aa8-default-rtdb.firebaseio.com",
      projectId: "tstr-c9aa8",
      storageBucket: "tstr-c9aa8.appspot.com",
      messagingSenderId: "620871703795",

      appId: "1:620871703795:web:490f9b4ccd83c367b5ab86",
      measurementId: "G-63SM8SK8T4"
  };

  firebase.initializeApp(firebaseConfig);
}

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
    //
    // uploadDataToDataBase(fn,ln,ph,em,ps);
    console.log(httpGet());
  }
}
function httpGet()
{

  const xmlHttp = new XMLHttpRequest();
  const theUrl = "https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=ubD43nCqMUOXfeLKYV4oLQ&senderid=EDEZIP&channel=2&DCS=0&flashsms=0&number=919954810227&text=Hello,%20Hope%20You%20are%20doing%20well%20Your%20OTP%20is%20514131%20Ezip%20Info%20Tech%20Pvt%20Ltd&route=1\n";
   xmlHttp.onreadystatechange = function() {
       if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
           callback(xmlHttp.responseText);
   }
   xmlHttp.open("POST", theUrl, true); // true for asynchronous
   xmlHttp.send(null);


}

function uploadDataToDataBase(fn,ln,ph,em,ps){

  // $('#exampleModal').modal('show');

}
