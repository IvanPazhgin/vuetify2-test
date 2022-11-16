<template>
   <span>
     <v-icon v-if="icon"> {{ icon }} </v-icon>
       {{text}}
   </span>
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