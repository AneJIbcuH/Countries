import { useNavigate } from "react-router-dom";
import { useGetCountriesQuery } from "../store/testApi";
import { MouseEvent, useState } from "react";
import { Select, Input, Spin } from "antd";
import { ICountry } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const Countries: React.FC = () => {
  const { data: mycountries, isLoading, isError } = useGetCountriesQuery("");
  const navigate = useNavigate();
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.favorites);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "population" | "">();

  if (isLoading) return <Spin fullscreen />;
  if (isError) return <h1>Ошибкa</h1>;

  const countries = mycountries!
    .filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.common.localeCompare(b.name.common)
        : b.population - a.population
    );

  function changeFavorites(
    country: ICountry,
    e: MouseEvent<HTMLButtonElement>
  ) {
    e?.stopPropagation();
    favorites.find((el) => el.name.common === country.name.common)
      ? removeFavorite(country)
      : addFavorite(country)
  }

  return (
    <>
      <div className="filters">
        <Input
          placeholder="Поиск по имени страны..."
          value={filter}
          style={{ width: 240 }}
          onChange={(e) => setFilter(e.target.value)}
          type="text"
        />
        <Select
          placeholder="Сортировать..."
          className="select"
          value={sortBy}
          style={{ width: 240, marginLeft: 20 }}
          allowClear
          onChange={(value) => setSortBy(value)}
          options={[
            { value: "name", label: "По имени" },
            { value: "population", label: "По населению" },
          ]}
        />
      </div>
      <div className="countries">
        {countries?.map((country) => (
          <div
            key={country.name.common}
            className="countries-card"
            onClick={() => navigate(`/country/${country.name.common}`)}
          >
            <div className="countries-card-title">
              <h3>{country.name.common}</h3>
            </div>
            <img src={country.flags.png} alt="" />
            <button onClick={(e) => changeFavorites(country, e)}>
              {favorites.find(
                (el) => el.name.common === country.name.common
              ) ? (
                <HeartFilled />
              ) : (
                <HeartOutlined />
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
