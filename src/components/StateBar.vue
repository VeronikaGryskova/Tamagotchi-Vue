<template>
  <div class="stateBar">
    <div class="stateBar_title">{{ title }}</div>
    <div class="stateBar_background">
      <div
        class="stateBar_background_body"
        :class="color"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stateBar",
  props: {
    title: String,
    color: String,
    progress: Number,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.stateBar {
  &_title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: black;
  }

  &_background {
    margin-top: 5px;
    width: 340px;
    height: 10px;
    border: 1px solid #34495e;
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));

    &_body {
      height: 10px;
      &.health {
        background: #e74c3c;
      }
      &.thirst {
        background-color: #3498db;
      }
      &.hunger {
        background-color: #e67e22;
      }
      &.fatigue {
        background-color: #95a5a6;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .stateBar {
    &_background {
      width: 279px;
    }
  }
}

@media screen and (max-width: 768px) {
  .stateBar {
    &_background {
      width: 280px;
    }
  }
}
</style>
