<template>
  <button class="btn" @click="handleClick">Button2</button>
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
  background-color: red;
}
</style>
