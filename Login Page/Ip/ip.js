const btn = document.querySelector(".btn");
const ipdisplay = document.querySelector(".ip-display");
const locationdisplay = document.querySelector(".location-display");
 
btn.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then((response) => {
      ipdisplay.textContent = `Ip:- ${response.data.ip}`;
      locationdisplay.textContent = `Location:- ${response.data.city},${response.data.region},${response.data.country_name} `;
    });
})


