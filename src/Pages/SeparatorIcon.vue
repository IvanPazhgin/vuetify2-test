<template>
  <v-icon> {{ separator }} </v-icon>
</template>

<script>
export default {
  name: "SeparatorIcon",
  props: {
    separator: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>

</style>