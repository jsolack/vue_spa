<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{main_title}}
        </h1>
        <h2 class="subtitle">
          <span v-if="isAuthenticated">{{main_subtitle}}</span>
          <span v-else>Please log in</span>
        </h2>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      main_title: 'Data Tools',
      main_subtitle: 'Check it out'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>
