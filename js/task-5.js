// Task 5
const checkForSpam = (message) => {
    const checkSale = message.toLowerCase().includes("sale");
    const checkSpam = message.toLowerCase().includes("spam");

    if (checkSpam || checkSale) {
        console.log(true);
    } else {
        console.log(false);
    }

    return message;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
