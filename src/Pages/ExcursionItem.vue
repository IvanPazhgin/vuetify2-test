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
        <excursion-tag :text="text" :icon="icon" :follow-top-item="followTop" />
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
  },

  mounted() {
    this.concat2Array()
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
    },
    concat2Array() {
      for (let tag of this.tags) {
        this.generalArray.push(tag, this.separator)
      }
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