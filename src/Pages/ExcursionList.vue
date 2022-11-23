<template>
  <div>
    <div v-for="{id, title, tags} in excursions" :key="id">
<!--      <excursion-item :title="title" :tags="tags" :separator-icon="separator" />-->
      <excursion-item :title="title" :tags="tags" :justify-content="justifyContent" />
    </div>
  </div>
</template>

<script>
import ExcursionItem from "@/Pages/ExcursionItem";
export default {
  name: "ExcursionList",
  components: {ExcursionItem},

  props: {
    excursions: {
      type: Array,
      required: true
    },
    justifyContent: {
      type: String,
      required: true,
    },
    // separator: {
    //   type: String,
    //   required: true
    // },
  }
}
</script>

<style scoped></style>