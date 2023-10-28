import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import { Home} from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from './pages/Checkout';
import Tentang from './pages/Tentang';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/tentang" element={<Tentang />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
