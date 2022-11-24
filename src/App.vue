<template>
  <v-app>
    <v-main>
      <h4>Компонент на всю ширину экрана с выравниванием по левому краю</h4>
      <excursion-list :excursions="excursions" :justify-content="justifyContent.left" />

      <hr>
      <h4>Компонент на всю ширину экрана с выравниванием по ширине</h4>
      <excursion-list :excursions="excursions" :justify-content="justifyContent.width" />

      <hr>
      <v-row no-gutters >
        <v-col class="pa-1">
          <h4>Компонент на 50% ширины экрана с выравниванием по левому краю</h4>
          <v-card outlined tile >
            <excursion-list :excursions="excursions" :justify-content="justifyContent.left" />
          </v-card>
        </v-col>
        <v-col class="pa-1">
          <h4>Компонент на 50% ширины экрана с выравниванием по ширине</h4>
          <v-card outlined tile >
            <excursion-list :excursions="excursions" :justify-content="justifyContent.width" />
          </v-card>
        </v-col>
      </v-row>

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
    justifyContent: {
      left: 'flex-start',
      width: 'space-between',
    },
  }),
};
</script>

<style scoped></style>