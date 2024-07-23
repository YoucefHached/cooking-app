import React from "react";
import "../App.css";

const Recipe = ({ meal }) => {
  return (
    <li className="card">
      <div className="flex">
        <h3
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "#2D4C6A",
          }}
        >
          {meal.strMeal}
        </h3>
        <p> origin : {meal.strArea} </p>
        <img className="img" src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strInstructions}</p>

        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-link"
        >
          Lien youtube
        </a>
      </div>
    </li>
  );
};

export default Recipe;
