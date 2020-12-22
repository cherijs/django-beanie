<template>
  <div @click="showDropdown">
    <slot></slot>
  </div>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      v-if="!drop_hidden"
      class="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <slot name="dropdown"></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "profiledropdown",
  data() {
    return {
      drop_hidden: true,
    };
  },
  methods: {
    showDropdown() {
      this.drop_hidden = !this.drop_hidden;
    },
  },
};
</script>
<style scoped></style>
