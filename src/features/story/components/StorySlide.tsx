import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store"
import { InteractiveObject } from "./InteractiveObject"
import styles from "./StorySlide.module.scss"
import { StoryNavigation } from "./StoryNavigation"

export const StorySlide: React.FC = () => {
  const { stories, currentStoryIndex } = useSelector((state: RootState) => state.story)

  const currentStory = stories[currentStoryIndex]
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
    setFadeIn(false)
    
    // Загружаем основное изображение (которое задает размеры контейнера)
    const img = new Image()
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height })
      setImageLoaded(true)
      setTimeout(() => setFadeIn(true), 50)
    }
    img.src = currentStory.backgroundImage
  }, [currentStory.backgroundImage])

  if (!currentStory) {
    return <div>История не найдена</div>
  }

  const containerStyle =
    imageLoaded && imageDimensions.width > 0
      ? {
          aspectRatio: `${imageDimensions.width} / ${imageDimensions.height}`,
        }
      : {
          aspectRatio: "9 / 16",
        }

  return (
    <div className={styles.storySlide}>
      {/* Контейнер с фиксированным соотношением сторон */}
      <div className={styles.imageContainer} style={containerStyle}>
        
        {/* Ambient размытый фон (самый задний план для заполнения пустот) */}
        {imageLoaded && (
          <img
            src={currentStory.baseLayer || currentStory.backgroundImage} // Если есть baseLayer, используем его для амбиента
            alt=""
            className={`${styles.ambientBackground} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}
          />
        )}

        {/* --- НОВЫЙ БЛОК: НИЖНИЙ СЛОЙ ФОНА (BASE LAYER) --- */}
        {imageLoaded && currentStory.baseLayer && (
            <img 
                src={currentStory.baseLayer}
                alt="background base"
                className={`${styles.baseLayer} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}
            />
        )}

        {/* Основное фоновое изображение (Main Background) */}
        {imageLoaded ? (
          <img
            src={currentStory.backgroundImage}
            alt={currentStory.title}
            className={`${styles.background} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}
          />
        ) : (
          <h1 className={styles.backgroundError}>Image not loaded</h1>
        )}

        {/* Слой с интерактивными объектами */}
        {imageLoaded && (
          <div className={`${styles.objectsLayer} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
            {[...currentStory.objects]
              .sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0))
              .map((object) => (
                <InteractiveObject key={object.id} object={object} />
              ))}
          </div>
        )}
        <StoryNavigation />
      </div>
    </div>
  )
}