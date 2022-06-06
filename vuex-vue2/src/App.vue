<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result />
        <another-result />
        <hr>
        <app-counter />
        <another-counter />
        <any-counter />
      </div>
    </div>
  </div>
</template>

<script>
import AnotherCounter from './components/AnotherCounter.vue';
import TheCounter from './components/TheCounter.vue';
import TheResult from './components/TheResult.vue';
import AnotherResult from './components/AnotherResult.vue';
import AnyCounter from './components/AnyCounter.vue';

export default {
  components: {
    appCounter: TheCounter,
    appResult: TheResult,
    anotherResult: AnotherResult,
    anotherCounter: AnotherCounter,
    anyCounter: AnyCounter,
  },
};
</script>
