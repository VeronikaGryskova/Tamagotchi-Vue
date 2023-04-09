<template>
  <TitleGame></TitleGame>
  <div class="fieldOfPlay">
    <div class="states">
      <StateBar title="Здоровье:" color="health" :progress="health"></StateBar>
      <StateBar title="Жажда:" color="thirst" :progress="thirst"></StateBar>
      <StateBar title="Голод:" color="hunger" :progress="hunger"></StateBar>
      <StateBar
        title="Усталость:"
        color="fatigue"
        :progress="fatigue"
      ></StateBar>
    </div>

    <div class="controls">
      <ManagementControl title="есть" color="eat" :onClick="eat" />
      <ManagementControl title="пить" color="drink" :onClick="drink" />
      <ManagementControl title="отдохнуть" color="relax" :onClick="relax" />
      <ManagementControl title="работать" color="work" :onClick="work" />
    </div>

    <InputCommand :value="command" @input="change"></InputCommand>
  </div>

  <ActionList :actionCommand="actionCatalog"></ActionList>
  <RouterLink to="/history">История</RouterLink>
</template>

<script>
import StateBar from "../StateBar.vue";
import ManagementControl from "../ManagementControl.vue";
import TitleGame from "../TitleGame.vue";
import InputCommand from "../InputCommand.vue";
import ActionList from "../ActionList.vue";
export default {
  name: "App",
  components: {
    StateBar,
    ManagementControl,
    TitleGame,
    InputCommand,
    ActionList,
  },
  data() {
    return {
      health: 50,
      thirst: 50,
      hunger: 50,
      fatigue: 50,
      command: "",
      actionCatalog: [],
    };
  },
  methods: {
    check(newState) {
      if (newState <= 0) {
        return 0;
      }
      if (newState >= 100) {
        return 100;
      }
      return newState;
    },
    eat() {
      this.health = this.check(this.health - 2);
      this.hunger = this.check(this.hunger - 10);
      this.actionCatalog.push("Вы съели яблоко");
      this.$store.state.count.push("Вы съели яблоко");
    },
    drink() {
      this.health = this.check(this.health - 1);
      this.thirst = this.check(this.thirst - 10);
      this.actionCatalog.push("Вы попили воды");
      this.$store.state.count.push("Вы попили воды");
    },
    relax() {
      this.health = this.check(this.health + 10);
      this.fatigue = this.check(this.fatigue - 10);
      this.hunger = this.check(this.hunger - 10);
      this.actionCatalog.push("Вы отдохнули");
      this.$store.state.count.push("Вы отдохнули");
    },
    work() {
      this.thirst = this.check(this.thirst + 30);
      this.hunger = this.check(this.hunger + 10);
      this.fatigue = this.check(this.fatigue + 10);
      this.actionCatalog.push("Вы поработали");
      this.$store.state.count.push("Вы поработали");
    },
    change() {
      this.command = event.target.value;
      console.log(this.command);
      this.executingManualCommand(this.command);
    },
    executingManualCommand() {
      if (!this.command.includes(" ") === true) {
        console.log("ura");
        this.checkCommand(this.command);
      } else {
        let i;
        const newCommand = [];

        outer: for (i = 1; i <= this.command.length; i++) {
          if (this.command.at(-i) !== " ") {
            newCommand.unshift(this.command.at(-i));
          } else {
            break outer;
          }
          console.log(newCommand.join(""));
          this.checkCommand(newCommand.join(""));
        }
      }
    },
    checkCommand(action) {
      switch (action) {
        case "есть":
          this.eat();
          break;
        case "пить":
          this.drink();
          break;
        case "отдохнуть":
          this.relax();
          break;
        case "работать":
          this.work();
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fieldOfPlay {
  width: 860px;
  height: 355px;
  display: flex;
  flex-flow: row wrap;

  column-gap: 40px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}
.states {
  width: 380px;
  height: 195px;
  background: #ffffff;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.controls {
  width: 380px;
  height: 195px;
  background: #ffffff;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
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

@media screen and (max-width: 900px) {
  .fieldOfPlay {
    width: 738px;
    height: 349px;
  }

  .states {
    width: 319px;
  }
  .controls {
    width: 319px;
  }
}

@media screen and (max-width: 768px) {
  .fieldOfPlay {
    margin-top: 20px;
    width: 360px;
    height: 600px;
  }

  .states {
    width: 320px;
  }
  .controls {
    width: 320px;
  }
}
</style>
