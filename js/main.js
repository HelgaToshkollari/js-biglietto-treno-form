

const ticketMakerEl = document.getElementById("ticket-maker");

ticketMakerEl.addEventListener ("click", function(){
    
    const userName = document.getElementById("name").value;
    const distanceKm = document.getElementById("km").value;
    const pricePerKm = Math.floor(distanceKm * 0.21);
    const ageDiscount = document.getElementById("age-discount");
    const ageDiscountValue = ageDiscount.value;
    const totalPrice = pricePerKm;
    const numPriceDiscount20 = totalPrice * 0.8;
    const numPriceDiscount40 = totalPrice * 0.6;
    const ticketEl = document.querySelector(".price-ticket");
    
    if (ageDiscountValue === "minorenne") {
        ticketEl.innerHTML ="Costo biglietto € " + numPriceDiscount20.toFixed(2);
    } else if (ageDiscountValue === 'over65') {
        ticketEl.innerHTML = "Costo biglietto € " + numPriceDiscount40.toFixed(2); 
    } else {
        ticketEl.innerHTML ="Costo biglietto € " + totalPrice.toFixed(2);
    }

})


