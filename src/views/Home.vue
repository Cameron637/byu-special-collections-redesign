<template>
  <v-carousel continuous height="300" hide-delimiters show-arrows></v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue { }
</script>
