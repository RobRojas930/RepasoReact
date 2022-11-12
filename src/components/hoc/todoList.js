import React from "react";
import Todo from "./todo";
import { filterItems, checkedItems } from "./utils";

export default function TodoList({ query, dataset, onChecked }) {
  const items = filterItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <Todo
          key={product.id}
          title={product.title}
          completed={product.completed}
          onChecked={(e) => {
            onChecked(e, product.id);
          }}
        />
      ))}
    </div>
  );
}
