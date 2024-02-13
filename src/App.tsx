import { useState } from "react";
import MonacoEditor from "./components/Editor";
import Diagram from "./React-flow";
import Header from "./components/Header";

const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

function App() {
  return (
    <div className="grid grid-rows-7 grid-cols-4 gap-4 h-screen w-screen">
      <Header></Header>
      <MonacoEditor></MonacoEditor>
      {/* <div class="border-4 border-black row-span-6 col-span-2">01</div> */}
      <Diagram></Diagram>
    </div>
  );
}

export default App;
