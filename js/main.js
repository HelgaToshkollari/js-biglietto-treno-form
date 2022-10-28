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

if (ageDiscount === minorenne) {
    console.log("Il passegero ha uno sconto del 20% sul biglietto");
    console.log(" Costo biglietto € " + numPriceDiscount20.toFixed(2));
} else if (ageDiscount === maggiorenne) {
    console.log(" Costo biglietto € " + totalPrice.toFixed(2));

} else if (ageDiscount === over65){
    console.log("Il passeggero ha uno sconto del 40% sul biglietto");
    console.log(" Costo biglietto € " + numPriceDiscount40.toFixed(2));
}


