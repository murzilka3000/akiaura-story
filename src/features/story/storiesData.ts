import { Story } from "./types"

export const storiesData: Story[] = [
  {
    id: 1,
    title: "Akiaura Story Ch. 1",
    backgroundImage: "/images/story1/background.png",
    audioTrack: "/audio/background-1.wav",
    description: "",
    objects: [
      {
        id: "smoke",
        gifUrl: "/images/story1/smoke.gif",
        noHover: true,
        position: { x: 0.84, y: 0.6 },
        mobilePosition: { x: 0.84, y: 0.607 },
        size: { width: 0.1, height: 0.09 },
      },
      {
        id: "plant",
        gifUrl: "/images/story1/plant.png",
        position: { x: 0.68, y: 0.3 },
        size: { width: 0.2, height: 0.17 },
        interaction: [
          {
            type: "replace",
            data: {
              replacementGif: "/images/story1/plant-action.gif",
              duration: 1500,
            },
          },
          {
            type: "sound",
            data: {
              soundUrl: "/audio/effects/grass-rustling.mp3",
            },
          },
        ],
      },
      {
        id: "lamp",
        gifUrl: "/images/story1/lamp.png",
        position: { x: 0.26, y: 0.6 },
        size: { width: 0.2, height: 0.14 },
        interaction: [
          {
            type: "sound",
            data: {
              soundUrl: "/audio/effects/lamp-swith.mp3",
            },
          },
          {
            type: "replace",
            data: {
              replacementGif: "/images/story1/lamp-action.gif",
              duration: 1000,
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "",
    backgroundImage: "/images/story2/sky.png",
    audioTrack: "/audio/background-2.mp3",
    description: "",
    objects: [],
    baseLayer: "/images/story2/window.png",
  },
  {
    id: 3,
    title: "",
    backgroundImage: "/images/story3/background-3.jpg",
    audioTrack: "/audio/background-3.mp3",
    objects: [],
  },
  {
    id: 4,
    title: "",
    backgroundImage: "/images/story4/background-4.jpg",
    audioTrack: "/audio/background-4.mp3",
    objects: [],
  },
  {
    id: 5,
    title: "",
    backgroundImage: "/images/story5/background-5.jpg",
    audioTrack: "/audio/background-5.mp3",
    objects: [],
  },
  {
    id: 6,
    title: "",
    backgroundImage: "/images/story6/background-6.jpg",
    audioTrack: "/audio/background-6.mp3",
    objects: [],
  },
  {
    id: 7,
    title: "",
    backgroundImage: "/images/story7/background-7.jpg",
    audioTrack: "/audio/background-7.mp3",
    objects: [],
  },
  {
    id: 8,
    title: "",
    backgroundImage: "/images/story8/background-8.jpg",
    audioTrack: "/audio/background-8.mp3",
    description: "The End",
    objects: [],
  },
]
