"use client";

import { useState } from "react";

export default function DragDrop() {
  const [columns, setColumns] = useState({
    column1: ["item1", "item2", "item3"],
    column2: ["item4", "item5", "item6"],
  });

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, toColumn) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("item");
    const fromColumn = e.dataTransfer.getData("fromColumn");

    if (toColumn === fromColumn) return;

    setColumns((prevColumns) => {
      const fromItems = prevColumns[fromColumn].filter((i) => i !== item);
      const toItems = [...prevColumns[toColumn], item];

      return {
        ...prevColumns,
        [fromColumn]: fromItems,
        [toColumn]: toItems,
      };
    });
  };

  const handleDragStart = (e, item, fromColumn) => {
    e.dataTransfer.setData("item", item);
    e.dataTransfer.setData("fromColumn", fromColumn);
  };

  return (
    <div className="flex flex-row gap-4">
      {Object.entries(columns).map(([columnName, items]) => (
        <Column
          key={columnName}
          name={columnName}
          items={items}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}

function Column({ name, items, onDragStart, onDragOver, onDrop }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <div
        className="flex flex-wrap gap-4"
        onDrop={(e) => onDrop(e, name)}
        onDragOver={onDragOver}>
        {items.map((item) => (
          <Item
            key={item}
            item={item}
            columnName={name}
            onDragStart={onDragStart}
          />
        ))}
      </div>
    </div>
  );
}

function Item({ item, columnName, onDragStart }) {
  return (
    <div
      className="bg-gray-200 rounded-lg p-4 w-full"
      draggable="true"
      onDragStart={(e) => onDragStart(e, item, columnName)}>
      {item}
    </div>
  );
}
