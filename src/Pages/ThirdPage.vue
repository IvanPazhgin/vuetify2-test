<template>
  <v-container>
    <hr>
    <h4>Third Page:</h4>
    <div :key="array2">
      массив = {{ array2 }}
    </div>
    массив = {{ array2 }}
    <br />
    объект = {{ obj2 }}
  </v-container>
</template>

<script>
export default {
  name: "ThirdPage",
  props: {
    array2: {
      type: Array,
      required: true
    },
    obj2: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h4 {
  color: blue
}
</style>