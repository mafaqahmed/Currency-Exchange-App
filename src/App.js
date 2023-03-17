import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Histroy from "./pages/Histroy";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<Histroy />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
