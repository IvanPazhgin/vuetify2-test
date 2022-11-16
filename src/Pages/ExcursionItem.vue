<template>
  <v-container>
    <h3>{{title}}</h3>
    <v-card
        class="d-flex flex-row"
        flat
    >
        <v-card
            class="pa-2"
            flat
            v-for="({text, icon}, index) in tags"
            :key="index"
        >
            <span class="mr-3" v-if="index"> • </span>
            <excursion-tag :text="text" :icon="icon"/>
        </v-card>
    </v-card>
  </v-container>
</template>

<script>
import ExcursionTag from "@/Pages/ExcursionTag";
export default {
  name: "ExcursionItem",
  components: {ExcursionTag},

  props: {
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>