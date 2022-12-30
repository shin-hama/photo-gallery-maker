import * as React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const images = [1, 2, 3, 4, 5]
const Gallery = () => {
  return (
    <Box width="100%" height="100%">
      <Stack spacing={4} padding={2} alignItems="center">
        <Box width="60%" bgcolor="black" sx={{ aspectRatio: '4/3' }}></Box>
        <Stack spacing={2} direction="row">
          {images.map((image) => (
            <Box width={80} height={60} key={image} bgcolor="black" color="white">
              {image}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Gallery
