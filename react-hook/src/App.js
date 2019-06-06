import React, { useState } from "react";
import "./App.css";

/**
 * functional component
 */
function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  return (
    <div className="App">
      <TestComponent />
      <h1>hello world{item}</h1>
      <button onClick={incrementItem}>incrementItem</button>
    </div>
  );
}
/**
 * class component
 */
class TestComponent extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>hello world{item}</h1>
        <button onClick={this.incrementItem}>incrementItem</button>
      </div>
    );
  }
  incrementItem = ()=>{
    console.log(this)
    this.setState(state => {
      return {
        item: (state.item += 1)
      };
    });
  }
}

export default App;
