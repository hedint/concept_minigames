<template>
  <div class="hello">
    <span>PROPS: {{ msg }}</span>
    <button @click="inc">УВЕЛИЧЬ МЕНЯ</button>
    <div>{{ counter }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    inc() {
      this.$store.commit("incCount");
    }
  }
};
</script>
