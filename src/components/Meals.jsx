import React from "react";
import vb from '../images/vb.jfif';
import as from '../images/as.jfif';
import jg from '../images/jg.jfif';

const meals = [
  { id: 1, title: "Japanese Gyozas", img: jg },
  { id: 2, title: "Avocado Salad", img: as },
  { id: 3, title: "Vegan Burger", img: vb },
];

const Meals = () => {
  return (
    <section id="meals" className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Popular Meals</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {meals.map(meal => (
            <div key={meal.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={meal.img} alt={meal.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{meal.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meals;
