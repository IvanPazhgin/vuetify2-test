<template>
<!-- <v-container class="v-flex">-->

   <span>
     <v-icon v-if="icon" >
       {{icon}}
     </v-icon>
     {{text}}
   </span>

<!-- </v-container>-->
</template>

<script>
export default {
  name: "ExcursionTag",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
  }
}
</script>

<style scoped></style>