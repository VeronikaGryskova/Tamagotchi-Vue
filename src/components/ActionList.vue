<template>
  <ul>
    <li v-for="(item, index) in actionCommand" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    actionCommand: Array,
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  li {
    width: 150px;
    height: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    padding: 0 15px;
    list-style-type: none;
    background: #ffffff;
    border: 0;
    box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
