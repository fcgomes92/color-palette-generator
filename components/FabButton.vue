<template>
  <button class="fab" @click="handleClick($event.target.value)">
    <span v-if="loading">
      <loading />
    </span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script>
import Loading from './Loading';
export default {
  name: 'FabButton',
  components: {
    Loading,
  },
  props: {
    label: {
      type: String,
      default: '+',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(target) {
      if (!this.loading) this.$emit('click', target);
    },
  },
};
</script>

<style lang="scss" scoped>
$size: 4rem;
$color: #386f53;
.fab {
  color: #fff;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border: none;
  background: none;
  height: $size;
  width: $size;
  font-size: $size / 2;
  border-radius: 50%;
  background-color: $color;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: darken($color, 7%);
  }
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: lighten($color, 7%);
  }
}
</style>
