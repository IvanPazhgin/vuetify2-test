<template>
  <v-container>
    <v-row>
      <v-col lg="4" offset-lg="1">
        <TagsUI />
      </v-col>
      <v-col lg="6" offset-lg="1">
        <TagsUI />
      </v-col>
    </v-row>

      <br/>
      <TagsUI />
    <div>
      Second Page:
      <br />
      <div :key="array2">
        массив = {{ array2 }}
      </div>
      массив = {{ array2 }}
      <br />
      объект = {{ obj2 }}
    </div>
  </v-container>

</template>

<script>
import TagsUI from "@/Pages/TagsUI";
// import NavBar from "@/components/NavBar";
export default {
  name: "SecondPage",
  components: {
    // NavBar,
    TagsUI
  },
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

</style>