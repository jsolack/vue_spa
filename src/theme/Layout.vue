<template v-cloak>
  <div id="app">
    <app-header></app-header>
    <hero></hero>
    <section class="main-section section">
      <div class="container content">
        <!-- Vue router will load in the Category component on the '/' path -->
        <transition appear name="slide-fade">
          <router-view v-bind:key="$route.params.id"></router-view>
        </transition>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import AppHeader from './AppHeader.vue'
  import Hero from './Hero.vue'
  import AppFooter from './AppFooter.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'hero': Hero,
      'app-footer': AppFooter
    }
  }
</script>
<style lang="scss">
  $primary: #658396;
  $link: #658396;
  @import '~bulma';

  [v-cloak] {
    display: none;
  }
  .columns{
    flex-wrap: wrap;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all 0s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
