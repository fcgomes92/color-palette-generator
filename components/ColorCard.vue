<template>
  <div
    class="color-card"
    :style="{ backgroundColor: `#${color}` }"
    @click="copy"
  >
    <span class="color-card__text">#{{ color }}</span>
  </div>
</template>

<script>
import { copyToClipboard } from '../utils/copy';
export default {
  name: 'ColorCard',
  props: {
    color: {
      type: String,
      default: 'not-defined',
    },
  },
  methods: {
    copy(color) {
      copyToClipboard(`#${this.color}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.color-card {
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  position: relative;
  &__text {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.4rem;
    background-color: #333;
    color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}
</style>
