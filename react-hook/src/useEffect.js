import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  //   useEffect(() => {
  //     sayHello();
  //   });
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("good");
  }, 2000);
  useEffect(sayHello, [number]);
  const ref = useRef();
  setTimeout(() => {
    ref.current.focus();
  }, 2000);
  const title = useClick();
  return (
    <div>
      <input ref={ref} />
      <h1 ref={title}>HI</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
const useClick = onclick => {
  const elem = useRef();
  useEffect(() => {
    if (elem.current) {
      elem.current.addEventListener("click", onClick);
    }
  });
  return elem;
};
export default App;
