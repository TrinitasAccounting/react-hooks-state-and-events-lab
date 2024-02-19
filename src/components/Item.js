import React, { useState } from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false)

  function handleClick() {
    setAddToCart(!addToCart)
  }

  const textContentToShow = addToCart ? "Remove From Cart" : "Add to Cart";

  const classNameVar = addToCart ? "in-cart" : "";

  const buttonClassNameVar = addToCart ? "in-cart" : "add";

  return (
    <li className={classNameVar}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassNameVar} onClick={handleClick}>{textContentToShow}</button>
    </li>
  );
}

export default Item;
