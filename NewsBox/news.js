let cardCon = document.getElementById("cardCon");

let xhr = new XMLHttpRequest();
xhr.open("GET", `news.json`, "true");
//You have to enter News api URL for getting latest news

// const k = `apiKey= `;
// URL = `https://newsapi.org/v2/top-headlines?country=in&${k}`;
// xhr.open("GET", `${URL}`, "true");

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText).articles;
    let acard = "";
    let card0 = "";
    let card = "";
    for (key in json) {
      if (key == 0) {
        card0 = `  <div class="accordion-item">
        <h2 class="accordion-header" id="heading${key}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${key}" aria-expanded="true" aria-controls="collapse${key}">
          ${json[key].title}
          </button>
        </h2>
        <div id="collapse${key}" class="accordion-collapse collapse show" aria-labelledby="heading${key}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          ${json[key].description}
      <a href='${json[key].url}' target='_blank' style="text-decoration: none;">Read more...</a>

          </div>
        </div>
      </div>
    `;
        acard = acard + card0;
      } else {
        card = ` <div class="accordion-item">
            <h2 class="accordion-header" id="heading${key}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${key}" aria-expanded="false" aria-controls="collapseTwo">
              ${json[key].title}
              </button>
            </h2>
            <div id="collapse${key}" class="accordion-collapse collapse" aria-labelledby="heading${key}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
            ${json[key].description}
      <a href='${json[key].url}' target='_blank' style="text-decoration: none;">Read more...</a>

              </div>
            </div>
          </div>
        `;
      }
      acard += card;
    }
    cardCon.innerHTML = acard;
  } else {
    console.error("Something Went Wrong Please Try After Sometime Later!!!");
  }
};
xhr.send();

// Animation
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
