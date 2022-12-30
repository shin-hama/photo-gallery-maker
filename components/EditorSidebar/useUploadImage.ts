import * as React from 'react'
import { getFirestoreApp } from '../../lib/firebase'
import { getStorageApp } from '../../lib/firebase'

export const useUploadImage = () => {
  const firestore = getFirestoreApp()
  const storage = getStorageApp()

  const uploadImage = React.useCallback(() => {}, [])

  return uploadImage
}
