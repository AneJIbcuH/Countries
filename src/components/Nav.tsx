import { useNavigate } from "react-router-dom";
import { Layout } from "antd";

const { Header } = Layout;

const Nav: React.FC = () => {
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
      <div className="nav" onClick={() => navigate("/")}>
        Главная
      </div>
    </Header>
  );
};

export default Nav;
