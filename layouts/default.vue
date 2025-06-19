<template>
    <div class="flex flex-col min-h-screen h-screen">
  <Header />
  <hr class="border-t-2 border-[#F1F4F3]" />
  <main class="flex-1 h-full overflow-y-auto">
    <slot />
  </main>
  <hr class="border-t-2 border-[#F1F4F3]" />
  <NavigationBar class="md:hidden"/>
</div>

</template>

<script setup lang="ts">
useColors()
</script>

<style scoped>

</style>