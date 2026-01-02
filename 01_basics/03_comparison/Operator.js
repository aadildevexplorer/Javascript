// Operators are special symbols that tell JavaScript to
//  perform a specific operation on one or more operands (values or variables).

// | Operator Type  | Symbol / Example      | Operator Name            | Definition (English)                                                 |                                |                                            |
// | -------------- | --------------------- | ------------------------ | -------------------------------------------------------------------- | ------------------------------ | ------------------------------------------ |
// | **Arithmetic** | `+`                   | Addition                 | Arithmetic operators are used to perform mathematical calculations.                                                  |                                |                                            |
// |                | `-`                   | Subtraction              | Subtracts right operand from left.                                   |                                |                                            |
// |                | `*`                   | Multiplication           | Multiplies two numbers.                                              |                                |                                            |
// |                | `/`                   | Division                 | Divides left operand by right.                                       |                                |                                            |
// |                | `%`                   | Modulus                  | Returns the remainder after division.                                |                                |                                            |
// |                | `**`                  | Exponentiation           | Raises a number to the power of another.                             |                                |                                            |
// |                | `++`                  | Increment                | Increases value by 1.                                                |                                |                                            |
// |                | `--`                  | Decrement                | Decreases value by 1.                                                |                                |                                            |
// | **Assignment** | `=`                   | Assignment               | Assignment operators are used to assign values to variables.                                       |                                |                                            |
// |                | `+=`                  | Add and Assign           | Adds and assigns the result.                                         |                                |                                            |
// |                | `-=`                  | Subtract and Assign      | Subtracts and assigns the result.                                    |                                |                                            |
// |                | `*=`                  | Multiply and Assign      | Multiplies and assigns the result.                                   |                                |                                            |
// |                | `/=`                  | Divide and Assign        | Divides and assigns the result.                                      |                                |                                            |
// |                | `%=`                  | Modulus and Assign       | Stores the remainder in the variable.                                |                                |                                            |
// | **Comparison** | `>`                   | Greater Than             | Comparison operators are used to compare two values and return a Boolean result (true or false).                                |                                |                                            |
// |                | `<`                   | Less Than                | Checks if left is smaller than right.                                |                                |                                            |
// |                | `>=`                  | Greater Than or Equal To | Checks if left is greater or equal to right.                         |                                |                                            |
// |                | `<=`                  | Less Than or Equal To    | Checks if left is smaller or equal to right.                         |                                |                                            |
// |                | `==`                  | Loose Equality           | Compares values after type conversion.                               |                                |                                            |
// |                | `===`                 | Strict Equality          | Compares both value and type.                                        |                                |                                            |
// |                | `!=`                  | Loose Not Equal          | Checks if values are not equal (after conversion).                   |                                |                                            |
// |                | `!==`                 | Strict Not Equal         | Checks if value or type are not equal.                               |                                |                                            |
// | **Logical**    | `&&`                  | Logical AND              | Logical operators are used to combine multiple conditions and return Boolean results.                            |                                |                                            |
// |                | `                     |                          | `                                                                    | Logical OR                     | Returns true if any one condition is true. |
// |                | `!`                   | Logical NOT              | Reverses the boolean result.                                         |                                |                                            |
// | **Bitwise**    | `&`                   | AND                      | Bitwise operators perform operations on binary (bit-level) representations of numbers.                                      |                                |                                            |
// |                | `                     | `                        | OR                                                                   | Performs bitwise OR operation. |                                            |
// |                | `^`                   | XOR                      | Performs bitwise XOR (exclusive OR).                                 |                                |                                            |
// |                | `~`                   | NOT                      | Inverts all bits (1→0, 0→1).                                         |                                |                                            |
// |                | `<<`                  | Left Shift               | Shifts bits to the left.                                             |                                |                                            |
// |                | `>>`                  | Right Shift              | Shifts bits to the right.                                            |                                |                                            |
// |                | `>>>`                 | Unsigned Right Shift     | Shifts bits right and fills with zeros.                              |                                |                                            |
// | **Ternary**    | `? :`                 | Conditional Operator     | The ternary operator is a shorthand way of writing an if-else statement. |                                |                                            |
// | **String**     | `+`                   | String Concatenation     | The + operator can also be used to concatenate (join) strings.                                         |                                |                                            |
// | **Comma**      | `,`                   | Comma Operator           | Evaluates multiple expressions and returns the value of the last one.             |                                |                                            |
// | **Unary**      | `+`                   | Unary Plus               | Unary operators work with only one operand (single value).                                        |                                |                                            |
// |                | `-`                   | Unary Negation           | Converts operand to number and negates it.                           |                                |                                            |
// |                | `typeof`              | Typeof Operator          | Returns the data type of a variable.                                 |                                |                                            |
// |                | `delete`              | Delete Operator          | Deletes a property from an object.                                   |                                |                                            |
// |                | `void`                | Void Operator            | Evaluates expression but returns `undefined`.                        |                                |                                            |
// | **Relational** | `in`                  | In Operator              | Relational operators compare values and define relationships between them (mostly similar to comparison operators).                                 |                                |                                            |
// |                | `instanceof`          | Instanceof Operator      | Checks if object is an instance of a constructor.                    |                                |                                            |
// | **BigInt**     | `+n`, `-n`, `*n` etc. | BigInt Operators         | Used to perform operations on BigInt values (very large integers beyond 2⁵³−1).       |                                |                                            |

