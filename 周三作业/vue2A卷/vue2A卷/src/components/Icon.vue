<template>
  <div class="img">
    <img
      src="arrow-down.png"
      @click="$emit('click')"
      v-show="icon === 0"
      alt=""
    />
    <img
      src="arrow-red.png"
      @click="$emit('click')"
      v-show="icon === 1"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: Number,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.img {
  display: inline-block;
}
</style>