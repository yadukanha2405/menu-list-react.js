import { useState } from "react";
import "./styles.css";
import item from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allcategories = ["all", ...new Set(item.map((items) => items.category))];

export default function App() {
  const [menuItem, setMenuItem] = useState(item);
  const [categories, SetCategories] = useState(allcategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItem(item);
      return;
    }
    const newItem = item.filter((item) => item.category === category);
    setMenuItem(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={categories} filterItem={filterItem} />
        <Menu item={menuItem} />
      </section>
    </main>
  );
}