//
// ALL OPERATORS
// Assignment operators
// Comparison operators
// Arithmetic operators
// Bitwise operators
// Logical operators
// BigInt operators
// String operators
// Conditional (ternary) operator
// Comma operator
// Unary operators
// Relational operators

// 🔹 1. Comparison Operators
// | Sign  | Name (English)           | Name (Hindi / WhatsApp Style)                    | Kaam kya karta hai                                       |
// | ----- | ------------------------ | ------------------------------------------------ | -------------------------------------------------------- |
// | `>`   | Greater Than             | “se bada”                                        | Check karta left side value right side se badi hai kya   |
// | `<`   | Less Than                | “se chhota”                                      | Check karta left side value right side se chhoti hai kya |
// | `>=`  | Greater Than or Equal To | “bada ya barabar”                                | Check karta left side badi ya barabar hai kya            |
// | `<=`  | Less Than or Equal To    | “chhoti ya barabar”                              | Check karta left side chhoti ya barabar hai kya          |
// | `==`  | Loose Equality           | “barabar (sirf value check)”                     | Type convert karke compare karta                         |
// | `===` | Strict Equality          | “barabar (value + type dono same hone chahiye)”  | Exact match karta                                        |
// | `!=`  | Loose Not Equal          | “barabar nahi (sirf value check)”                | Type convert karke unequal check karta                   |
// | `!==` | Strict Not Equal         | “barabar nahi (value aur type dono check karta)” | Exact unequal check karta                                |

// console.log(2 > 2); // false
// console.log(2 >= 1); // true
// console.log(3 <= 4); // true
// console.log(3 == 1); // false
// console.log("5" == 5); // true agar double == se string ko convert karenge to vo string ko number me convert karega
// console.log("5" === 5); // false isme convert nahi hota isme value ke sath type bhi check hota h triple equal to me ===
// console.log(4 != 4); // false
// console.log(5 !== 5); // Kya 5 (number) barabar nahi hai 5 (number) se❓ // false
// console.log(2 !== 0); // kya 2 barabar nhi h 0 ke // true

// 🔹 2. Logical Operators
// | Sign | Name (English) | WhatsApp Style Name | Kaam kya karta hai               |      |                                     |
// | ---- | -------------- | ------------------- | -------------------------------- | ---- | ----------------------------------- |
// | `&&` | Logical AND    | “aur”               | Dono condition true hone chahiye |      |                                     |
// | `||` | Logical OR     | `                   | koi ek condition true ho to kaam ho jayega.                       | “ya” | Koi ek condition true ho to chalega |
// | `!`  | Logical NOT    | “nahi”              | Condition ko ulta kar deta hai   |      |                                     |

let course = "BCA";
let university = "Renaiasaince University";
let vehicle = "CAR";

// Logical AND
if (
  course === "BCA" &&
  university === "Renaiasaince University" &&
  vehicle === "CAR"
) {
  console.log("I am eligible for take an admission");
}

