import React from "react";
import Todo from "./todo";

export default function TodoList({ items }) {
  console.log('items', items)
  return (
    <div>
      {items.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}
