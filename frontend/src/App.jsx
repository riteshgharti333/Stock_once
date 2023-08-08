import "./app.scss";
import { CryptoProvider } from "./component/crptoContext/cryptoContect";
import HomePage from "./component/home/HomePage";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CryptoProvider>
      <div className="app">
        <Navbar />
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CryptoProvider>
  );
}

export default App;
