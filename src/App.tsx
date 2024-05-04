import "./App.css";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import MyHeader from "./components/MyHeader";

const { Header, Content, Footer } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

function App() {
  // const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Router>
        <MyHeader />
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <>
              <Routes>
                <Route path="/" element={<Countries />}></Route>
                <Route path="/country/:name" element={<Country />}></Route>
              </Routes>
            </>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          AneJIbcuH ©{new Date().getFullYear()} Created by AneJIbcuH
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;
