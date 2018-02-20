<template v-cloak>
  <div id="app">
    <div class="main-section">
      <app-header></app-header>
      <hero v-if="['notfound'].indexOf($route.name) === -1"></hero>
      <section>
        <div class="content" ref="content">
          <transition appear name="slide-fade" mode="out-in">
          <!-- Vue router will load in the Category component on the '/' path -->
            <router-view v-bind:key="$route.params.id" class="data-items"></router-view>
          </transition>
        </div>
      </section>
    </div>
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

  /* css rules */
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  nav {
    position: absolute;
  }
  section {
    flex: 1 0 auto;
  }
  .main-section {
    padding: 0;
    flex: 1;
  }
  footer.footer {
    flex-shrink: 0;
    height: 10vh;
  }
  [v-cloak] {
    display: none;
  }
  .columns{
    flex-wrap: wrap;
  }
  .data-items {
    height: 100%;
    min-height: 400px;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
