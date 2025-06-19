<template>
    <header class="flex items-center justify-between p-4">
        <Icon v-if="!cart" name="arrow-left" class="w-8 h-8 text-black cursor-pointer" />
        <Icon v-else name="bars-3" class="w-8 h-8 text-black cursor-pointer" />
        <h1 class="text-xl font-bold text-center text-text-pri">
            Mistery Box
        </h1>
        <Icon v-if="cart" name="shopping-cart" class="w-8 h-8 text-black cursor-pointer" />
    </header>
</template>

<script setup lang="ts">
const route = useRoute()
const cart = computed(() => {
    return route.path === '/' || route.path === '/promotions'
})

</script>

<style scoped>

</style>