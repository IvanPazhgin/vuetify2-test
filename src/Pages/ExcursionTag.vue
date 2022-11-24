<template>
  <div class="excursion-tag"
       ref="excursion_tag"
  >
    <div
        :class="{
            hide: !hiddenTag,
            'excursion-tag2': true
        }"
    >
       <v-icon v-if="icon"> {{ icon }} </v-icon>
       {{text}}
    </div>
  </div>
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
    followTopItem: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    hiddenTag: true,
  }),
  mounted() {
    this.getDimensions()
    window.addEventListener('load', this.getDimensions);
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },

  methods: {
    getDimensions() {
          const top = this.$refs.excursion_tag.getBoundingClientRect().top
          // console.log('followTopItem in Child', this.followTopItem)
          // console.log(`topInChild = ${top}`)
          if (this.followTopItem === top) {
            // this.$refs.excursion_tag.style.setProperty('--display', 'none')
            this.hiddenTag = true
            // this.$refs.excursion_tag.style.display = 'block'
            // this.$refs[key][0].display = 'block'
          }
          else {
            // this.$refs.excursion_tag.style.setProperty('--display', 'flex')
            this.hiddenTag = false
            // this.$refs.excursion_tag.style.display = 'none'
            // this.$refs[key][0].display = 'none'
          }
    }
  },
}
</script>

<style lang="scss" scoped>
//:root {
//  --display: 'block',
//}
.excursion-tag {
  //display: flex;
  //flex-wrap: wrap;
  //overflow: hidden;

  .excursion-tag2 {
    //display: var(--display);
    //&.hide{display: none}
    //&.hide{overflow: hidden}
    //overflow: var(--display)
    &.hide{ visibility: hidden }
    //white-space: nowrap;
    //position: absolute;
  }
}
</style>