<template>
  <div class="excursion-list">
    <div class="excursion-list__excursion-item">
      <div class="excursion-list__excursion-item_flex-wrap_nowrap"
           v-for="({text, icon}, index) in tags"
           :key="index"
      >
        <separator-icon v-if="index" :separator="separatorIcon" />
        <excursion-tag :text="text" :icon="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import ExcursionTag from "@/Pages/ExcursionTag";
import SeparatorIcon from "@/Pages/SeparatorIcon";
export default {
  name: "ExcursionItem",
  components: {
    ExcursionTag,
    SeparatorIcon
  },

  props: {
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    separatorIcon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>