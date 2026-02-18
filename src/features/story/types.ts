export interface InteractiveObject {
  id: string
  gifUrl: string
  // Относительные координаты (0-1), где 0.5 = центр
  position: {
    x: number // 0 = левый край, 1 = правый край
    y: number // 0 = верх, 1 = низ
  }
  // Координаты для мобильных устройств (опционально)
  mobilePosition?: {
    x: number
    y: number
  }
  // Размеры относительно canvas (0-1)
  size: {
    width: number
    height: number
  }
  // Размеры для мобильных устройств (опционально)
  mobileSize?: {
    width: number
    height: number
  }
  interaction?:
    | {
        type: "sound" | "navigate" | "replace"
        data: any
      }
    | Array<{
        type: "sound" | "navigate" | "replace"
        data: any
      }>
  zIndex?: number
  noHover?: boolean // Отключить эффект при наведении
}

export interface Story {
  id: number
  title: string
  backgroundImage: string
  
  audioTrack: string
  objects: InteractiveObject[]
  description?: string
  baseLayer?: string
}

export interface StoryState {
  stories: Story[]
  currentStoryIndex: number
  isAudioPlaying: boolean
  visitedStories: number[]
  objectInteractions: Record<string, boolean>
}
