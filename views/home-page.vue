<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        <div v-for="box in boxes" :key="box.id" class="m-4 mx-auto">
           <CardMisteryBox
                :name="box.name"
                :description="box.description"
                :image="box.image"
                :price="box.price"
            />
        </div>
    </div>
</template>

<script setup>
const boxes = [
    {
        id: 1,
        name: 'Dragon Ball Z',
        description: 'A thrilling adventure in the world of Dragon Ball Z.',
        image: new URL('~/assets/images/dbz.png', import.meta.url).href,
        price: 100,
    },
    {
        id: 2,
        name: 'One Piece',
        description: 'Join the Straw Hat Pirates in their quest for the One Piece.',
        image: new URL('~/assets/images/one-piece.png', import.meta.url).href,
        price: 120,
    },
    {
        id: 3,
        name: 'Naruto',
        description: 'Experience the journey of Naruto Uzumaki in the Hidden Leaf Village.',
        image: new URL('~/assets/images/naruto.png', import.meta.url).href,
        price: 90,
    },
    {
        id: 4,
        name: 'Star Wars',
        description: 'Join the Galactic Empire or the Rebel Alliance in this epic saga.',
        image: new URL('~/assets/images/star-wars.png', import.meta.url).href,
        price: 130,
    },
    {
        id: 5,
        name: 'Pokemon',
        description: 'Catch them all in the world of Pokemon.',
        image: new URL('~/assets/images/pokemon.png', import.meta.url).href,
        price: 85,
    },
    {
        id: 6,
        name: 'Batman',
        description: 'Fight crime in Gotham City as the Dark Knight.',  
        image: new URL('~/assets/images/batman.png', import.meta.url).href,
        price: 115,
    },
    {
        id: 7,
        name: 'Bleach',
        description: 'Join Ichigo Kurosaki in his battle against evil spirits.',
        image: new URL('~/assets/images/bleach.png', import.meta.url).href,
        price: 95,
    }
]
</script>

<style lang="scss" scoped>

</style>