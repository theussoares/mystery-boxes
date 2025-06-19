<template>
    <article class="h-fit rounded-xl shadow-md bg-background-pri flex flex-col justify-between max-w-[384px] ">
        <section class="p-0 flex items-center z-1 w-full h-64">
            <NuxtImg
                :src="image"
                width="344"
                height="256"
                class="w-full h-full object-cover rounded-t-xl"
                alt="Mistery Box"
                format="webp"
            />
        </section>
        <section class="p-4 flex flex-col gap-2">
            <h2 class="text-2xl font-bold text-text-pri">
                {{ name }}
            </h2>
            <p class="text-text-sec">
                {{ description }}
            </p>
            <p class="text-xl font-bold text-text-pri">
                Starting at ${{ price.toFixed(2) }}
            </p>
            <button class="flex items-center gap-1 justify-center cursor-pointer w-full text-lg font-semibold rounded bg-actions-pri text-text-pri py-3 hover:bg-actions-pri-60 transition-colors">
                Custumize
                <span class="sr-only">Customize Mistery Box</span> 
                <Icon name="arrow-right" class="w-5 h-5 text-text-pri" />
            </button>
        </section>
    </article>
</template>

<script setup lang="ts">
interface Props {
    name: string;
    description: string;
    image: string;
    price: number;
}

const props = defineProps<Props>();

</script>

<style scoped>

</style>