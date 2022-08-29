import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FirebaseInterface } from "./pages/FirebaseInterface";
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/firebase" element={<FirebaseInterface />} />
            <Route exact path="/adminpage" element={<AdminPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
