<template>
  <div>
    <GymHeader title="Fitness Exercises" subtitle="Complete Workout Guide"/>
    <div class="exercise-container">
      <ExerciseCard
        v-for="exercise in exercises"
        :key="exercise.id"
        :exercise="exercise"
        :expanded="expandedExercise === exercise.id"
        @toggleDetails="toggleDetails"
      />
    </div>
  </div>
</template>

<script>
import GymHeader from './components/GymHeader.vue';
import ExerciseCard from './components/ExerciseCard.vue';

export default {
  name: 'App',
  components: {
    GymHeader,
    ExerciseCard
  },
  data() {
    return {
      exercises: [],
      expandedExercise: null
    };
  },
  methods: {
    toggleDetails(id) {
      this.expandedExercise = this.expandedExercise === id ? null : id;
    }
  },
  async created() {
    const response = await fetch('https://finalproject-t41i.onrender.com/api');
    this.exercises = await response.json();
  }
};
</script>

<style>
/* Global styles */
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
</style>
