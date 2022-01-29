import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator/Navigator";
import Home from "./pages/Home";
import History from "./pages/History";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="contact" element={<Contact />} />
              <Route exact path="history" element={<History />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
