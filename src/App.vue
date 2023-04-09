<template>
  <router-view> </router-view>
</template>

<style lang="scss">
body {
  background: #eeeeee;
}
#app {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  #app {
    margin-top: 30px;
    gap: 0;
  }
}
</style>
