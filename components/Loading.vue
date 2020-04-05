<template>
  <div class="fading-square" />
</template>
<script>
export default {
  name: 'Loading',
};
</script>
<style lang="scss" scoped>
$containerSize: 3rem;
$borderColor: #fff;
$animationTime: 1s;
$animationTimingFunction: linear;
$borderRadius: 50%;
.fading-square {
  width: $containerSize;
  height: $containerSize;
  border-style: solid;
  border-color: transparent;
  position: relative;

  &:before,
  &:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    border-style: solid;
    border-width: $containerSize / 2;
    border-color: transparent;
    z-index: 1;
    background: transparent;
  }

  &:before {
    // handle the top / bottom triangle
    border-top-color: blue;
    border-bottom-color: transparent;
    animation: fadeTopBottom $animationTime infinite both;
    animation-timing-function: $animationTimingFunction;
    border-radius: $borderRadius;
  }

  &:after {
    // handle the right / left triangle
    border-right-color: transparent;
    border-left-color: transparent;
    animation: fadeRightLeft $animationTime 0.1s infinite both;
    animation-timing-function: $animationTimingFunction;
    border-radius: $borderRadius;
  }
}

@keyframes fadeTopBottom {
  0% {
    border-top-color: $borderColor;
    border-bottom-color: transparent;
  }
  25% {
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
  50% {
    border-top-color: transparent;
    border-bottom-color: $borderColor;
  }
  75% {
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
  100% {
    border-top-color: $borderColor;
    border-bottom-color: transparent;
  }
}

@keyframes fadeRightLeft {
  0% {
    border-right-color: transparent;
    border-left-color: transparent;
  }
  25% {
    border-right-color: $borderColor;
    border-left-color: transparent;
  }
  50% {
    border-right-color: transparent;
    border-left-color: transparent;
  }
  75% {
    border-right-color: transparent;
    border-left-color: $borderColor;
  }
  100% {
    border-right-color: transparent;
    border-left-color: transparent;
  }
}
</style>
