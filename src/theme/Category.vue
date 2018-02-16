<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(card, index) in cards" v-bind:key="card.id">
      <app-card v-bind:link="card.link">
         <h3 slot="card-title">{{ card.title }}</h3>
         <p slot="card-content">{{ card.content }}</p>
      </app-card>
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
          { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 2, title: 'Card 2', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 3, title: 'Card 3', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 4, title: 'Card 4', content: 'Vivamus elementum malesuada risus ac dapibus. Suspendisse eget pulvinar est, in elementum ligula. Phasellus lobortis tortor eros, sit amet consectetur velit iaculis sed. Ut malesuada condimentum luctus.', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 5, title: 'Card 5', content: 'Donec vitae libero ut mi vestibulum malesuada fermentum eu quam. Maecenas at cursus tortor. Sed a semper est, at sagittis nisl. Duis facilisis elit id venenatis dignissim. Aenean non posuere diam. Quisque euismod accumsan dolor vel posuere. Pellentesque nec euismod metus, in lacinia mauris. Cras eu sollicitudin eros, vitae suscipit mauris. Donec pharetra turpis non volutpat sagittis. Sed convallis at massa ac blandit.', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' },
          { id: 6, title: 'Card 6', content: 'Proin mattis convallis velit, quis bibendum sapien luctus quis. Integer semper massa ullamcorper dui tincidunt efficitur. Duis ullamcorper ultricies dolor, nec ornare neque viverra vel. Etiam blandit molestie ullamcorper.', img: 'https://bulma.io/images/placeholders/640X480.png', link: '#' }
        ]
      }
    }
  }
</script>
