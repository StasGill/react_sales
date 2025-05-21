import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import SaleItem from "./pages/SaleItem/SaleItem";
import AddListingForm from "./components/AddForm/AddForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/:id" element={<SaleItem />} />
        <Route path="/add" element={<AddListingForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
