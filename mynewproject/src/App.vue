<template>
  <div>
    <GymHeader title="Fitness Exercises" subtitle="Complete Workout Guide"/>
    <div class="exercise-container">
      <div v-for="exercise in exercises" :key="exercise.id" class="exercise-block">
        <div class="exercise-content">
          <img :src="`http://localhost:1469${exercise.imageUrl}`" :alt="exercise.name" class="exercise-img">
          <div class="exercise-details">
            <h3>{{ exercise.name }}</h3>
            <p><strong>Muscle Group:</strong> {{ exercise.muscleGroup }}</p>
            <p><strong>Equipment:</strong> {{ exercise.equipment }}</p>
            <p><strong>Difficulty:</strong> {{ exercise.difficulty }}</p>
          </div>
            <div class="toggle-section">
              <button @click="toggleDetails(exercise.id)">
                {{expandedExercise === exercise.id ? 'Hide Details' : 'Show Details'}}
              </button>
              <div v-if="expandedExercise === exercise.id" class="details-content">
                <h4>Instructions:</h4>
                <ol>
                  <li v-for="(step, index) in exercise.instructions" :key="index">{{ step }}</li>
                </ol>
                <h4>Warmup:</h4>
                <ul>
                  <li v-for="(item, index) in exercise.warmup" :key="index">{{ item }}</li>
                </ul>
                <h4>Benefits:</h4>
                <ul>
                  <li v-for="(benefit, index) in exercise.benefits" :key="index">{{ benefit }}</li>
                </ul>
              </div>
            </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GymHeader from './components/GymHeader.vue';

export default {
  name: 'App',
  components: {
    GymHeader
  },
  data() {
    return {
      exercises: [],
      expandedExercise: null
    }
  },
  methods: {
    toggleDetails(id) {
      this.expandedExercise = this.expandedExercise === id ? null : id;
    }
  },
  async created() {
    const response = await fetch('http://localhost:1469/exercises');
    this.exercises = await response.json();
  }
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

.exercise-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.exercise-block {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  vertical-align: middle;
}

.exercise-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr 0.8fr;
}

.exercise-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.exercise-details {
  display: grid;
  grid-template-columns: auto;
}

h3 {
  color: #2c3e50;
  margin-top: 0;
  font-size: 1.5rem;
}

p {
  margin: 8px 0;
}

strong {
  color: #2c3e50;
}

button {
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 0.9rem;
  transition: background 0.3s;
  top: 50%;
}

button:hover {
  background: #2980b9;
}

.details-content {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

h4 {
  margin: 15px 0 8px;
  color: #2c3e50;
}

ol, ul {
  padding-left: 20px;
  margin: 8px 0;
}

li {
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .exercise-content {
    display: grid;
    grid-template-columns: auto;
  }
  .exercise-img {
    width: 100%;
    height: auto;
  }
}
</style>