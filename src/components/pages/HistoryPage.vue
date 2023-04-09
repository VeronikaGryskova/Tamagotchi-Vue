<template>
  <div class="listHistory">
    <ActionList :actionCommand="$store.state.count"></ActionList>
    <RouterLink to="/">Назад</RouterLink>
  </div>
</template>

<script>
import ActionList from "../ActionList.vue";
export default {
  components: {
    ActionList,
  },
};
</script>

<style lang="scss" scoped>
.listHistory {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

a {
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  color: gray;
}
</style>
