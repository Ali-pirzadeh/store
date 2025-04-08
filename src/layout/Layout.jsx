import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Container from "../component/Container";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <Container>
      <header className="flex sm:flex-row justify-between items-center bg-red-400 p-4 sm:p-4 rounded-2xl space-y-2 sm:space-y-0 mx-7 shadow-2xl">
        <Link
          to="/product"
          className="text-lg sm:text-xl hover:text-amber-100"
        >
          store
        </Link>

        <Link
          to="/checkOut"
          className="flex items-center text-lg sm:text-xl hover:text-amber-100"
        >
          <PiShoppingCartSimpleBold className="mx-2 text-xl" />
          {!!state.itemsCounter && (
            <span className="text-lg sm:text-xl">{state.itemsCounter}</span>
          )}
        </Link>
      </header>

      <main className="my-4">{children}</main>

      <footer className="text-center mt-6 text-sm text-gray-600">
        <p>Developed by ali :)</p>
      </footer>
    </Container>
  );
}

export default Layout;
