<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" exact>
        <img class="image is-64x64" src="/static/img/logo.png" alt="vue spa" />
      </router-link>
      <router-link to="/" class="navbar-item is-tab" exact>
        Home
      </router-link>
      <router-link to="/login" class="navbar-item is-tab">
        Login
      </router-link>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>
