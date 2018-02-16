<template>
  <div id="app">
    <app-header></app-header>
    <hero></hero>
    <section class="main-section section">
      <div class="container content">
        <category></category>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import AppHeader from './AppHeader.vue'
  import Hero from './Hero.vue'
  import AppFooter from './AppFooter.vue'
  import Category from './Category.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'hero': Hero,
      'app-footer': AppFooter,
      'category': Category
    }
  }
</script>
<style lang="scss">
  @import '~bulma';

  .columns{
    flex-wrap: wrap;
  }
</style>
