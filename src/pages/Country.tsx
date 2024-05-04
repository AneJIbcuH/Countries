import { useGetCountryQuery } from "../store/testApi";
import { useParams, useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Country: React.FC = () => {
  const { name } = useParams();
  const { data: country, isLoading } = useGetCountryQuery(name!);
  const navigate = useNavigate();

  if (isLoading) return <Spin fullscreen />;
  console.log(country![0]);
  const CTR = country![0];

  return (
    <div className="country">
      <button onClick={() => navigate("/")}>Назад</button>
      <table>
        <tbody>
          <tr>
            <td>Страна</td>
            <td>{CTR.name.common}</td>
          </tr>
          <tr>
            <td>Столица</td>
            <td>{CTR.capital}</td>
          </tr>
          <tr>
            <td>Местоположение</td>
            <td>{CTR.continents}</td>
          </tr>
          <tr>
            <td>Площадь</td>
            <td>{CTR.area} км&#178;</td>
          </tr>
          <tr>
            <td>Население</td>
            <td>{CTR.population} человек</td>
          </tr>
          <tr>
            <td>Валюта</td>
            <td>
              {Object.values(CTR.currencies)[0].name}{" "}
              {Object.values(CTR.currencies)[0].symbol}
            </td>
          </tr>
          <tr>
            <td>Флаг</td>
            <td className="country-img">
              <img src={CTR.flags.png} alt="" />
            </td>
          </tr>
          <tr>
            <td>Герб</td>
            <td className="country-table-td-img">
              <img src={CTR.coatOfArms.png} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Country;