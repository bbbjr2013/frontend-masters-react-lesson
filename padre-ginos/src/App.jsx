import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
//import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Padre Gino's - Order Now</h1>
        <Order />
        <PizzaOfTheDay />
        {/* <Pizza
        name="The Ripperoni Pizza"
        description="Mozzarella all over my Cinderella for a Grand Rippranomy"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="The Pope on Dope"
        description="some dope pizza, yo"
        image={"/public/pizzas/ital_cpcllo.webp"}
      />
      <Pizza
        name="The Abomination"
        description="It's just pineapple on pizza"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The YOLO"
        description="Never again"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="The Cheese"
        description='We&apos;ve hired James May to slame a block of cheese in front of you and say "Cheese".'
        image={"/public/pizzas/five_cheese.webp"}
      /> */}
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
