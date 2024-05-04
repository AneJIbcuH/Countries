import "./App.css";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Nav from "./components/Nav";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Nav />
        <Content style={{ padding: "0 48px", height: "100%" }}>
          <div className="content">
            <Routes>
              <Route path="/" element={<Countries />}></Route>
              <Route path="/country/:name" element={<Country />}></Route>
            </Routes>
          </div>
        </Content>
        <Footer className="footer">
          AneJIbcuH ©{new Date().getFullYear()} Created by AneJIbcuH
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;
