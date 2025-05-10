<template>
    <div class="details-content">
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
  </template>
  
  <script>
  export default {
    name: 'ExerciseDetails',
    props: {
      exercise: Object
    }
  };
  </script>
  