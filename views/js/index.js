function blurtoggle(){
  const blurtog=document.getElementsByClassName('blurtog');
  for(let i=0;i<blurtog.length;i++){
    blurtog[i].classList.toggle('active')
  }
  const blurpop=document.getElementById('blur-pop');
  blurpop.classList.toggle('active')
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/**
 * When the menu toggle is clicked, toggle the active class on the menu toggle and the sidebar.
 */
const toggleMenu = () => {
  const menuToggle = document.querySelector("#toggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};

function hideSidebar() {
  const menuToggle = document.querySelector("#toggle");
  if (menuToggle.classList.contains("active")) {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
  }
}
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector("#toggle");
document.addEventListener("click", function (event) {
  if (!menuToggle.contains(event.target)) {
    if (!sidebar.contains(event.target)) {
      hideSidebar();
    }
  }
});

// autotype
const typed = new Typed(".type", {
  strings: [
    "",
    "Hi, I am Pritam",
    "Welcome to Pritam Web!",
    "IT'S NICE TO MEET YOU...",
  ],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});
// about autotype
const typedab = new Typed(".typeab", {
  strings: [
    "",
    // "Student",
    "Web Developer",
    "Designer",
    "Freelancer",
    // "IT'S NICE TO MEET YOU...",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// contact
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required...";
    return false;
  }
  if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+.$/)) {
    nameError.innerHTML = "Invalid name given...";
    return false;
  }
  nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}
function validatePhone() {
  const phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone Number is required...";
    return false;
  }
  if (phone.length !== 10) {
    // phoneError.innerHTML = "";
    return false;
  }
  if (!phone.match(/^\d{10}$/)) {
    phoneError.innerHTML = "Only digits allowed...";
    return false;
  }
  phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}
function validateEmail() {
  const email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required...";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Email is invalid...";
    return false;
  }
  emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const req = 40;
  const left = req - message.length;
  if (left > 0) {
    messageError.innerHTML = left + ` more characters required... `;
    return false;
  }
  messageError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = `Please fix error to submit...`;
    setTimeout(() => {
      submitError.style.display = "none";
    }, 2000);
    return false;
  }
}

// image function 
const pwshareimg=document.getElementById('pwshareimg');
const newsimg=document.getElementById('newsimg');
const chatimg=document.getElementById('chatimg');
const qrimg=document.getElementById('qrimg');
const noteimg=document.getElementById('noteimg');
const c2_gif=document.getElementById('c2_gif');
const c3_gif=document.getElementById('c3_gif');
setTimeout(function(){
  pwshareimg.src='https://raw.githubusercontent.com/Pritam0011/demo_test2/master/pritam%20web%202/util/pwshare.webP';
  newsimg.src='https://raw.githubusercontent.com/Pritam0011/demo_test2/master/pritam%20web%202/util/news.webP';
  chatimg.src='https://raw.githubusercontent.com/Pritam0011/demo_test2/master/pritam%20web%202/util/chat.webP';
  qrimg.src='https://raw.githubusercontent.com/Pritam0011/demo_test2/master/pritam%20web%202/util/qrgen.webP';
  noteimg.src='https://raw.githubusercontent.com/Pritam0011/demo_test2/master/pritam%20web%202/util/notes.webP';
},2000);
setTimeout(function(){
  c1_gif.src='https://github.com/Pritam0011/demo_test2/blob/master/pritam%20web%202/util/c1.webM?raw=true';
},3000);
setTimeout(function(){
  c2_gif.src='https://github.com/Pritam0011/demo_test2/blob/master/pritam%20web%202/util/c2.webM?raw=true';
},5000);
setTimeout(function(){
  c3_gif.src='https://github.com/Pritam0011/demo_test2/blob/master/pritam%20web%202/util/c3.webM?raw=true';
},6000);
  