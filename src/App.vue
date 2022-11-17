<template>
  <v-app>
    <v-main>
        <excursion-list :excursions="excursions" />
<!--        <excursion-list :excursions="excursions" :separator="separator.icon" />-->
    </v-main>
  </v-app>
</template>

<script>
import ExcursionList from "@/Pages/ExcursionList";
export default {
  name: 'App',
  components: {
    ExcursionList,
  },

  data: () => ({
    excursions: [
      {
        id: '1',
        title: 'Город сыра и мира',
        tags: [
            {icon: 'mdi-star', text: '5'},
            {text: 'Историческая'},
            {icon: 'mdi-bus', text: 'На автобусе'},
            {text: '28 марта'},
            {icon: 'mdi-clock', text: '9 часов'}
        ],
      },
      {
        id: '2',
        title: 'Экскурсия в национальный парк "Куршская коса"',
        tags: [
          {icon: 'mdi-star', text: '5'},
          {text: 'Обзорная'},
          {icon: 'mdi-bus', text: 'На автобусе'},
          {text: '25 марта'},
          {icon: 'mdi-clock', text: '6 часов'}
        ],
      },
      {
        id: '3',
        title: '"О кирках, рыцарях и замках"',
        tags: [
          {icon: 'mdi-star', text: '5'},
          {text: 'Историческая'},
          {icon: 'mdi-bus', text: 'На автобусе'},
          {text: '29 марта'},
          {icon: 'mdi-clock', text: '6 часов'}
        ],
      },
      {
        id: '4',
        title: 'Экскурсия в Янтарный',
        tags: [
          {text: 'Историческая'},
          {icon: 'mdi-bus', text: 'На автобусе'},
          {text: '29 марта'},
          {icon: 'mdi-clock', text: '6 часов'},
          {icon: 'mdi-account', text: 'до 49'}
        ],
      },
    ],
    // separator: {icon: 'mdi-circle-small'},
  }),
};
</script>

<style scoped></style>
