import Countries from "./pages/Countries";
import Country from "./pages/Country";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Nav from "./components/Nav";
import Favorites from "./pages/Favorites";
import "./App.css";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Nav />
        <Content style={{ padding: "0 48px", minHeight: "82vh" }}>
          <Routes>
            <Route path="/" element={<Countries />}></Route>
            <Route path="/country/:name" element={<Country />}></Route>
            <Route path="/favorites/" element={<Favorites />}></Route>
          </Routes>
        </Content>
        <Footer className="footer">
          AneJIbcuH ©{new Date().getFullYear()} Created by AneJIbcuH
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;
