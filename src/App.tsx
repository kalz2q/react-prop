// react で typescript で component なしで書く場合、props 用の型を作ると見通しがよくなる
// ディメリットとして面倒というのがある。
// 今の考え、元のプログラムがあるのなら、props を使う。なければ普通の関数を使う
import React from "react";
import "./App.css";

type WelcomeProps = {
  name: string;
};
const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>;
};

const welcome = (name: string) => {
  return <h1>Hello, {name}</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Welcome name="Bob" />
      {welcome("Tarzan")}
    </div>
  );
};

export default App;
