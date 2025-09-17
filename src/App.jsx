import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Pages from "./components/pages/Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/pages" element={<Pages/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
