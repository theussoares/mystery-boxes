<template>
  <div class="bg-background-pri h-full flex items-center justify-center">
    <div class="h-full w-full max-w-2xl mx-auto px-4 flex flex-col justify-center text-center">
        <div
        class="bg-background-sec rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto border-4 border-actions-pri"
      >
        <div
          v-if="loading"
          class="flex flex-col items-center justify-center p-8"
        >
          <div class="loader mb-6"></div>
          <h1
            class="saiyan-font text-4xl text-actions-pri tracking-widest mb-2"
          >
            {{ loadingText }}
          </h1>
          <p class="text-lg text-text-sec">{{ loadingDescription }}</p>
        </div>
        <img
          v-else-if="imageUrl"
          :src="imageUrl"
          alt="Caixa Surpresa"
          class="w-full h-auto animate-fade-in"
        />
        <div v-else class="flex flex-col items-center justify-center h-96 p-8">
          <p class="text-red-500 text-center">
            Falha ao gerar a imagem. Por favor, tente novamente.
          </p>
        </div>
      </div>

      <div v-if="!loading && imageUrl" class="animate-fade-in mt-4">
        <h2 class="text-4xl font-bold text-text-pri">
          Caixa Surpresa
          <span class="saiyan-font text-5xl text-actions-pri">{{
            themeTitle
          }}</span>
        </h2>
        <p class="text-lg text-text-sec mt-2">{{ themeDescription }}</p>

        <p class="text-xl font-semibold text-text-pri mt-4">
            For only $49.99
        </p>
        <button
          class="mt-2 w-full py-4 bg-actions-pri text-text-pri font-bold text-xl rounded-lg hover:bg-actions-60 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ThemeConfig {
  loadingText: string;
  loadingDescription: string;
  themeTitle: string;
  themeDescription: string;
  imageUrl?: string;
}

const themes: Record<string, ThemeConfig> = {
  "dragon-ball": {
    loadingText: "Invocando Shenlong...",
    loadingDescription: "Sua Caixa do Guerreiro Z está sendo preparada!",
    themeTitle: "Guerreiro Z",
    themeDescription: "O poder de um Saiyajin em uma única caixa.",
    imageUrl: new URL("~/assets/images/dbz.png", import.meta.url).href,
  },
  "one-piece": {
    loadingText: "Navegando pelos Mares...",
    loadingDescription: "Sua Caixa do Pirata está sendo preparada!",
    themeTitle: "Rei dos Piratas",
    themeDescription: "A aventura pelos Grand Line em uma caixa.",
    imageUrl: new URL("~/assets/images/one-piece.png", import.meta.url).href,
  },
  naruto: {
    loadingText: "Invocando Jutsu...",
    loadingDescription: "Sua Caixa Ninja está sendo preparada!",
    themeTitle: "Hokage",
    themeDescription: "O poder dos ninjas da Vila da Folha.",
    imageUrl: new URL("~/assets/images/naruto.png", import.meta.url).href,
  },
  'star-wars': {
    loadingText: "A Força está com você...",
    loadingDescription: "Sua Caixa Galáctica está sendo preparada!",
    themeTitle: "Jedi",
    themeDescription: "A batalha entre o bem e o mal em uma caixa.",
    imageUrl: new URL("~/assets/images/star-wars.png", import.meta.url).href,
  },
    "pokemon": {
        loadingText: "Capturando Pokémon...",
        loadingDescription: "Sua Caixa de Treinador está sendo preparada!",
        themeTitle: "Mestre Pokémon",
        themeDescription: "A jornada para se tornar um Mestre Pokémon.",
        imageUrl: new URL("~/assets/images/pokemon.png", import.meta.url).href,
    },
    batman: {
        loadingText: "Chamando o Cavaleiro das Trevas...",
        loadingDescription: "Sua Caixa do Batman está sendo preparada!",
        themeTitle: "Cavaleiro das Trevas",
        themeDescription: "A justiça de Gotham em uma caixa.",
        imageUrl: new URL("~/assets/images/batman.png", import.meta.url).href,
    },
    bleach: {
        loadingText: "Invocando o Shinigami...",
        loadingDescription: "Sua Caixa do Soul Reaper está sendo preparada!",
        themeTitle: "Soul Reaper",
        themeDescription: "A luta contra os Hollows em uma caixa.",
        imageUrl: new URL("~/assets/images/bleach.png", import.meta.url).href,
    },
};

const loading = ref(true);
const currentTheme = ref<ThemeConfig>(themes["dragon-ball"]);

const loadingText = computed(() => currentTheme.value.loadingText);
const loadingDescription = computed(
  () => currentTheme.value.loadingDescription
);
const themeTitle = computed(() => currentTheme.value.themeTitle);
const themeDescription = computed(() => currentTheme.value.themeDescription);
const imageUrl = computed(() => currentTheme.value.imageUrl);

const getRandomTheme = (): ThemeConfig => {
  const themeKeys = Object.keys(themes);
  const randomIndex = Math.floor(Math.random() * themeKeys.length);
  return themes[themeKeys[randomIndex]];
};

onMounted(() => {
  currentTheme.value = getRandomTheme();
  setTimeout(() => {
    loading.value = false;
  }, 3000); // Simulate loading time
});

useHead({
  title: "Promoções - Mystery Boxes",
  meta: [
    {
      name: "description",
      content:
        "Descubra nossas caixas surpresa promocionais com temas de anime!",
    },
  ],
});
</script>

<style scoped>
@font-face {
  font-family: "Saiyan-Sans";
  src: url("https://dbz.s3.amazonaws.com/Saiyan-Sans.ttf") format("truetype");
}

.saiyan-font {
  font-family: "Saiyan-Sans", sans-serif;
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #38E07B;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
