import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/lib/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Search from "@/lib/components/search-bar/search-bar";

export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food-loving community.",
};
const meals = await getMeals();
async function Meals() {
  return <MealsGrid meals={meals} />;
}

export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself.Its easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meal/share">Share Your favourite Recipe</Link>
        </p>
      </header>
      <Search meals={meals} />
      <main className={classes.main}>
        <Suspense
          fallback={<h2 className={classes.loading}>Loading Meals....</h2>}
        ></Suspense>
      </main>
    </>
  );
}
