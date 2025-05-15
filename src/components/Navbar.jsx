import { Search, User, ShoppingCart } from "lucide-react";
import DropDownMenu from "./DropDownMenu";
import { LogoIcon } from "../assets/Icons";
import { Link } from "react-router-dom";
import useCartCalculations from "../hooks/useCartCalculations";

export default function Navbar() {
  const { totalItems } = useCartCalculations();

  return (
    <header className=" py-4 px-6">
      <nav className="bg-white w-full rounded-3xl px-8 py-6 flex justify-between items-center max-w-7xl mx-auto shadow-md">
        {/* Sección izquierda */}
        <div className="flex items-center gap-6 text-black font-medium">
          <Link to="/" className="flex items-center gap-1 font-semibold">
            <span role="img" aria-label="fire">
              🔥
            </span>
            New Drops
          </Link>

          {/* Dropdown Men */}
          <DropDownMenu title="Men"></DropDownMenu>
          {/* Dropdown Menu Women */}

          <DropDownMenu title="Women"></DropDownMenu>
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

          <Link to="/register" className="cursor-pointer">
            <User className="w-5 h-5 text-black" />
          </Link>

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
