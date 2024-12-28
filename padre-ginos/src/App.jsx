import { createRoot } from "react-dom/client";
//import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
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
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
