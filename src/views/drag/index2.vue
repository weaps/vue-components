<template>
  <div id="app">
    <transition-group name="list" tag="div">
      <drag v-for="n in numbers" :key="n" class="drag" :data="n" @cut="remove(n)"><el-button>{{n.title}}</el-button></drag>
    </transition-group>
    <drop class="drop even" @drop="onEvenDrop" :accepts-data="(n) => n.size !== 1">
      <span v-for="(n, index) in evenDropped" :key="index">Dropped : {{n.title}},&nbsp;</span>
    </drop>
    <drop class="drop odd" @drop="onOddDrop(n)" :accepts-data="(n) => n % 2 === 0">
      <span v-for="(n, index) in oddDropped" :key="index">Dropped : {{n.title}},&nbsp;</span>
    </drop>
    <drop class="drop any" @drop="onAnyDrop(n)" mode="cut">
      <span v-for="(n, index) in anyDropped" :key="index">Dropped : {{n.title}},&nbsp;</span>
    </drop>
  </div>
</template>

<script>
import { Drag, Drop } from "vue-easy-dnd";

export default {
  name: "App",
  components: {
    Drag,
    Drop
  },
  data: function() {
    return {
      numbers: [
        {
          size: 1,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Summer BBQ",
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        }
      ],
      evenDropped: [],
      oddDropped: [],
      anyDropped: []
    };
  },
  methods: {
    onEvenDrop(event) {
      debugger
      this.evenDropped.push(event.data);
    },
    onOddDrop(event) {
      debugger
      this.oddDropped.push(event.data);
    },
    onAnyDrop(event) {
      this.anyDropped.push(event.data);
    },
    remove(n) {
      let index = this.numbers.indexOf(n);
      this.numbers.splice(index, 1);
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Roboto";
}

.drag {
  width: 60px;
  height: 60px;
  background-color: rgb(220, 220, 255);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 10px;
  font-size: 20px;
  transition: all 0.5s;
}

.drop {
  margin: 20px 10px;
  height: 80px;
  border: 1px solid black;
  position: relative;
}

.drop::before {
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  opacity: 0.2;
  white-space: nowrap;
}

.drop.even::before {
  content: "COPIES EVEN NUMBERS";
}

.drop.odd::before {
  content: "COPIES ODD NUMBERS";
}

.drop.any::before {
  content: "CUT ANY NUMBERS";
}

.drop-allowed {
  background-color: rgba(0, 255, 0, 0.2);
}

.drop-forbidden {
  background-color: rgba(255, 0, 0, 0.2);
}

.drop-in {
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.4);
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>
