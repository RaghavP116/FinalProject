<template>
  <div class="exercise-block">
    <ExerciseOverview
      :exercise="exercise"
      :expanded="expanded"
      @toggleDetails="$emit('toggleDetails', exercise.id)"
    />
    <ExerciseDetails v-if="expanded" :exercise="exercise" />
  </div>
</template>

<script>
import ExerciseOverview from './ExerciseOverview.vue';
import ExerciseDetails from './ExerciseDetails.vue';

export default {
  name: 'ExerciseCard',
  components: {
    ExerciseOverview,
    ExerciseDetails
  },
  props: {
    exercise: {
      type: Object,
      required: true
    },
    expanded: {
      type: Boolean,
      required: true
    }
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
