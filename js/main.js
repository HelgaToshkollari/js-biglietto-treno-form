

const ticketMakerEl = document.getElementById("ticket-maker");

ticketMakerEl.addEventListener ("click", function(){
    
    const userName = document.getElementById("user-name");
    const distanceKm = document.getElementById("km");
    const pricePerKm = distanceKm * 0.21;
    const ageDiscount = document.getElementById("age-discount");
    const ageDiscountValue = ageDiscount.value;
    const totalPrice = pricePerKm;
    const numPriceDiscount20 =totalPrice * 0.8;
    const numPriceDiscount40 =totalPrice * 0.6;
    const ticketEl = document.querySelector(".price-ticket");
    
    if (ageDiscountValue === "minorenne") {
        ticketEl.innerHTML = userName + "Costo biglietto € " + numPriceDiscount20.toFixed(2);
    } else if (ageDiscountValue === 'over65') {
        ticketEl.innerHTML = userName + "Costo biglietto € " + numPriceDiscount40.toFixed(2); 
    } else {
        ticketEl.innerHTML = userName + "Costo biglietto € " + totalPrice.toFixed(2);
    }

})


