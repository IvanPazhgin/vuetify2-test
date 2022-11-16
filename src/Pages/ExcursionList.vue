<template>
  <v-container>
    <div v-for="{id, title, tags} in excursions" :key="id">
      <excursion-item :title="title" :tags="tags" />
    </div>
  </v-container>
</template>

<script>
import ExcursionItem from "@/Pages/ExcursionItem";
export default {
  name: "ExcursionList",
  components: {ExcursionItem},

  props: {
    excursions: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>