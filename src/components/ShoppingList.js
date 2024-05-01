import React, { useCallback, useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
//add filter method 
const[filter, setFilter]=useState('All');

const handleFilter = useCallback((e)=>{
  setFilter(e.target.value);
},[]);

const filtereditems = filter === "All" ? items:items.filter(item=> item.category === filter);


  return (
    <div className="ShoppingList" onChange={handleFilter}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtereditems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
