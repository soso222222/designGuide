import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Pages/Main";
import Home from "./Components/Pages/Main/Login/Home";
import MainContent from "./Components/Pages/Main/MainContent/MainContent";
import "prism-themes/themes/prism-atom-dark.css";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/*"} element={<MainContent />} />
        {/* <Route path={"/dashboard/*"} element={<MainContent />} /> */}
        {/* <Route path="/*" element={<Home />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
