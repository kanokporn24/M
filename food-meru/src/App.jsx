import { useState } from "react";
import "./App.css";
import data from "./data"
import categories from './components/Categories'
import menu from "./components/menu"


function App() {
  const [people, setPeople] = useState(data);
  const allCategories =[
    "All"
    ...new Set(
      data.map((item) => {
          return item.catgory;
      })
    ),
  ];

  
  return (
    <>
      <div>
        <h1>Worksohop 2:FoodMeru</h1>
        <main>
          <section className="menu srction">
            <div className="title">
              <h2>Our Menu</h2>
              <div className="underline"></div>
            </div>
          < Categories allCategories= 
          {allCategorie}/>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
