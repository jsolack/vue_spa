<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" exact>
        <img class="image is-64x64" src="/static/images/logo.png" alt="vue spa" />
      </router-link>
      <router-link to="/category/data" class="navbar-item is-tab">
        Dynamic Data
      </router-link>
      <router-link v-bind:to="{ name: 'category', params: { id: 'automation' } }" class="navbar-item is-tab">
        Automation
      </router-link>
      <router-link to="/login" class="navbar-item is-tab">
        <span v-if="isAuthenticated">Logout</span>
        <span v-else>Login</span>
      </router-link>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>
<script>
// mappGetters helper from vuex library
import { mapGetters } from 'vuex'
export default {
  computed: {
    // map stored getters to local computed properties
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

