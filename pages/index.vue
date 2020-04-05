<template>
  <div>
    <h2 class="title">Click on + to generate a palette</h2>
    <div
      v-for="(palette, index) in palettes"
      :key="index"
      class="palette-picker-generator"
    >
      <hr v-if="index !== 0" class="palette-picker-generator__divider" />
      <h3 class="palette-picker-generator__palette-name">
        {{ palette.name }}
      </h3>
      <div class="palette-picker-generator__palette-wrapper">
        <color-card
          v-for="color in palette.colors"
          :key="color"
          :color="color"
        />
      </div>
    </div>
    <fab-button :loading="gettingPalette" label="+" @click="getPalette" />
  </div>
</template>

<script>
import { generateName } from '../utils/nameGenerator';
import FabButton from '../components/FabButton';
import ColorCard from '../components/ColorCard';
export default {
  name: 'PalettePicker',
  components: { FabButton, ColorCard },
  methods: {
    async getPalette() {
      try {
        this.gettingPalette = true;
        const {
          data: { colors },
        } = await this.$axios.get('/api/palette');
        this.palettes = [
          {
            colors,
            name: generateName(),
          },
          ...this.palettes,
        ];
      } catch (err) {
        console.error('Error getting palette', err);
      } finally {
        this.gettingPalette = false;
      }
    },
  },
  data: () => {
    return {
      gettingPalette: false,
      palettes: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  padding: 0 2rem;
}
.palette-picker-generator {
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__divider {
    width: 100%;
    margin: 1rem 0;
  }
  &__palette-name {
    margin: 0 0 0.8rem 0;
  }
  &__palette-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