// Logical OR
if (
  course === "BCA" ||
  (university === "Renaiasaince University" || vehicle === "CAR")
  (university === "Renaiasaince University" && vehicle === "CAR")
) {
  console.log("I am eligible");
}

// Logical NOT
if (!(vehicle === "BIKE")) {
  console.log("I want come college");
} else {
  console.log("I cannot come college");
}

// 🔹 3. Arithmetic Operators
// | Sign | Name           | WhatsApp Style Name | Kaam kya karta hai              |
// | ---- | -------------- | ------------------- | ------------------------------- |
// | `+`  | Addition       | जोड़ना              | Dono numbers jodta hai          |
// | `-`  | Subtraction    | घटाना               | Dono numbers ka difference      |
// | `*`  | Multiplication | guna                | Dono numbers ka multiplication  |
// | `/`  | Division       | भाग देना            | Divide karta hai                |
// | `%`  | Modulus        | remainder nikalta   | Divide karke remainder deta hai |
// | `**` | Exponentiation | power               | Number ka power nikalta hai     |

console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 3);
console.log(30 % 3);
console.log(20 / 3);
console.log(10 ** 2);
console.log(3 * 7);

// 🔹 4. Assignment Operators
// | Sign | Name                | WhatsApp Style Name     | Kaam kya karta hai                |
// | ---- | ------------------- | ----------------------- | --------------------------------- |
// | `=`  | Assignment          | assign karna            | Variable me value store karta hai |
// | `+=` | Add and assign      | jod kar assign karta    | `x += 5` means `x = x + 5`        |
// | `-=` | Subtract and assign | ghata kar assign karta  | `x -= 3` means `x = x - 3`        |
// | `*=` | Multiply and assign | guna kar assign karta   | `x *= 2` means `x = x * 2`        |
// | `/=` | Divide and assign   | divide kar assign karta | `x /= 2` means `x = x / 2`        |

let x = 10;
x += 5; // x = x + 5 → 15
x -= 3; // x = x - 3 → 12
x *= 2; // x = x * 2 → 24
x /= 4; // x = x / 4 → 6
console.log(x);

// 🔹 5. Increment / Decrement Operators
// | Sign | Name      | WhatsApp Style Name | Kaam kya karta hai      |
// | ---- | --------- | ------------------- | ----------------------- |
// | `++` | Increment | +1 badhata hai      | Ek number me 1 jodta    |
// | `--` | Decrement | -1 ghatata hai      | Ek number me 1 ghataata |

let y = 8;
let g = 9;
console.log(g + y);

let ab = 3;
let ba = 9;
console.log(ab - ba);

// 🔹 6. Ternary Operator (short if-else)
// | Sign  | Name             | WhatsApp Style Name | Kaam kya karta hai              |
// | ----- | ---------------- | ------------------- | ------------------------------- |
// | `? :` | Ternary Operator | chhota if-else      | Short form of if-else condition |

let age = 20;
let msg = age >= 21 ? "Adult" : "Not Adult X";
console.log(msg);
// ⚙️ basic Level
// console.log(10 > 5); // true
// console.log(8 >= 8); // false
// console.log(5 < 5) // false
// console.log(4 <= 3) // false
// console.log(3 == "3"); // true
// console.log(3 === "3"); // false
// console.log(7 != 8); // true
// console.log(7 !== 7); // false
// console.log("10" > 5); // true
// console.log("02" < 3); // true

// // ⚙️ Medium Level (thoda tricky 😏)
// console.log("5" == 5) // true
// console.log("5" === 5) // false
// console.log(true == 1) // true
// console.log(true === 1) // false
// console.log(false == 0) // true
// console.log(false === 0) // false
// console.log(null == undefined) // true
// console.log(null === undefined)
// console.log("apple" > "banana") // true // galat false ayega
// console.log("2" > "12") // false // galat true ayega
// console.log("A" < "a") // true
// console.log(0 == false) // true

// > g
// < l
// == loose eq
// === strick eq
// >= gr th eq
// <= ls th eq
// != ls not eq
// !== st not eq
