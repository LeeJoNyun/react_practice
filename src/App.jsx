import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./page/Main";
import About from "./page/About";
import Profile from "./page/Profile";
import Product from "./page/Product";
import Todos from "./page/Todos";
import ProductDetail from "./page/ProductDetail";
import NotFiles from "./page/NotFiles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/product">
              <Route index element={<Product />} />
              <Route path=":productID" element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
