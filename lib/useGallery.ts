import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  FirestoreDataConverter,
  getDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import * as React from 'react'
import { getFirestoreApp } from './firebase'

type ModelBase = {
  createdAt: Date
  updatedAt?: Date
}
export type Gallery = ModelBase & {
  images: Array<string>
}
const GalleryConverter: FirestoreDataConverter<Gallery> = {
  toFirestore: (data) => {
    console.log(data)
    return {
      images: data.images,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt || null,
    }
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      images: data.images,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt?.toDate() || null,
    }
  },
}
const db = getFirestoreApp()

export const getGallery = async (id: string) => {
  const snapshot = await getDoc(doc(db, 'gallery', id).withConverter(GalleryConverter))

  return snapshot.data()
}

export const useGallery = (id?: string) => {
  const [gallery, setGallery] = React.useState<Gallery | null>()

  React.useEffect(() => {
    if (id) {
      getGallery(id).then((data) => setGallery(data || null))
    }
  }, [id])

  const actions = React.useMemo(() => {
    const a = {
      create: async (updated: Omit<Gallery, keyof ModelBase>) => {
        console.log(updated)
        const docRef = await addDoc(collection(db, 'gallery').withConverter(GalleryConverter), {
          ...updated,
          createdAt: serverTimestamp(),
        })

        return docRef.id
      },
      update: async (id: string, updated: Partial<Gallery>) => {
        await updateDoc(doc(db, 'gallery', id).withConverter(GalleryConverter), {
          ...updated,
          images: arrayUnion(updated.images),
          updatedAt: serverTimestamp(),
        })
      },
    }

    return a
  }, [db])

  return [gallery, actions] as const
}
