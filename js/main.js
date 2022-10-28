const userName = document.getElementById("user-name");
const distanceKm = document.getElementById("km");
const pricePerKm = distanceKm * 0.21;
const ageDiscount = document.getElementById("age-discount");
const totalPrice = pricePerKm;
const minorenne = document.getElementById("minorenne");
const maggiorenne = document.getElementById("maggiorenne");
const over65 = document.getElementById("over65");
const numPriceDiscount20 =totalPrice * 0.8;
const numPriceDiscount40 =totalPrice * 0.6;
const ticketEl = document.querySelector(".price-ticket")

if (ageDiscount === minorenne) {
    ticketEl.innerHTML = "Costo biglietto € " + numPriceDiscount20.toFixed(2);
} else if (ageDiscount === maggiorenne) {
    ticketEl.innerHTML = "Costo biglietto € " + totalPrice.toFixed(2);
} else if (ageDiscount === over65){
    ticketEl.innerHTML = "Costo biglietto € " + numPriceDiscount40.toFixed(2);
    
}


