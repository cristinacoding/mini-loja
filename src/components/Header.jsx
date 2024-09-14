import React from "react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";

function Header() {
  return (
    <div className="shopHeader">
      <h1>Shop</h1>
      <div className="searchBar">
        <input placeholder="Procurar produtos..."></input> <Search strokeWidth={4} color="#ffb8a1" />
      </div>
      <div className="userIcons">
        <User strokeWidth={3} />
        <ShoppingCart strokeWidth={3} />
      </div>
    </div>
  );
}

export default Header;
