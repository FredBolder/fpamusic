import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage";
import AboutPage from "./Components/AboutPage";
import InstrumentsPage from "./Components/InstrumentsPage";
import InstrumentPage from "./Components/InstrumentPage";
import ContactPage from "./Components/ContactPage";
import PrivacyPage from "./Components/PrivacyPage";
import PageNotFound from "./Components/PageNotFound";
import GlobalState from "./Context/GlobalState";

function App() {
  useEffect(() => {
    document.title = "FPA Music";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalState>
          <Routes>
            <Route path="/" exact element={<StartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/instruments" element={<InstrumentsPage />} />
            <Route path="/instrument/:name" element={<InstrumentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </GlobalState>
      </BrowserRouter>
    </div>
  );
}

export default App;
