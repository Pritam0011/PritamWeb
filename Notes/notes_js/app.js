window.addEventListener("load", () => {
  show();
});
let an = document.getElementById("an");
let tn = document.getElementById("tn");
let ttn = document.getElementById("ttn");
ttn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("tn").focus();
  }
});
tn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fun();
  }
});

//
// For Adding NOtes
//
an.addEventListener("click", fun);
function fun() {
  let ti = localStorage.getItem("ti");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  }
  if (ti == null) {
    tiObj = [];
  } else {
    tiObj = JSON.parse(ti);
    noteObj = JSON.parse(notes);
  }
  tiObj.push(ttn.value);
  noteObj.push(tn.value);
  localStorage.setItem("ti", JSON.stringify(tiObj));
  localStorage.setItem("notes", JSON.stringify(noteObj));
  ttn.value = "";
  tn.value = "";
  document.getElementById("ttn").focus();
  show();
}

//
// For Showing Notes
//
let show = () => {
  let ti = localStorage.getItem("ti");
  let notes = localStorage.getItem("notes");
  if ((notes || ti) == null) {
    tiObj = [];
    noteObj = [];
  } else {
    tiObj = JSON.parse(ti);
    noteObj = JSON.parse(notes);
  }
  let html1 = "";
  let html2 = "";

  noteObj.forEach(function (element, index) {
    tiObj.forEach(function () {
      html1 = tiObj[index];
    });
    html2 += `
        <div class="card cardcc row my-2 mx-2" style="width: 18rem">
        <div class="card-body justify-content-center">
          <h5 class="card-title"><p>${html1}</p></h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-outline-danger" id='${index}' onclick='delnot(this.id)'>DELETE</button>
        </div>
        </div>
        `;
  });
  let noteEle = document.getElementById("notess");
  if (noteObj.length != 0) {
    noteEle.innerHTML = html2;
  } else {
    // noteEle.innerHTML = `<h3>Nothing to show</h3>`;
  }
};

//
//For delete operation
//
function delnot(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  let c = confirm("Sure?");
  if (c == true) {
    tiObj.splice(index, 1);
    noteObj.splice(index, 1);
    localStorage.setItem("ti", JSON.stringify(tiObj));
    localStorage.setItem("notes", JSON.stringify(noteObj));
    show();
    window.location.reload();
  }
}

//
//For search operation
//
let search = document.getElementById("seTxt");
search.addEventListener("input", function () {
  let val = search.value.toLowerCase();
  let card = document.getElementsByClassName("cardcc");
  Array.from(card).forEach(function (element) {
    let cardTxt1 = element.getElementsByTagName("p")[0].innerText;
    let cardTxt2 = element.getElementsByTagName("p")[1].innerText;
    if (cardTxt1.includes(val) || cardTxt2.includes(val)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// Animation
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
