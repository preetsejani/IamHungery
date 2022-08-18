document.getElementById("loginForm").addEventListener("login",(event)=>{
    event.preventDefault();
  })

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      location.replace("menu.html")
    }
  })

  function login()
  {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  }