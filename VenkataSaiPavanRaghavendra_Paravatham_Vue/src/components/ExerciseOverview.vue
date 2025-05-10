<template>
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
  </template>
  
  <script>
  export default {
    name: 'ExerciseOverview',
    props: {
      exercise: Object,
      expanded: Boolean
    }
  };
  </script>
  