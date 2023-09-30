<template>
  <div>
    <div :style="backgroundImage">Test</div>
  </div>
</template>
<script setup lang="ts">
const img = useImage();
const backgroundImage = computed(() => {
  const imgUrl = img('/images/header-big.jpg', {
    format: 'webp',
    width: 1920,
    height: 1820,
  });
  return { backgroundImage: `url('${imgUrl}')` };
});
</script>