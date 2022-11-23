<template>
     <span>
<!--       <v-icon v-if="indexTag"> {{ separator }}</v-icon>-->
       <v-icon v-if="icon"> {{ icon }} </v-icon>
       {{text}}
       <!--     <em>{{followTopItem}}</em>-->
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
    // followTopItem: {
    //   type: Number,
    //   required: true,
    // },
    // indexTag: {
    //   type: Number,
    //   required: true,
    // },
  },

  data: () => ({
    separator: 'mdi-circle-small',
    hiddenTag: true,
  }),

  // mounted() {
  //   this.getDimensions()
  //   window.addEventListener('resize', this.getDimensions);
  // },
  // unmounted() {
  //   window.removeEventListener('resize', this.getDimensions);
  // },

  // methods: {
  //   getDimensions() {
  //      // for (let i = 0; i < this.tags.length; i++) {
  //      //  const key = `tag${i}` // шаблоны
  //      //  if (this.$refs[key]) {
  //         console.log(this.$refs)
  //         const key = `tag${this.indexTag}`
  //         const top = this.$refs[key][0].getBoundingClientRect().top
  //         console.log('followTopItem in Child', this.followTopItem)
  //         console.log(`topInChild = ${top}`)
  //         if (this.followTopItem === top) {
  //           this.hiddenTag = true
  //           // this.$refs[key][0].display = 'block'
  //         }
  //         else {
  //           this.hiddenTag = false
  //           // this.$refs[key][0].display = 'none'
  //         }
  //     //   } // if (this.$refs[key])
  //     // } // for (let i = 0; i < this.tags.length; i++)
  //   }
  // },
}
</script>

<style scoped></style>