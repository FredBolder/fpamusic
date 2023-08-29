import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage";
import MainPage from "./Components/MainPage";
import AboutPage from "./Components/AboutPage";
import InstrumentsPage from "./Components/InstrumentsPage";
import ContactPage from "./Components/ContactPage";
import PrivacyPage from "./Components/PrivacyPage";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StartPage/>} />
          <Route path="/main" exact element={<MainPage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/instruments" element={<InstrumentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
