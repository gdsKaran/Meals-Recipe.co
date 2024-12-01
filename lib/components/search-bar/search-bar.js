"use client";

import classes from "./search.module.css";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
export default function Search({ meals }) {
  const [query, setQuery] = useState("");
  const [filteredMeals, setFilteredMeals] = useState(meals);

  useEffect(() => {
    if (query === "") {
      setFilteredMeals(meals);
    } else {
      setFilteredMeals(
        meals.filter((meal) =>
          meal.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, meals]);

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <>
      <div className={classes.div}>
        <label className={classes.label} for="search" class="sr-only">
          Search Meals
        </label>
        <input
          id="search"
          className={classes.input}
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={query}
        />
      </div>
      <ul className={classes.meals}>
        {filteredMeals.map((meal) => (
          <li key={meal.id}>
            <article className={classes.meal}>
              <header>
                <div className={classes.image}>
                  <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                  <h2>{meal.title}</h2>
                  <p>by creator {meal.creator}</p>
                </div>
              </header>
              <div className={classes.content}>
                <p className={classes.summary}>{meal.summary}</p>
                <div className={classes.actions}>
                  <Link href={`/meal/${meal.slug}`}>View Details</Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
