<script>
import HeaderVue from './components/HeaderVue.vue';

  export default {
    name: 'main-app',
    components: {
      HeaderVue
    }
  }

</script>

<template>

  <HeaderVue></HeaderVue>
  <RouterView />

</template>


<style lang="scss">

@use './scss/main.scss' as *;


</style>