import { useNavigate } from "react-router-dom";
import { useGetCountriesQuery } from "../store/testApi";
import { Spin } from 'antd';

const Countries: React.FC = () => {
  const { data: countries, isLoading, isError } = useGetCountriesQuery("");
  const navigate = useNavigate();

  if (isLoading) return <Spin fullscreen />;
  if (isError) return <h1>Ошибкa</h1>

  return (
    <div className="countries">
      {countries?.map((country) => (
        <div
          key={country.name.common}
          className="countries-card"
          onClick={() => navigate(`/country/${country.name.common}`)}
        >
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Countries;
