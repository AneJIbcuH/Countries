import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { ICountry } from "../models/models";
import { MouseEvent } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const Favorites: React.FC = () => {
  const { favorites } = useAppSelector((state) => state.favorites);
  const navigate = useNavigate();
  const { removeFavorite } = useActions();

  function removeFromFavorites(
    country: ICountry,
    e: MouseEvent<HTMLButtonElement>
  ) {
    e?.stopPropagation();
    removeFavorite(country);
  }

  return (
    <>
      {favorites.length ? (
        <div className="countries">
          {favorites?.map((country) => (
            <div
              key={country.name.common}
              className="countries-card"
              onClick={() => navigate(`/country/${country.name.common}`)}
            >
              <div className="countries-card-title">
                <h3>{country.name.common}</h3>
              </div>
              <img src={country.flags.png} alt="" />
              <button onClick={(e) => removeFromFavorites(country, e)}>
              <DeleteOutlined />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>В избранном пусто</p>
      )}
    </>
  );
};

export default Favorites;
