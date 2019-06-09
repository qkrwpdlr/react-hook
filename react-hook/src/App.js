import React, { useState } from "react";
import "./App.css";
import UseTabs from "./useTabs";
import UseEffect from "./useEffect";
import UsePreventLeave from "./usePreventLeave";
// import UseConfirm from "./useConfirm";
/**
 * functional component
 */
function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const maxLen = value => value.length < 10;
  // const maxLen = value => !value.includes("@");
  const name = useInput("Mr..", maxLen);
  return (
    <div className="App">
      <TestComponent />
      <UseEffect />
      <UsePreventLeave />
      <UseTabs />
      {/* <UseConfirm /> */}
      <h1>hello world{item}</h1>
      <button onClick={incrementItem}>incrementItem</button>

      <input placeholder="" {...name} />
      {/* <input onChange={useInput.onChange} /> 와 같이 게속 적을 필요 없다.*/}
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
  incrementItem = () => {
    console.log(this);
    this.setState(state => {
      return {
        item: (state.item += 1)
      };
    });
  };
}

const useInput = (initialValue, valiatior) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof valiatior == "function") {
      willUpdate = valiatior(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default App;
