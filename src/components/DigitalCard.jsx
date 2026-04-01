import { useState } from "react";
import toast from "react-hot-toast";
import Card from "./Card";

const DigitalCard = ({ data }) => {
  const [view, setView] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setView("cart");
    toast.success("Item added to cart success");
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed from cart!");
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle Checkout
  const handleCheckout = () => {
    setCartItems([]);
    toast.success("Checkout successful!");
  };

  return (
    <div className="px-16 py-20 mx-auto max-w-7xl">
      <div className="pb-20 text-center">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="pt-4 text-lg font-semibold text-gray-500">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>

        {/* Toggle Button */}
        <div className="flex justify-center mt-5">
          <div
            className="relative inline-flex items-center w-40 h-10 bg-white border border-gray-300 rounded-full cursor-pointer"
            onClick={() => setView(view === "products" ? "cart" : "products")}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-20 h-9 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full shadow-md transform transition-transform duration-300 ${
                view === "cart" ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
            <span
              className={`absolute left-2 text-sm font-medium transition-colors duration-300 ${
                view === "products" ? "text-white" : "text-black"
              }`}
            >
              Products
            </span>
            <span
              className={`absolute right-2 text-sm font-medium transition-colors duration-300 ${
                view === "cart" ? "text-white" : "text-black"
              }`}
            >
              Cart ({cartItems.length > 0 ? cartItems.length : 0})
            </span>
          </div>
        </div>
      </div>

      {/* Products */}
      {view === "products" && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((toolData) => (
            <Card
              key={toolData.id}
              toolData={toolData}
              addToCart={() => addToCart(toolData)}
            />
          ))}
        </div>
      )}

      {/* Cart */}
      {view === "cart" && (
        <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="grid object-cover w-16 h-16 rounded-full shadow-lg bg-purple-50 place-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain w-8 h-8 rounded"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-lg">${item.price}</p>
                  </div>
                </div>
                <button
                  className="px-4 py-2 text-red-600 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {/* Total */}
          {cartItems.length > 0 && (
            <>
              <div className="flex items-center justify-between p-2">
                <h6 className="font-semibold text-gray-500">Total:</h6>
                <p className="font-bold">${totalPrice}</p>
              </div>
              <button
                className="py-2 mt-2 text-white rounded-full bg-linear-to-r from-purple-500 to-indigo-500"
                onClick={() => handleCheckout()}
              >
                Proceed to checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DigitalCard;
