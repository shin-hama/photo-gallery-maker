import {
  addDoc,
  collection,
  doc,
  FirestoreDataConverter,
  getDoc,
  updateDoc,
} from 'firebase/firestore'
import * as React from 'react'
import { getFirestoreApp } from './firebase'

type Gallery = {
  images: Array<string>
  createdAt: Date
  updatedAt?: Date
}
const GalleryConverter: FirestoreDataConverter<Gallery> = {
  toFirestore: (data) => {
    return {
      images: data.images,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      images: data.images,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt?.toDate(),
    }
  },
}
export const useGallery = () => {
  const db = getFirestoreApp()

  const actions = React.useMemo(() => {
    const a = {
      get: async (id: string) => {
        const docRef = await getDoc(doc(db, 'gallery', id).withConverter(GalleryConverter))

        return docRef.data()
      },
      create: async () => {
        const docRef = await addDoc(collection(db, 'gallery').withConverter(GalleryConverter), {
          images: [],
          createdAt: new Date(),
        })

        return docRef.id
      },
      update: async (id: string, updated: Partial<Gallery>) => {
        await updateDoc(doc(db, 'gallery', id).withConverter(GalleryConverter), {
          ...updated,
          updatedAt: new Date(),
        })
      },
    }

    return a
  }, [db])

  return actions
}
