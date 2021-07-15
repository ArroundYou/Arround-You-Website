window.onload = function() {
  var firebaseConfig = {
   apiKey: "AIzaSyDq60VFFH_wy6ExvdenV0U1pPqeZWVyKeQ",
   authDomain: "arroundyou-db9f5.firebaseapp.com",
   databaseURL: "https://arroundyou-db9f5.firebaseio.com",
   projectId: "arroundyou-db9f5",
   storageBucket: "arroundyou-db9f5.appspot.com",
   messagingSenderId: "215463937318",
   appId: "1:215463937318:web:724528c8b969ccfafdede7",
   measurementId: "G-Y5LKN3C6MD"
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


var phoneRepo = "";



//// Validation of lengths and characters ////


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

    let randomNumber = Math.floor(100000+Math.random() * 900000);
    phoneRepo = ph;
    sendOtpToUser(ph,fn,ln,em,ps,randomNumber);
    showOtpModal(ph,fn,ln,em,ps,randomNumber);

    // uploadDataToDataBase(fn,ln,ph,em,ps);
    // console.log(httpGet());

  }
}

// $( document ).ready(function() {
//       $('#exampleModal').modal('show');
//
// });

function sendOtpToUser(ph,fn,ln,em,ps,randomNumber){
  let headers = new Headers();

   headers.append('Content-Type', 'application/json');
   headers.append('Accept', 'application/json');
   headers.append('Origin','http://localhost:8080');
  fetch("https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=ubD43nCqMUOXfeLKYV4oLQ&senderid=EDEZIP&channel=2&DCS=0&flashsms=0&number=91"+ph+"&text=Hello,%20Hope%20You%20are%20doing%20well%20Your%20OTP%20is%20"+randomNumber+"%20Ezip%20Info%20Tech%20Pvt%20Ltd&route=1\n",
      {
        mode: 'no-cors',
        method: 'GET',
        headers: headers
      })
  .then(function (response) {

    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.ip);

  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}

function OTPInput() {
  const inputs = document.querySelectorAll('#otp > *[id]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function(event) {
      if (event.key === "Backspace") {
        inputs[i].value = '';
        if (i !== 0)
          inputs[i - 1].focus();
      } else {
        if (i === inputs.length - 1 && inputs[i].value !== '') {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1)
            inputs[i + 1].focus();
          event.preventDefault();
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[i].value = String.fromCharCode(event.keyCode);
          if (i !== inputs.length - 1)
            inputs[i + 1].focus();
          event.preventDefault();
        }
      }
    });
  }
}

function showPleaseWait() {
    if (document.querySelector("#pleaseWaitDialog") == null) {
        var modalLoading = '<div class="modal" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false" role="dialog">\
            <div class="modal-dialog">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <h4 class="modal-title">Creating account...</h4>\
                    </div>\
                    <div class="modal-body">\
                        <div class="progress">\
                          <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"\
                          aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%; height: 40px">\
                          </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>';
        $(document.body).append(modalLoading);
    }

    $("#pleaseWaitDialog").modal("show");
}


function hidePleaseWait() {
    $("#pleaseWaitDialog").modal("hide");
}

function showOtpModal(ph,fn,ln,em,ps,randomNumber){
  $('#exampleModal').modal('show');
  OTPInput();

  const inputs = document.querySelectorAll('#otp > *[id]');
  var values ="";
  const verifyOtpBtn = document.getElementById('verify_otpBtn');

  verifyOtpBtn.addEventListener('click',event => {
    console.log("Verify clicked");
    for (let i = 0; i < inputs.length; i++) {
      values += inputs[i].value;
      console.log(inputs[i].value);
    }

    if (values == randomNumber) {
      showPleaseWait();
      uploadDataToDataBase(fn,ln,ph,em,ps);
    }else {
      alert("Incorrect otp");
      console.log('Incorrect otp');
    }
  });
}



function uploadDataToDataBase(fn,ln,ph,em,ps){
  const ref = firebase.database().ref('/userData/'+ph);
  const userObject = {
    firstName : fn,
    lastName : ln,
    phone : ph,
    email : em,
    password : ps
  } ;

  ref.set(userObject, function(error) { //NOTE: this completion has a bug, I need to fix.
    if (error) {
      console.log("Data could not be saved." + error);
    } else {
        hidePleaseWait();
      console.log("Data saved successfully.");
    }
});



}
