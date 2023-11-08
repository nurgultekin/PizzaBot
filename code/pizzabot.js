const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";

const pizzaPrice = 80;

//Put your Javscript code here:

//Now I'll create array of the pizza names just to manipulate them with regex (add spaces between etc)

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
);

const orderInput = prompt("Enter the name of the pizza you want to order");

if (
  orderInput == vegetarian ||
  orderInput == hawaiian ||
  orderInput== pepperoni
) {
  const orderQuantity = prompt(
    `How many of ${orderInput} pizza(s) do you want?`
  );

  const orderTotal = orderQuantity * pizzaPrice;

  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }

  alert(
    `Great! Your order costs ${pizzaPrice} SEK. We'll get started on your ${orderInput} pizza(s) right away, and it will take about ${cookingTime} minutes.`
  );
} else {
  console.log("Error! Please enter a pizza type which we have on our menu");
}
