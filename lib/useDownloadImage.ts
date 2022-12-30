import { getDownloadURL, ref } from 'firebase/storage'
import * as React from 'react'
import { getStorageApp } from './firebase'

export const useDownloadImage = (paths: Array<string>) => {
  const [images, setImages] = React.useState<Record<string, string>>({})
  const storage = getStorageApp()

  const download = React.useCallback(
    async (path: string) => {
      const imageRef = ref(storage, path)
      try {
        const url = await getDownloadURL(imageRef)
        return url
      } catch {
        return null
      }
    },
    [storage]
  )

  React.useEffect(() => {
    Promise.all(
      paths.map(async (path) => {
        if (images[path]) {
          return [path, images[path]]
        } else {
          const url = await download(path)
          return [path, url]
        }
      })
    ).then((results) => {
      setImages(
        Object.fromEntries(
          results.filter((item): item is string[] => item.every((e) => e !== null))
        )
      )
    })
  }, [download, paths])

  return Object.values(images)
}
