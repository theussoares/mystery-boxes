export interface MysteryBox {
    id: number
    name: string
    description: string
    image: string
    price: number
}

export interface ThemeConfig {
    prompt: string
    loadingText: string
    loadingDescription: string
    themeTitle: string
    themeDescription: string
}

export interface IconProps {
    name: string
    solid?: boolean
    class?: string
  }