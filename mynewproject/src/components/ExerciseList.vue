<template>
  <div class="exercise-container">
    <ExerciseCard 
      v-for="exercise in exercises" 
      :key="exercise.id" 
      :exercise="exercise"
    />
  </div>
</template>

<script>
import ExerciseCard from './ExerciseCard.vue'

export default {
  name: 'ExerciseList',
  components: {
    ExerciseCard
  },
  props: {
    exercises: Array
  }
}
</script>

<style>
.exercise-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>