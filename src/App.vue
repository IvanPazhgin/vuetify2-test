<template>
  <v-app>
    <NavBar />

    <v-main>
<!--      <SecondPage v-for="array2 in array" :key="array2"/>-->
<!--      <SecondPage />-->

<!--      <hr color="blue">-->
<!--      <h3>App</h3>-->
<!--      Пропсы:-->
<!--      строка ниже - копия строки 20-->
<!--      <h4 v-for="array2 in array" :key="array2">{{array2}}</h4>-->

<!--      <hr color="orange">-->
<!--      Оъект в App:-->
<!--      <h4 v-for="item in obj" :key="item.message">{{ item.message }}</h4>-->
<!--      <br />-->
<!--      Массив в App:-->
<!--      <h4 v-for="item in array" :key="item">{{ item }}</h4>-->

<!--      <third-page obj2="" array2="" />-->
<!--      <third-page obj2="obj2" array2="array2" />-->
<!--      <third-page :array2="array" :obj2="obj" />-->

        <excursion-list :excursions="excursions" />

    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
// import SecondPage from "@/Pages/SecondPage";
// import ThirdPage from "@/Pages/ThirdPage";
import ExcursionList from "@/Pages/ExcursionList";
export default {
  name: 'App',
  components: {
    // SecondPage,
    NavBar,
    ExcursionList,
    // ThirdPage,
  },

  data: () => ({
    array: ['Историческая', 'На автобусе', '18 ноября', '6 часов', 'до 49'],

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
    separator: {icon: 'mdi-circle-small'},


    obj: [
        { message: 'foo' },
        { message: 'bar' }
    ],
  }),
};
</script>

<style scoped>
h4 {
  /*display: flex;*/
}

h3 {
  color: red
}
</style>
