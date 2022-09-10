import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./products/pages/Products";
import Breakfasts from "./breakfasts/pages/Breakfasts";
import SecondBreakfasts from "./second-breakfasts/pages/SecondBreakfasts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="products" element={<Products />} />
            <Route path="breakfasts" element={<Breakfasts />} />
            <Route path="second-breakfasts" element={<SecondBreakfasts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
