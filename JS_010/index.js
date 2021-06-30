
const adultChecker = function (age) {
    console.log("entering adultChecker..");
    console.log("input:", age);
    let resultAdultChecker = false

    if (age >= 18) {
        resultAdultChecker = true
    };
    console.log(resultAdultChecker);
    return resultAdultChecker;
};
// console.log(adultChecker(17));
// adultChecker()

const howToReply = function (age) {
    console.log("entering howToReply..");
    console.log(age);
    let answerChecker = adultChecker(age)
    console.log(answerChecker)

    if (answerChecker) {
        return "Hello there"
    }
    else { return "hello kiddo" }
};
console.log(howToReply(18))
// ///////////////////////////////////////////////////////////////////////////////////////////////
//deel 2
// BEREKEN BTW PRIJS
// vaste prijs
// btw 
// returns vaste prijs met btw
// bereken de btw met apparte functie

// // berekenen factor voor btw
// btw  number /100 + 1 
const CalculateBtw = function (price, btw) {
    btwMultiplyFactor = (btw / 100);
    btwPrice = btwMultiplyFactor * price
    console.log(btwMultiplyFactor)
    return btwPrice
};
console.log(CalculateBtw(20, 21));

const calculatePriceInclBTW = function (price, btw) {
    console.log(price)
    const priceInclBTW = price + CalculateBtw(price, btw)
    return priceInclBTW
};
console.log(calculatePriceInclBTW(20, 21));

// bereken van de prijs inclu btw en btw persentage 
// de prijs zonder btw en het btwbedrag


const calculateBTWAmount = function (priceInclu, btw) {
    const btwFactor = (btw / 100) + 1;
    // console.log(btwFactor);
    const btwAmount = priceInclu - (priceInclu / btwFactor);
    // console.log(btwAmount);
    return btwAmount;
}


const calculateAmountAndBTWSerparate = function (priceInclBTW, btw) {
    const priceExcluBTW = priceInclBTW - calculateBTWAmount(priceInclBTW, btw)
    const btwAmount = calculateBTWAmount(priceInclBTW, btw);
    // console.log(priceExcluBTW);
    // console.log(btwAmount);
    // return [priceExcluBTW, btwAmount]
    return [priceExcluBTW, btwAmount];
};
console.log(calculateAmountAndBTWSerparate(24.2, 21))

