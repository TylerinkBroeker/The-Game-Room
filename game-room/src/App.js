import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator/Navigator";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
