

// ===== Form Submit =====
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = password.value;

  if(email && pass){
    alert("Login successful (demo)");
    console.log(email, pass);
  }
});

const toggle = document.getElementById("toggle");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
  password.type =
    password.type === "password" ? "text" : "password";
});
