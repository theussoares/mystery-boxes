/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './views/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                'background-pri': 'var(--background-primary)',
                'background-sec': 'var(--background-secondary)',
                'background-ter': 'var(--background-tertiary)',
                'actions-pri': 'var(--actions-primary)',
                'actions-sec': 'var(--actions-secondary)',
                'actions-ter': 'var(--actions-tertiary)',
                'actions-pri-60': 'var(--actions-primary-60)',
                'text-pri': 'var(--text-primary)',
                'text-sec': 'var(--text-secondary)',
                'text-ter': 'var(--text-tertiary)'
            }
        }
    },
    // corePlugins: {
    //     preflight: true, // Certifique-se de que isso está ativado
    // },
    plugins: [],
    darkMode: 'class'
};