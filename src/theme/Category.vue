<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(card, index) in cards" v-bind:key="card.id">
      <app-card v-bind:card="card"></app-card>
    </div>  
  </div>
</template>
<script>
  import Card from './Card.vue'
  export default {
    components: {
      'app-card': Card
    },
    data () {
      return {
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
