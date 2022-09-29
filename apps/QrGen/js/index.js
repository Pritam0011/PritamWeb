// Animation
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
// main
const qrfrm = document.getElementById("qrfrm");
const qrCon = document.getElementById("qr-con");
const qrimg = document.getElementById("qrimg");
const qrinp = document.getElementById("qrinp");
const getqr = document.getElementById("getqr");
const renqr = (url) => {
  if (!url) return;
  getqr.innerHTML = `<span></span>
    <span></span>
    <span></span>
    <span></span><b>Fetching text...</b>`;
  qrimg.src = url;
  qrCon.classList.add("show");

  qrimg.addEventListener("load", (e) => {
    getqr.innerHTML = `<span></span>
    <span></span>
    <span></span>
    <span></span><b>QR Code</b>`;
  });
};
qrfrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fdata = new FormData(qrfrm);
  const txt = fdata.get("qrtxt");
  console.log(txt);
  const qrurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`;
  renqr(qrurl);
});
qrinp.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (!qrinp.value.trim()) {
    qrCon.classList.remove("show");
    getqr.innerHTML = `<span></span>
    <span></span>
    <span></span>
    <span></span><b>Get QR</b>`;
  }
});
