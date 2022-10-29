

const ticketMakerEl = document.getElementById("ticket-maker");

ticketMakerEl.addEventListener ("click", function(){
    
    const userName = document.getElementById("name").value;
    const distanceKm = document.getElementById("km").value;
    
    const ageDiscount = document.getElementById("age-discount");
    const ageDiscountValue = ageDiscount.value;

    const pricePerKm = Math.floor(distanceKm * 0.21);
    const totalPrice = pricePerKm;
    let discount;
    let discountType;
    
    
    
    if (ageDiscountValue === "minorenne") {
        discount = totalPrice * 0.8;
        discountType = "Sconto Minorenni";
    } else if (ageDiscountValue === "over65") {
        discount = totalPrice * 0.6;
        discountType = "Sconto Over65";
    } else {
        discount = 0 ;
        discountType = "Biglietto Standard";
    }
    
    const finalTicket = totalPrice - discount;
    document.getElementById("passenger").innerHTML = userName;
    document.getElementById("discount").innerHTML = discountType;
    document.querySelector(".price-ticket").innerHTML = finalTicket.toFixed(2) + "€";
    
    const numCarozza= Math.floor(Math.random() * 9) + 1;
    document.getElementById("carozza").innerHTML = numCarozza;

    const codiceCp = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById("codice-cp").innerHTML = codiceCp;


})


