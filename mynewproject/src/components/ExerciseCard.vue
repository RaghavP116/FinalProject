<template>
  <div class="exercise-block">
    <div class="exercise-content">
      <img :src="exercise.imageUrl" :alt="exercise.name" class="exercise-img">
      <div class="exercise-details">
        <h3>{{ exercise.name }}</h3>
        <p><strong>Muscle Group:</strong> {{ exercise.muscleGroup }}</p>
        <p><strong>Equipment:</strong> {{ exercise.equipment }}</p>
        <p><strong>Difficulty:</strong> {{ exercise.difficulty }}</p>
      </div>
      <div class="toggle-section">
        <button @click="$emit('toggleDetails', exercise.id)">
          {{ expanded ? 'Hide Details' : 'Show Details' }}
        </button>
      </div>
    </div>
    <div v-if="expanded" class="details-content">
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
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exercise: Object,
    expanded: Boolean
  }
};
</script>

<style>
.exercise-block {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

.toggle-section button {
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.toggle-section button:hover {
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

ol,
ul {
  padding-left: 20px;
  margin: 8px 0;
}

li {
  margin-bottom: 5px;
}
</style>
