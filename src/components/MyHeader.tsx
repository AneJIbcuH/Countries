import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

const MyHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
      <div className="demo-logo" onClick={() => navigate("/")}>
        Главная
      </div>
    </Header>
  );
};

export default MyHeader;
