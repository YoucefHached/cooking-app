import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "../components/Recipe";
import "../App.css";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php";
      const url = search ? `${baseUrl}?s=${search}` : `${baseUrl}?s=`;

      const response = await axios.get(url);
      setMeals(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMeals([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <h1 className="title">Cooking App</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="inputText"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <ul className="recipes">
        {meals &&
          meals
            .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
            .map((meal) => <Recipe key={meal.idMeal} meal={meal} />)}
      </ul>
    </div>
  );
};

export default Home;
