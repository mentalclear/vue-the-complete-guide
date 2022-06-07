<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result />
        <another-result />
        <hr>
        <!-- <app-counter />
        <another-counter /> -->
        <any-counter />
        <hr>
        <label for="inp">
          <input
            id="inp"
            v-model="value"
            type="text"
          >
        </label>
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import AnotherCounter from './components/AnotherCounter.vue';
// import TheCounter from './components/TheCounter.vue';
import TheResult from './components/TheResult.vue';
import AnotherResult from './components/AnotherResult.vue';
import AnyCounter from './components/AnyCounter.vue';

export default {
  components: {
    // appCounter: TheCounter,
    appResult: TheResult,
    anotherResult: AnotherResult,
    // anotherCounter: AnotherCounter,
    anyCounter: AnyCounter,
  },
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      },
    },
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    },
  },
};
</script>
