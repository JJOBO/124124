import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./../pages/home/Home";
import UsedMarket from "./../pages/used-market/Index";
import NotFound from "../pages/error/NotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/used-market" element={<UsedMarket />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
