<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/">
          <img class="image is-64x64" src="/static/img/logo.png" alt="vue spa" />
        </a>
        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{main_title}}
          </h1>
          <h2 class="subtitle">
            {{main_subtitle}}
          </h2>
        </div>
      </div>
    </section>
    <section class="main-section section">
      <div class="container content">
        <div class="columns">
          <div class="column is-one-third" v-for="(card, index) in cards" v-bind:key="card.id">
            <div class="card">
              <div class="card-content">
                <h3>{{ card.title }}</h3>
                {{ card.content }}
              </div>
              <footer class="card-footer">
                <a class="card-footer-item" v-bind:href="card.link" target="_blank">Read More</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          Footer!
          <a href="#">Link</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        main_title: 'Data Tools',
        main_subtitle: 'Check it out',
        cards: [
          { id: 1, title: 'Card 1', content: 'content for this card', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 2, title: 'Card 2', content: 'content for this card', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 3, title: 'Card 3', content: 'content for this card', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 4, title: 'Card 4', content: 'content for this card', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 5, title: 'Card 5', content: 'content for this card', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 6, title: 'Card 6', content: 'content for this card', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' }
        ]
      }
    }
  }
</script>
<style lang="scss">
  @import '~bulma';

  .columns{
    flex-wrap: wrap;
  }
</style>
