import React from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Yaounde",
    "Douala",
    "Bafoussam",
    "Bertoua",
    "North",
    "Far North",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
