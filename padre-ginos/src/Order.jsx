import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  //   const pizzaType = "The Ripperoni Pizza";
  //   const pizzaSize = "M";

  const [pizzaType, setPizzaType] = useState("big_meat");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useState([]);
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(event) => setPizzaType(event.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(event) => setPizzaSize(event.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(event) => setPizzaSize(event.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(event) => setPizzaSize(event.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>

          <button type="submit">Add to Cart</button>
        </div>
        {loading ? (
          <h1>loading pizza lol</h1>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>
      {loading ? <h2> Loading...</h2> : <Cart cart={cart} />}
    </div>
  );
}

// comment above
// import { useState, useEffect } from "react";
// import Pizza from "./Pizza";

// // feel free to change en-US / USD to your locale
// const intl = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });

// export default function Order() {
//   const [pizzaType, setPizzaType] = useState("pepperoni");
//   const [pizzaSize, setPizzaSize] = useState("M");
//   const [pizzaTypes, setPizzaTypes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   let price, selectedPizza;
//   if (!loading) {
//     selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
//     price = intl.format(
//       selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
//     );
//   }

//   useEffect(() => {
//     fetchPizzaTypes();
//   }, []);

//   async function fetchPizzaTypes() {
//     const pizzasRes = await fetch("/api/pizzas");
//     const pizzasJson = await pizzasRes.json();
//     setPizzaTypes(pizzasJson);
//     setLoading(false);
//   }

//   return (
//     <div className="order">
//       <h2>Create Order</h2>
//       <form>
//         <div>
//           <div>
//             <label htmlFor="pizza-type">Pizza Type</label>
//             <select
//               onChange={(e) => setPizzaType(e.target.value)}
//               name="pizza-type"
//               value={pizzaType}
//             >
//               {pizzaTypes.map((pizza) => (
//                 <option key={pizza.id} value={pizza.id}>
//                   {pizza.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="pizza-size">Pizza Type</label>
//             <div>
//               <span>
//                 <input
//                   onChange={(e) => setPizzaSize(e.target.value)}
//                   checked={pizzaSize === "S"}
//                   type="radio"
//                   name="pizza-size"
//                   value="S"
//                   id="pizza-s"
//                 />
//                 <label htmlFor="pizza-s">Small</label>
//               </span>
//               <span>
//                 <input
//                   onChange={(e) => setPizzaSize(e.target.value)}
//                   checked={pizzaSize === "M"}
//                   type="radio"
//                   name="pizza-size"
//                   value="M"
//                   id="pizza-m"
//                 />
//                 <label htmlFor="pizza-m">Medium</label>
//               </span>
//               <span>
//                 <input
//                   onChange={(e) => setPizzaSize(e.target.value)}
//                   checked={pizzaSize === "L"}
//                   type="radio"
//                   name="pizza-size"
//                   value="L"
//                   id="pizza-l"
//                 />
//                 <label htmlFor="pizza-l">Large</label>
//               </span>
//             </div>
//           </div>
//           <button type="submit">Add to Cart</button>
//         </div>
//         {loading ? (
//           <h3>LOADING …</h3>
//         ) : (
//           <div className="order-pizza">
//             <Pizza
//               name={selectedPizza.name}
//               description={selectedPizza.description}
//               image={selectedPizza.image}
//             />
//             <p>{price}</p>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }
