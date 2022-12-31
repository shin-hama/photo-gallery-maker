import { collection, getDocs } from 'firebase/firestore'
import { getFirestoreApp } from './firebase'

export const getAllPages = async () => {
  const firestore = getFirestoreApp()
  const querySnapshot = await getDocs(collection(firestore, 'gallery'))
  return querySnapshot.docs.map((doc) => doc.id)
}
