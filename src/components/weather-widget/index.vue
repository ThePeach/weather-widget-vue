<template>
  <div class="weather-widget">
    <editable-title
      :title="cityWithCountry"
      v-on:search-start="searchCity"
      placeholder="Search for location"
    ></editable-title>
    <div v-if="isFetching" class="loader">Loading...</div>
    <dl class="weather-data" v-if="weatherData.timestamp && !isFetching">
      <dt class="weather-data__temp--label">Temperature</dt>
      <dd class="weather-data__temp">{{weatherData.temperature.amount.toFixed(1)}}</dd>
      <dt class="weather-data__conditions--label">Conditions</dt>
      <dd class="weather-data__conditions">{{weatherData.text}}</dd>
      <dt class="weather-data__cloud--label">Cloud coverage</dt>
      <dd class="weather-data__cloud">{{weatherData.coverage}}%</dd>
      <dt class="weather-data__wind--label">Wind</dt>
      <dd
        class="weather-data__wind"
      >{{weatherData.wind.speed}} m/s - {{weatherData.wind.direction}}º</dd>
    </dl>
  </div>
</template>

<script>
import editableTitle from "../editable-title";
import location from "../../api-library/openweathermap";

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
      weatherData: {
        text: null,
        timestamp: null,
        coverage: null,
        precipitation: null,
        temperature: {
          amount: null
        },
        wind: {
          speed: null,
          direction: null
        }
      }
    };
  },
  computed: {
    cityWithCountry() {
      return this.city.name && this.city.country
        ? this.city.name + ", " + this.city.country
        : this.city.search;
    }
  },
  methods: {
    searchCity(city) {
      this.isFetching = true;
      location.currentConditions(city).then(data => {
        this.isFetching = false;
        this.city = {
          ...data.city,
          search: city
        };
        this.weatherData = {
          text: data.text,
          timestamp: data.timestamp,
          coverage: data.coverage,
          precipitation: data.precipitation,
          temperature: data.temperature,
          wind: data.wind
        };
        this.fullname = this.cityWithCountry;
      });
    }
  }
};
</script>

<style>
</style>
