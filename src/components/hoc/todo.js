import React from "react";
export default function Todo({ title, completed, onChecked }) {
  return (
    <div>
      <div>
        {title}
        <input type="checkbox" checked={completed} onClick={(e)=>onChecked(e)} />
      </div>
    </div>
  );
}
