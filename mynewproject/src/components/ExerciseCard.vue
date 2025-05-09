<template>
  <div class="exercise-card" :class="exercise.difficulty">
    <h2>{{ exercise.name }}</h2>
    <div class="exercise-details">
      <p><strong>Muscle Group:</strong> {{ exercise.muscleGroup }}</p>
      <p><strong>Equipment:</strong> {{ exercise.equipment }}</p>
      <p><strong>Difficulty:</strong> {{ exercise.difficulty }}</p>
    </div>
    <button @click="showDetails = !showDetails">
      {{ showDetails ? 'Hide Details' : 'Show Details' }}
    </button>
    <div v-if="showDetails" class="exercise-instructions">
      <h3>Instructions:</h3>
      <ol>
        <li v-for="(step, index) in exercise.instructions" :key="index">
          {{ step }}
        </li>
      </ol>
      <h3>Warmup:</h3>
      <ul>
        <li v-for="(warmup, index) in exercise.warmup" :key="'warmup'+index">
          {{ warmup }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exercise: Object
  },
  data() {
    return {
      showDetails: false
    }
  }
}
</script>

<style scoped>
.exercise-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.exercise-details {
  text-align: left;
  margin: 15px 0;
}

.exercise-instructions {
  text-align: left;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

h2 {
  color: #343a40;
  margin-bottom: 10px;
}

h3 {
  color: #495057;
  margin: 10px 0 5px 0;
}
</style>