<template>
  <div v-if="isFetching" class="loader">Loading...</div>
  <div v-else class="weather-widget">
    <editable-title
      v-model="city.name"
      v-bind:defaultTitle="city.search"
      v-on:search-start="searchCity"
      placeholder="Search for location"
    />
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
import editableTitle from "../editable-title";

export default {
  components: {
    "editable-title": editableTitle
  },
  data: function() {
    return {
      city: {
        search: "London",
        id: null,
        name: null,
        contry: null
      },
      isFetching: false,
      weatherData: null
    };
  },
  methods: {
    searchCity(city) {
      console.log(city);
    }
  }
};
</script>

<style>
</style>
