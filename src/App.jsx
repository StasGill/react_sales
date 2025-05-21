import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import SaleItem from "./pages/SaleItem/SaleItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/:id" element={<SaleItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
