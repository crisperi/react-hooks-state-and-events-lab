import React , {useState} from "react";

function Item({ name, category }) {
const [cart, SetCart] = useState('');
const addCart =() =>{
  SetCart(added => !added);
};
const isAddedClass = cart?'in-cart':'';

  return (
    <li className={isAddedClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
