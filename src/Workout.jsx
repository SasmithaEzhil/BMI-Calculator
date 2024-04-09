import React from "react";
import "./Workout.css";
import { useLocation } from "react-router-dom";
function Workout() {
  const loc = useLocation();
  return (
    <div className="workout_container">
      {loc.state == "Overweight" || loc.state == "Obese" ? (
        <h1>The Perfect Workout Plan For Your Fat Loss Journey</h1>
      ) : loc.state == "Underweight" ? (
        <h1>The Perfect Workout Plan For Your Weight Gain Journey</h1>
      ) : (
        <h1>This is a Workout Plan to Maintain Your Weight </h1>
      )}
      <div className="workout_grid">
        <div className="day">
          {loc.state == "Overweight" || loc.state == "Obese" ? (
            <>
              <h1 className="day_heading">Day 1: Upper Body Strength</h1>
              Warm-up: 5-10 minutes of Jumping Jacks
              <br />
              Bench Press: 3 sets x 8-10 reps Bent-over Rows: 3 sets x 8-10 reps
              <br />
              Shoulder Press: 3 sets x 8-10 reps
            </>
          ) : loc.state == "Underweight" ? (
            <>
              <h1 className="day_heading">Day 1: Chest and Triceps</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Bench Press: 4 sets x 6-8 reps
              <br />
              Incline Dumbbell Press: 4 sets x 8-10 reps
              <br />
              Chest Flyes: 3 sets x 10-12 reps
            </>
          ) : (
            <>
              <h1 className="day_heading">Day 1: Full Body Strength</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Squats: 3 sets x 8-10 reps
              <br />
              Bench Press: 3 sets x 8-10 reps
              <br />
              Bent-over Rows: 3 sets x 8-10 reps
            </>
          )}
        </div>
        <div className="day">
          {loc.state == "Overweight" || loc.state == "Obese" ? (
            <>
              <h1 className="day_heading">Day 2: HIIT Cardio</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              High-Intensity Interval Training (HIIT): 20 minutes (e.g., 30
              seconds sprinting, 1 minute walking/jogging)
              <br />
              Cool down: 5-10 minutes of walking
              <br />
            </>
          ) : loc.state == "Underweight" ? (
            <>
              <h1 className="day_heading">Day 2: Back and Biceps</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Deadlifts: 4 sets x 6-8 reps
              <br />
              Pull-ups or Lat Pulldowns: 4 sets x 8-10 reps
              <br />
              Barbell Rows: 4 sets x 8-10 reps
              <br />
            </>
          ) : (
            <>
              <h1 className="day_heading">Day 2: Cardio and Core</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Running or cycling: 30-45 minutes at moderate intensity
              <br />
              Russian Twists: 3 sets x 15 reps per side
              <br />
              Bicycle Crunches: 3 sets x 15 reps per side
              <br />
            </>
          )}
        </div>
        <div className="day">
          {loc.state == "Overweight" || loc.state == "Obese" ? (
            <>
              <h1 className="day_heading">Day 3: Lower Body Strength</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Squats: 3 sets x 8-10 reps
              <br />
              Deadlifts: 3 sets x 8-10 reps
              <br />
              Lunges: 3 sets x 10-12 reps per leg
            </>
          ) : loc.state == "Underweight" ? (
            <>
              <h1 className="day_heading">Day 3: Legs</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Squats: 4 sets x 6-8 reps
              <br />
              Romanian Deadlifts: 4 sets x 8-10 reps
              <br />
              Leg Press: 4 sets x 8-10 reps
            </>
          ) : (
            <>
              <h1 className="day_heading">Day 3: Active Recovery</h1>
              Walking for 30 mins
              <br />
              Yoga for 30 mins
              <br />
            </>
          )}
        </div>
        <div className="day">
          {loc.state == "Overweight" || loc.state == "Obese" ? (
            <>
              <h1 className="day_heading">Day 4: Active Recovery</h1>
              Walking for 30 mins
              <br />
              Yoga for 30 mins
              <br />
            </>
          ) : loc.state == "Underweight" ? (
            <>
              <h1 className="day_heading">Day 4: Shoulders and Abs</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Overhead Press: 4 sets x 6-8 reps
              <br />
              Lateral Raises: 4 sets x 10-12 reps
              <br />
              Front Raises: 3 sets x 10-12 reps
            </>
          ) : (
            <>
              <h1 className="day_heading">Day 4: Upper Body Strength</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Pull-ups or Lat Pulldowns: 3 sets x 8-10 reps
              <br />
              Dumbbell Rows: 3 sets x 8-10 reps per arm
              <br />
              Push-ups: 3 sets x 10-12 reps
            </>
          )}
        </div>
        <div className="day">
          {loc.state == "Overweight" || loc.state == "Obese" ? (
            <>
              <h1 className="day_heading">Day 5: Full Body Circuit</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Bodyweight Squats: 15 reps
              <br />
              Push-ups: 12 reps
              <br />
              Mountain Climbers: 20 reps (10 per leg)
              <br />
            </>
          ) : loc.state == "Underweight" ? (
            <>
              <h1 className="day_heading">Day 5: Chest and Triceps</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Bench Press: 4 sets x 6-8 reps
              <br />
              Incline Dumbbell Press: 4 sets x 8-10 reps
              <br />
              Chest Flyes: 3 sets x 10-12 reps
            </>
          ) : (
            <>
              <h1 className="day_heading">Day 5: Cardio and Flexibility</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Interval Training: 20 minutes (e.g., alternating between 1 minute
              moderate intensity and 30 seconds high intensity)
            </>
          )}
        </div>
        <div className="day">
          {loc.state == "Overweight" || loc.state == "Obese" ? (
            <>
              <h1 className="day_heading">Day 6: Cardio and Core</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Running or cycling: 30-45 minutes at moderate intensity
              <br />
              Russian Twists: 3 sets x 15 reps per side
              <br />
              Bicycle Crunches: 3 sets x 15 reps per side
              <br />
            </>
          ) : loc.state == "Underweight" ? (
            <>
              <h1 className="day_heading">Day 6: Back and Biceps</h1>
              WWarm-up: 5-10 minutes of light cardio
              <br />
              Deadlifts: 4 sets x 6-8 reps
              <br />
              Pull-ups or Lat Pulldowns: 4 sets x 8-10 reps
              <br />
              Barbell Rows: 4 sets x 8-10 reps
              <br />
            </>
          ) : (
            <>
              <h1 className="day_heading">Day 6: Lower Body Strength</h1>
              Warm-up: 5-10 minutes of light cardio
              <br />
              Deadlifts: 3 sets x 8-10 reps
              <br />
              Lunges: 3 sets x 10-12 reps per leg
              <br />
              Leg Press: 3 sets x 10-12 reps
              <br />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Workout;
