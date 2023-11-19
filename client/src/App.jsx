import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import { Checkout, Home, Login, Register, Tentang } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/tentang/:id" element={<Tentang />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
