<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <!--      сдвинуть в правый угол-->
    <!--            <v-spacer></v-spacer>-->

    <div class="d-flex align-center">
      <v-img
          alt="Технезис Logo"
          class="shrink mr-2"
          contain
          src="https://static.tildacdn.com/tild3761-3330-4632-b963-313263353933/logo_rus_string_blac.svg"
          transition="scale-transition"
          width="250"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>