import React, { useState } from "react";

const content = [
  {
    tab: "Section1",
    content: "this is section 1"
  },
  {
    tab: "Section2",
    content: "this is section 2"
  },
  {
    tab: "Section3",
    content: "this is section 3"
  }
];
const useTaps = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex
  };
};
const App = () => {
  const { currentItem, chageItem } = useTaps(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => chageItem(index)}>{section.tab}</button>
      ))}
      {currentItem.content}
    </div>
  );
};

export default App;
