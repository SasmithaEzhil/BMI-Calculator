import React from "react";
import { useLocation } from "react-router-dom";
import "./Diet.css";
function Diet() {
  const loc = useLocation();
  return (
    <div className="Diet_container">
      {loc.state == "Overweight" || loc.state == "Obese" ? (
        <>
          <h1>Diet Plan For Your Fat Loss Journey</h1>
          <div className="Diet">
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Breakfast Options : </h2>
              </div>

              <div className="dishes">
                <span>Vegetable Omelette</span>
                <span>Whole-grain Toast with Avocado</span>
                <span>1 Grapefruit</span>
                <span>Greek Yogurt with Berries</span>
                <span>Green Smoothie (spinach, banana, almond milk)</span>
                <span>Chia Seed Pudding with Almonds</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Lunch Options : </h2>
              </div>

              <div className="dishes">
                <span>Grilled Chicken Salad with Balsamic Vinaigrette</span>
                <span>Quinoa and Vegetable Stir-fry</span>
                <span>Leafy Green Salad with Tuna</span>
                <span>Black Bean Soup with a Side Salad</span>
                <span>Whole-grain Wrap with Turkey and Lettuce</span>
                <span>Grilled Veggie Wrap with Hummus</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Snacks Options : </h2>
              </div>

              <div className="dishes">
                <span>Vegetable Sticks with Guacamole</span>
                <span>Yogurt with Granola</span>
                <span>Protein Smoothie (spinach, berries, protein powder)</span>
                <span>Apple Slices with Almond Butter</span>
                <span>Handful of Almonds</span>
                <span>Rice Cake with Cottage Cheese and Berries</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Dinner Options : </h2>
              </div>

              <div className="dishes">
                <span>Baked Salmon with Steamed Broccoli</span>
                <span>Grilled Tofu with Roasted Vegetables</span>
                <span>Lean Beef Stir-fry with Brown Rice</span>
                <span>Vegetarian Chili with a Side Salad</span>
                <span>Stuffed Bell Peppers with Quinoa and Beans</span>
                <span>Shrimp and Vegetable Skewers with Quinoa</span>
              </div>
            </div>
          </div>
        </>
      ) : loc.state == "Underweight" ? (
        <>
          <h1>Diet Plan For Your Weight Gain Journey</h1>
          <div className="Diet">
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Breakfast Options : </h2>
              </div>

              <div className="dishes">
                <span>Omelette with Vegetables</span>
                <span>Whole-grain Toast with Peanut Butter</span>
                <span>1 Banana</span>
                <span>Greek Yogurt Parfait</span>
                <span>Whole-grain Cereal with Milk</span>
                <span>Scrambled Eggs with Avocado</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Lunch Options : </h2>
              </div>

              <div className="dishes">
                <span>Stir-fried Tofu with Vegetables</span>
                <span>Quinoa Salad with Chickpeas</span>
                <span>Mixed Nuts</span>
                <span>Grilled Chicken Salad with Balsamic Vinaigrette</span>
                <span>Whole-grain Wrap with Turkey and Avocado</span>
                <span>Vegetable Soup with Whole-grain Bread</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Snacks Options : </h2>
              </div>

              <div className="dishes">
                <span>Tuna Salad Wrap</span>
                <span>Protein Smoothie</span>
                <span>Yogurt with Granola</span>
                <span>Rice Cake with Cottage Cheese and Berries</span>
                <span>Celery Sticks with Peanut Butter</span>
                <span>Trail Mix</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Dinner Options : </h2>
              </div>

              <div className="dishes">
                <span>Baked Cod with Roasted Vegetables</span>
                <span>Chicken Caesar Salad</span>
                <span>Whole-grain Crackers with Hummus</span>
                <span>Vegetarian Bean Chili</span>
                <span>Salmon Fillet with Quinoa and Steamed Broccoli</span>
                <span>Grilled Steak with Sweet Potato and Asparagus</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Diet Plan to Maintain Your Weight</h1>
          <div className="Diet">
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Breakfast Options : </h2>
              </div>

              <div className="dishes">
                <span>Scrambled Eggs with Spinach</span>
                <span>Whole-grain Toast with Avocado</span>
                <span>1 Orange</span>
                <span>Greek Yogurt with Granola</span>
                <span>Whole-grain Pancakes with Berries</span>
                <span>Whole-grain Cereal with Almond Milk</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Lunch Options : </h2>
              </div>

              <div className="dishes">
                <span>Grilled Chicken Salad with Olive Oil Dressing</span>
                <span>Quinoa Salad with Mixed Vegetables</span>
                <span>Whole-grain Wrap with Turkey and Lettuce</span>
                <span>Vegetarian Sushi Roll with Edamame</span>
                <span>Lean Beef Stir-fry with Brown Rice</span>
                <span>Chickpea and Vegetable Curry with Basmati Rice</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Snacks Options : </h2>
              </div>

              <div className="dishes">
                <span>Greek Yogurt with Berries</span>
                <span>Trail Mix</span>
                <span>Protein Smoothie (spinach, banana, protein powder)</span>
                <span>Rice Cake with Cottage Cheese and Tomato Slices</span>
                <span>Edamame with Sea Salt</span>
                <span>Celery Sticks with Almond Butter</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="Meal">
              <div className="Meal_heading">
                <h2>Dinner Options : </h2>
              </div>

              <div className="dishes">
                <span>Baked Salmon with Roasted Asparagus</span>
                <span>Grilled Tofu with Quinoa and Steamed Broccoli</span>
                <span>Vegetarian Pasta Primavera with Whole-grain Pasta</span>
                <span>Beef Stir-fry with Mixed Vegetables</span>
                <span>Grilled Shrimp Tacos with Corn Tortillas</span>
                <span>
                  Stuffed Bell Peppers with Ground Turkey and Brown Rice
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Diet;
