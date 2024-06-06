<template>
  <button class="btn" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton",
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: pink;
  font-size: 22px;
}
</style>
