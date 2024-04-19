import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
    onSelectItem(items[index]);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedIndex === index ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
