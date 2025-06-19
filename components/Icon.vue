<template>
    <component :is="iconComponent" :class="props.class" />
  </template>

<script setup lang="ts">
import * as outlineIcons from '@heroicons/vue/24/outline'
import * as solidIcons from '@heroicons/vue/24/solid'

interface IconProps {
  name: string
  solid?: boolean
  class?: string
}

const props = defineProps<IconProps>()

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

const iconComponent = computed(() => {
  const iconName = toPascalCase(props.name)
  const icons = props.solid ? solidIcons : outlineIcons
  return (icons as any)[`${iconName}Icon`] || null
})
</script>


