import { ref, uploadBytes } from 'firebase/storage'
import * as React from 'react'
import { getStorageApp } from './firebase'
import { v4 as uuidv4 } from 'uuid'

export const useUploadImage = () => {
  const storage = getStorageApp()

  const uploadImage = React.useCallback(
    async (images: FileList) => {
      const imagePaths = (
        await Promise.all(
          Array.from(images).map(async (image) => {
            const imageRef = ref(storage, `images/${'anonymous'}/${uuidv4()}/${image.name}`)
            try {
              const result = await uploadBytes(imageRef, image)

              return imageRef.fullPath
            } catch {
              return null
            }
          })
        )
      ).filter((item): item is string => item !== null)

      return imagePaths
    },
    [storage]
  )

  return uploadImage
}
