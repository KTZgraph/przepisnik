import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./products/pages/Products";
import Breakfasts from "./breakfasts/pages/Breakfasts";
import SecondBreakfasts from "./second-breakfasts/pages/SecondBreakfasts";
import Sidebar from "./shared/components/Navigation/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/">
              <Route path="products" element={<Products />} />
              <Route path="breakfasts" element={<Breakfasts />} />
              <Route path="second-breakfasts" element={<SecondBreakfasts />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
