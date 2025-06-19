<template>
    <footer class="p-4 border-b border-[#F1F4F3]">
        <nav>
            <ul class="flex items-center justify-between px-4 w-full">
                <li>
                    <NuxtLink to="/" :class="`${route.path === '/' ? 'text-text-sec' : 'text-text-pri'} flex flex-col justify-center items-center hover:text-text-sec transition-colors`">
                        <Icon name="home" class="w-8 h-8" />
                        <span class="text-sm font-semibold">Home</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/promotions" :class="`${route.path === '/promotions' ? 'text-text-sec' : 'text-text-pri'} flex flex-col justify-center items-center hover:text-text-sec transition-colors`">
                        <Icon name="gift" class="w-8 h-8" />
                        <span class="text-sm font-semibold">Promotion</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" :class="`${route.path === '/about' ? 'text-text-sec' : 'text-text-pri'} flex flex-col justify-center items-center hover:text-text-sec transition-colors`">
                        <Icon name="information-circle" class="w-8 h-8" />
                        <span class="text-sm font-semibold">About</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>

</style>