document.addEventListener("DOMContentLoaded", function () {
  const pizzaTypes = {
    pizza1: {
      name: "Vegetarian",
      price: 80,
    },
    pizza2: {
      name: "Pepperoni",
      price: 90,
    },
    pizza3: {
      name: "Hawaiian",
      price: 95,
    },
  };

  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${pizzaTypes.pizza1.name}, ${pizzaTypes.pizza2.name}, and ${pizzaTypes.pizza3.name}.`
  );
});
