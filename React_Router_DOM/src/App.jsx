import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import ProductPage from "./component/pages/ProductPage";
import SalesPage from "./component/pages/SalesPage";
import NotFound from "./component/pages/NotFound";

const App = () => {
  return (
    <div>
      <center>
        <h1>React Router DOM</h1>
      </center>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id/:name" element={<ProductPage />} />
          <Route path="/skill" element={<SalesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
