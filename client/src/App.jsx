import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
