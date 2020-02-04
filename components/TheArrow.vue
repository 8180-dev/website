<template>
  <svg class="the-arrow" viewBox="0 0 29.69 17.41">
    <title>arrow</title>
    <g>
      <polyline class="a" points="0.5 0.5 8.71 8.71 0.5 16.91" />
      <polyline class="a" points="10.74 0.5 18.95 8.71 10.74 16.91" />
      <polyline class="a" points="20.98 0.5 29.19 8.71 20.98 16.91" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'TheArrow',
}
</script>

<style lang="scss" scoped>
.the-arrow {
  @include overlay;
  //
  .a {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}
</style>
