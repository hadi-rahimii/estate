import React,{useState,useEffect} from "react";
import db from "./../../data/db.json";
import Home from "@/components/modules/Home";

function index() {
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.homes]);
  const [sort, setSort] = useState("-1");

  useEffect(() => {
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default: {
        setHomes([...db.homes]);
      }
    }
  }, [sort]);

  return (
    <div class="home-section" id="houses">
      <div class="home-filter-search">
        <div class="home-filter">
          <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="-1" selected>
              انتخاب کنید
            </option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div class="home-search">
          <input type="text" value={search} onChange={((e) => setSearch(e.target.value))} placeholder="جستجو کنید" />
        </div>
      </div>

      <div class="homes">
        {homes.slice(0, 6).map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>

      <ul class="pagination__list">
        <li class="pagination__item">
          <a href="#" class=""></a>
        </li>
        <li class="pagination__item">
          <a href="#" class="">
            2
          </a>
        </li>
        <li class="pagination__item active">
          <a href="#" class="">
            1
          </a>
        </li>
      </ul>
    </div>
  );
}

export default index;
