<template>
  <div v-if="isFetching" class="loader">Loading...</div>
  <div v-else class="weather-widget">
    <div class="editable-title">
      <h2 class="editable-title__title">Name of City, Country Code</h2>
      <button onClick="{this.makeTitleEditable}" class="editable-title__button">×</button>
    </div>
    <dl class="weather-data">
      <dt class="weather-data__temp--label">Temperature</dt>
      <dd class="weather-data__temp">15</dd>
      <dt class="weather-data__conditions--label">Conditions</dt>
      <dd class="weather-data__conditions">Rain</dd>
      <dt class="weather-data__cloud--label">Cloud coverage</dt>
      <dd class="weather-data__cloud">50%</dd>
      <dt class="weather-data__wind--label">Wind</dt>
      <dd class="weather-data__wind">5 m/s - 144º</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      city: {
        search: null,
        id: null,
        name: null,
        contry: null
      },
      isFetching: false,
      weatherData: null
    };
  }
};
</script>

<style>
</style>
