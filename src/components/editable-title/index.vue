<template>
  <div class="editable-title">
    <form v-if="isEditable" v-on:submit.prevent="emitSearch">
      <input type="text" v-model="title" class="editable-title__input" id="title__input">
      <button v-on:click="isEditable = false" class="editable-title__button">Search</button>
    </form>
    <div v-else>
      <h2 class="editable-title__title" v-on:click="makeEditable">{{ title }}</h2>
      <button v-on:click="makeEditable" class="editable-title__button">×</button>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "title",
    event: "change"
  },
  props: { defaultTitle: String, placeholder: String },
  data: function() {
    return {
      isEditable: false,
      title: this.defaultTitle
    };
  },
  methods: {
    makeEditable(event) {
      this.isEditable = true;
    },
    emitSearch(event) {
      this.$emit("search-start", event.target.title__input.value);
    }
  }
};
</script>

<style>
</style>
