<template>
  <div class="excursion-list">
    <h3>{{title}}</h3>
    <div class="excursion-list__excursion-item"
         ref="excursion_list"
    >
      <div
           v-for="({text, icon}, index) in generalArray"
           :key="index"
      >
<!--          <excursion-tag :text="text" :icon="icon" />-->
        <excursion-tag :text="text" :icon="icon" :follow-top-item="followTop" :index-tag="index" />
      </div>
    </div>
  </div>
</template>

<script>
import ExcursionTag from "@/Pages/ExcursionTag";
export default {
  name: "ExcursionItem",
  components: {
    ExcursionTag,
  },
  data: () => ({
    separator: {icon: 'mdi-circle-small', text: ''},
    followTop: 0,
    // hiddenTags: {
    //   tag0: true,
    //   tag1: true,
    //   tag2: true,
    //   tag3: true,
    //   tag4: true,
    //   tag5: true,
    //   tag6: true,
    //   tag7: true,
    //   tag8: true,
    //   tag9: true,
    //   tag10: true,
    //   tag11: true,
    //   tag12: true,
    //   tag13: true,
    // },
    generalArray: [],
  }),

  props: {
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    justifyContent: {
      type: String,
      required: true,
    },
    // separatorIcon: {
    //   type: String,
    //   required: true
    // }
  },

  mounted() {
    this.createGeneralArray()
    this.getDimensions()
    this.$refs.excursion_list.style.setProperty('--justifyContent', this.justifyContent)
    window.addEventListener('load', this.getDimensions);
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },

  methods: {
    getDimensions() {
      if (this.$refs.excursion_list) {
        // console.log('hi', this.$refs.excursion_list.getBoundingClientRect())
        this.followTop = this.$refs.excursion_list.getBoundingClientRect().top
      }
      // for (let i = 0; i < this.generalArray.length; i++) {
      //   const key = `tag${i}` // шаблоны
      //   if (this.$refs[key]) {
      //     const top = this.$refs[key][0].getBoundingClientRect().top
      //     console.log(`followTop for [${key}] = ${this.followTop}`)
      //     console.warn(`top[${key}] = ${top}`)
      //     if (this.followTop === top) {
      //       this.hiddenTags[key] = true
      //       // this.$refs[key][0].display = 'block'
      //     }
      //     else {
      //       this.hiddenTags[key] = false
      //       // this.$refs[key][0].display = 'none'
      //     }
      //   }
      // }
    },
    createGeneralArray() {
      for (let tag of this.tags) {
        this.generalArray.push(tag, this.separator)
      }
      // console.warn('generalArray ', this.generalArray)
      this.generalArray.pop()
    }
  },
}
</script>

<style lang="scss" scoped>
:root {
  --justifyContent: 'space-between',
}
.excursion-list {
  //font: $font-stack;

  // первый способ
  .excursion-list__excursion-item {
    justify-content: var(--justifyContent);
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .excursion-list__excursion-item_flex-wrap_nowrap {
      //display: block;
      white-space: nowrap;
      //&.hide{display: none}
    }
  }
}

//.separator + .hidden {display: none}
</style>