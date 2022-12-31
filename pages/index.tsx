import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Header } from 'components/Header'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useGallery } from '../lib/useGallery'
import { useUploadImage } from '../lib/useUploadImage'

const Home = () => {
  const uploadImage = useUploadImage()
  const [, { create }] = useGallery()
  const router = useRouter()

  const handleUploaded = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const images = await uploadImage(e.target.files)
      const id = await create({ images })

      router.push(`edit/${id}`)
    }
  }

  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center">
        <Button component="label" variant="contained">
          Upload Images
          <input type="file" multiple hidden onChange={handleUploaded}></input>
        </Button>
      </Box>
    </>
  )
}

export default Home
