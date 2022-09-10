import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Breakfasts from "./pages/Breakfasts";
import SecondBreakfasts from "./pages/SecondBreakfasts";
import Search from "./pages/Search";
import Sidebar from "./components/organisms/Navigation/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<Search />} />
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
