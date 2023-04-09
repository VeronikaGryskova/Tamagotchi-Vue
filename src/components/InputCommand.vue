<template>
  <textarea
    class="inputCommand"
    placeholder="Insert your command..."
    @input="input"
  ></textarea>
</template>

<script>
export default {
  props: {
    input: Function,
  },
};
</script>

<style lang="scss" scoped>
.inputCommand {
  padding: 10px;
  width: 780px;
  height: 40px;
  background: #ffffff;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.7);
  border: 0;
  resize: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #bdc3c7;
}
@media screen and (max-width: 900px) {
  .inputCommand {
    width: 658px;
  }
}

@media screen and (max-width: 768px) {
  .inputCommand {
    width: 300px;
    height: 100px;
  }
}
</style>
