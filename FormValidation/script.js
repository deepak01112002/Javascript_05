let form = document.querySelector("#form");
let arr = [];

document.querySelector("#ExistingUser").addEventListener("click", () => {
   document.querySelector(".Signup").style.display = "none";
   document.querySelector(".login").style.display = "block";
});

document.querySelector("#sinUser").addEventListener("click", () => {
  document.querySelector(".Signup").style.display = "block";
  document.querySelector(".login").style.display = "none";
});

form.addEventListener("submit", (e) => {
    let isValid = true;
    e.preventDefault();
    // refreshing or deleting text from span tag
    document.querySelector("#usernameError").innerText = "";
    document.querySelector("#EmailError").innerText = "";
    document.querySelector("#PasswordError").innerText = "";

    // caught the value of input tag
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
     
    // check the condition for all the values
    if (username === "") {
      document.querySelector("#usernameError").innerText = "Username is Mandatory";
      isValid = false;
    } else if (username.length < 8) {
      document.querySelector("#usernameError").innerText = "Character must be 8 in length";
      isValid = false;
    }

    let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (email === "") {
        document.querySelector("#EmailError").innerText = "Email is Compulsory"; 
        isValid = false;
    }

    if (password.length < 8 || !regex.test(password)) {
        document.querySelector("#PasswordError").innerText = "Password length must be 8 and must include uppercase, lowercase, number, and special character"; 
        isValid = false;
    }

    if (isValid) {
        let obj = {
            username: username,
            email: email,
            password: password
        };
        arr.push(obj);
        alert("Signup Successful!");
    }
});

function add(a) {
  document.querySelector("#Loginform").addEventListener("submit", (e) => {
    e.preventDefault();
    let loginEmail = document.querySelector("#Loginemail").value;
    let loginPass = document.querySelector("#Loginpassword").value;
    let filterdata = a.filter((el) => el.email === loginEmail && el.password === loginPass);

    if (filterdata.length > 0) {
        alert("Login Successful!");
    } else {
        alert("Login Unsuccessful!");
    }
  });
}

// Initialize the login form event listener once
add(arr);
