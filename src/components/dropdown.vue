<template>
  <div class="dropdown dropdown-grey dropdown-big" :class="{opened: opened}">
    <div class="dropdown-value" @click="toggle()">{{activeValue}}</div>
    <div class="dropdown-content">
      <ul>
        <li v-for="(item, key) in items" :key="key" @click="select(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-dropdown",
  props: {
    items: Array
  },
  data() {
    return {
      opened: false,
      activeValue: this.items[0]
    };
  },
  mounted() {},
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    select(item) {
      this.activeValue = item;
      this.opened = false;
    }
  }
};
</script>