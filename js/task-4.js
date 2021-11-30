// Task 4
const formatString = (string) => {
    let formattedString = string.slice(0, 40);
    formattedString += "...";

    for (let i = 0; i < string.length; i++) {
        if (string.length <= 40) {
            return string;
        }
    }

    return formattedString;
};


console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
    formatString(
        "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
);
