import pizza from "../assets/images/pizza/pizza.jpg";
import paneerPizza from "../assets/images/pizza/paneer-pizza.jpg";
import cheesyPasta from "../assets/images/pizza/cheesy-pasta.jpg";

import burger from "../assets/images/burger/burger.jpg";
import chilliPotato from "../assets/images/snacks/chilli-potato.jpg";

const menuData = {
  pizza: [
    {
      id: 1,
      name: "Classic Pizza",
      description: "Cheesy delight",
      price: "₹199",
      image: pizza,
    },
    {
      id: 2,
      name: "Paneer Pizza",
      description: "Loaded with paneer",
      price: "₹249",
      image: paneerPizza,
    },
    {
      id: 3,
      name: "Cheese Pasta",
      description: "Creamy pasta",
      price: "₹179",
      image: cheesyPasta,
    },
  ],
  burger: [
    {
      id: 4,
      name: "Burger",
      description: "Juicy burger",
      price: "₹149",
      image: burger,
    },
  ],
  snacks: [
    {
      id: 5,
      name: "Chilli Potato",
      description: "Spicy snack",
      price: "₹129",
      image: chilliPotato,
    },
  ],
};

export default menuData;
