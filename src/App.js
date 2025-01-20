import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Foundry from './Foundry';
import Home from './Foundry';
import Partners from './Foundry';
import Support from './Foundry';
import NoPage from './NoPage';

function App() {
  return (
    // Using Browser Router to allow us to navigate page to page.
    /// We set the base path as "/"
    // Each route is a page we set and import from a script.
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="Foundry" element={<Foundry />} />
          <Route path="Home" element={<Home />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Support" element={<Support />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
