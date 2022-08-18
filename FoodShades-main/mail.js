
const firebaseConfig = {
    //   copy your firebase config informations
        apiKey: "AIzaSyDfCBOBWTc2CNtskFDci5RhaOnxYygBhgs",
        authDomain: "contactform-e2662.firebaseapp.com",
        databaseURL: "https://contactform-e2662-default-rtdb.firebaseio.com",
        projectId: "contactform-e2662",
        storageBucket: "contactform-e2662.appspot.com",
        messagingSenderId: "719168726767",
        appId: "1:719168726767:web:086a41bd16da877b2e9d1a"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var firstname = getElementVal("firstname");
    var lastname = getElementVal("lastname");
    var email = getElementVal("email");
    var password = getElementVal("password");
  
    saveMessages(firstname, lastname, email, password);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (firstname, lastname, email, password) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  