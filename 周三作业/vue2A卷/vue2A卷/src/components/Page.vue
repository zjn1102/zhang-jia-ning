<template>
  <ul>
    <li
      @click="
        show = !show;
        active = 0;
      "
      :class="{ active: show && active === 0 }"
    >
      1
    </li>
    <li
      @click="
        show = !show;
        active = 1;
      "
      :class="{ active: show && active === 1 }"
    >
      2
    </li>
    <li
      @click="
        show = !show;
        active = 2;
      "
      :class="{ active: show && active === 2 }"
    >
      3
    </li>
  </ul>
</template>

<script>
export default {
  name: "Page",

  data() {
    return {
      show: false,
      active: 0,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    float: left;
    padding: 3px 10px;
    border: 1px solid blue;
    margin: 10px;

    &.active {
      background-color: #9999;
    }
  }
}
</style>