import { useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Dashborad from "./pages/Dashborad";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./Nav";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Products from "./pages/Products";

function App() {
  const [count, setCount] = useState(0);
  // const [state, dispatch] = useReducer(reducer, { counter: 0, incrementBy: 1 });
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);

  // function reducer(state, action) {
  //   if (action.type == "increment") {
  //     // return state + action.payload;
  //     return { ...state, counter: state.counter + state.incrementBy };
  //   }
  //   if (action.type == "decrement") {
  //     // return state - action.payload;
  //     return { ...state, counter: state.counter - state.incrementBy };
  //   }
  //   if (action.type == "setIncrement") {
  //     return { ...state, incrementBy: action.payload };
  //   }
  // }

  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    // <>
    //   <div>{count}</div>
    //   <button onClick={() => setCount(count + 1)}>Increment</button>
    //   <button onClick={() => setCount(count - 1)}>Decrement</button>
    //   <div> UseReducer= {state.counter}</div>
    //   <input
    //     type={state.incrementBy}
    //     onChange={(e) =>
    //       dispatch({ type: "setIncrement", payload: Number(e.target.value) })
    //     }
    //   />

    //   <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
    //     Increment
    //   </button>
    //   <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
    //     Decrement
    //   </button>

    //   <div>
    //     <h1>Bank Account</h1>
    //     <h3>Total Balance: {state.balance} </h3>

    //     <input
    //       type="text"
    //       value={amount}
    //       onChange={(e) => setAmount(e.target.value)}
    //       name=""
    //       id=""
    //     />
    //     <button
    //       onClick={() => dispatch({ type: "add", payload: Number(amount) })}
    //     >
    //       Deposit
    //     </button>
    //     <button
    //       onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
    //     >
    //       Withdraw
    //     </button>
    //   </div>
    // </>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/dashboard" element={<Dashborad />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
