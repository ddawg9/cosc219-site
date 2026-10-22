console.log("7" + 3);            // Prediction is "73"

console.log("7" - 3);            //Prediction is 4

console.log(7 + 3 + "1");        //Prediction is 11

console.log("7" * "2");          // Prediction is 14

console.log(10 / 3);             //Prediction is 3.33 repeating

console.log(typeof null);        // Prediction is object

console.log(typeof NaN);         // Prediction is Number

console.log(Boolean("false"));   // Prediction is false: this one surpised me because I thought it would be false instead of true

console.log(Boolean("0"));       // Prediction is true

console.log(0 || "fallback");    // Prediction is fallback

console.log(0 ?? "fallback");    // Prediction is 0

console.log("" || "empty");      // Prediction is empty

console.log("10" == 10);         // Prediction is false

console.log("10" === 10);        // Prediction is false

console.log(Number("12abc"));    // Prediction is number

console.log(parseInt("12abc"));  // Prediction is 12

console.log(" hi ".trim());       // Prediction is hi

console.log("cat".includes("a")); //Prediction is true