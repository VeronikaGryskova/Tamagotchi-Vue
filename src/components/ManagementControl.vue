<template>
  <button class="managementControl" :class="color" @click="onClick">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
    onClick: Function,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.managementControl {
  width: 340px;
  height: 31px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  color: #fff;
  border: 0;
  border-radius: 5px;

  cursor: pointer;
  &.eat {
    background-color: #e74c3c;
    box-shadow: 0px 0px 3px rgba(231, 76, 60, 0.5);
  }
  &.drink {
    background-color: #3498db;
    box-shadow: 0px 0px 3px rgba(52, 152, 219, 0.5);
  }
  &.relax {
    background-color: #e67e22;
    box-shadow: 0px 0px 3px rgba(230, 126, 34, 0.5);
  }
  &.work {
    background-color: #95a5a6;
    box-shadow: 0px 0px 3px rgba(149, 165, 166, 0.5);
  }
}
@media screen and (max-width: 900px) {
  .managementControl {
    width: 279px;
  }
}

@media screen and (max-width: 768px) {
  .managementControl {
    width: 280px;
  }
}
</style>
