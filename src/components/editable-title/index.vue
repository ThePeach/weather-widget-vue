<template>
  <div class="editable-title">
    <form v-if="isEditable" v-on:submit.prevent="emitSearch">
      <input type="text" v-model="internalTitle" class="editable-title__input" id="title__input">
      <button v-on:click="toggleEditable" class="editable-title__button">Search</button>
    </form>
    <div v-else>
      <h2 class="editable-title__title" v-on:click="toggleEditable">{{ title }}</h2>
      <button v-on:click="toggleEditable" class="editable-title__button">×</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String
  },
  data: function() {
    return {
      isEditable: false,
      internalTitle: this.title
    };
  },
  methods: {
    toggleEditable() {
      this.isEditable = !this.isEditable;
    },
    emitSearch(event) {
      this.$emit("search-start", this.internalTitle);
    }
  }
};
</script>

<style>
</style>
