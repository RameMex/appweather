import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { usePlace } from "../../../hooks/usePlace";
import { useWeather } from "../../../hooks/useWeather";
import { getPlaces } from "../../../repository/getPlaces";
import { useLanguageContext } from "../../../utils/LanguageProvider";
import { ButtonOptions } from "../buttonOptions/ButtonOptions";
import { OptionsIcon } from "../icons/Options";
import { SearchIcon } from "../icons/Search";
import s from "./Input.module.css";

export const Input = ({ placeholder = "Search Places...", value, variant }) => {
  const [searchValue, setSearchValue] = useState("");
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const searchQuery = useDebounce(searchValue, 300);

  const language = useLanguageContext();

  const [weather, setWeather] = useWeather();
  const [place, setPlace] = usePlace();
  useEffect(() => {
    setListing("");
    if (searchQuery || searchValue.length > 0) searchPlace();
    async function searchPlace() {
      setListing("");
      setLoading(true);
      const data = await getPlaces(searchQuery);
      setListing(data);
      setLoading(false);
    }
  }, [searchQuery]);

  const styleVariant = () => {
    if (variant === "simple") {
      return s.simple;
    }

    if (variant === "small") {
      return s.small;
    }
    return s.outline;
  };

  const getSearchValue = (event) => {
    setSearchValue(event.target.value);
    setIsSelected(event.target.value);
  };

  return (
    <>
      <div className={s.input_container}>
        <span className={s.icon}>
          <SearchIcon />
        </span>
        <input
          type="search"
          placeholder={placeholder}
          className={styleVariant()}
          onChange={getSearchValue}
          value={isSelected}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
        />
        <span className={s.icon}>
          <ButtonOptions />
        </span>
        {isSelected.length > 0 && loading && onFocus && (
          <div className={s.input_loading}>{language.loading}</div>
        )}
        {listing && (
          <div className={s.input_list}>
            <div className={s.input_list_container}>
              <ul>
                {listing.map((place, index) => (
                  <li
                    className={s.li_list}
                    key={place.id}
                    onClick={() => {
                      setListing("");
                      setPlace({ ...place });
                      setIsSelected(
                        `${place.city_name},${place.state}, ${place.country}`
                      );
                    }}
                  >
                    <div className={s.city_name}>{place.city_name}</div>
                    <div
                      className={s.city_info}
                    >{`${place.state}, ${place.display}`}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
