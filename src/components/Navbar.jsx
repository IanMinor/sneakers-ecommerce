import { Search, User, ShoppingCart } from "lucide-react";
import DropDownMenu from "./DropDownMenu";
import { LogoIcon } from "../assets/Icons";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useUserCart } from "../hooks/useUserCart";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const { cartItems } = useUserCart(user);

  const totalItems =
    cartItems?.reduce((acc, item) => acc + item.cantidad, 0) || 0;

  return (
    <header className=" py-4 px-6">
      <nav className="bg-white w-full rounded-3xl px-8 py-6 flex justify-between items-center max-w-7xl mx-auto shadow-md">
        {/* Sección izquierda */}
        <div className="flex items-center gap-6 text-black font-medium">
          <Link
            to="/products"
            className="flex items-center gap-1 font-semibold"
          >
            <span role="img" aria-label="fire">
              🔥
            </span>
            New Drops
          </Link>

          {/* Dropdown Men */}
          <DropDownMenu title="Men" />
          {/* Dropdown Menu Women */}

          <DropDownMenu title="Women" />
        </div>

        {/* Logo */}
        <Link to="/">
          <LogoIcon />
        </Link>
        {/* Sección derecha */}
        <div className="flex items-center gap-6">
          <button className="cursor-pointer">
            <Search className="w-5 h-5 text-black" />
          </button>

          {/* usuario */}
          <Dropdown>
            <DropdownTrigger className="flex items-center justify-center gap-1 font-semibold  cursor-pointer">
              <User className="w-5 h-5" />
            </DropdownTrigger>
            <DropdownMenu className="bg-white border border-gray-200 rounded-md shadow-lg px-5">
              <DropdownSection>
                {user ? (
                  <>
                    <DropdownItem
                      as={Link}
                      to="/account"
                      className="w-full px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      {user.nombre} {user.apellido}
                    </DropdownItem>
                    <DropdownItem
                      as="div"
                      onClick={logout}
                      className="w-full px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </DropdownItem>
                  </>
                ) : (
                  <>
                    <DropdownItem
                      as={Link}
                      to="/login"
                      className="w-full px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      Login
                    </DropdownItem>
                    <DropdownItem
                      as={Link}
                      to="/register"
                      className="w-full px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      Register
                    </DropdownItem>
                  </>
                )}
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>

          <Link to="/cart" className="relative cursor-pointer">
            <ShoppingCart className="w-5 h-5 text-black" />
            <span className="absolute -top-2 -right-2 bg-yellow-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
