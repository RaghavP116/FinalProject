<template>
  <header class="gym-header">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </header>
</template>

<script>
export default {
  name: 'GymHeader',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
.gym-header {
  text-align: center;
  padding: 20px;
  background: #2c3e50;
  color: white;
  margin-bottom: 30px;
}

.gym-header h1 {
  margin: 0;
  font-size: 2em;
}

.gym-header h2 {
  margin: 5px 0 0;
  font-size: 1.2em;
  font-weight: normal;
}
</style>