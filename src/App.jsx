import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage";
import MainPage from "./Components/MainPage";
import AboutPage from "./Components/AboutPage";
import InstrumentsPage from "./Components/InstrumentsPage";
import InstrumentPage from "./Components/InstrumentPage";
import ContactPage from "./Components/ContactPage";
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
          <Route path="/instrument/:name" element={<InstrumentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 