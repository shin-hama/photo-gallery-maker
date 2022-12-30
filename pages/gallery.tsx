import * as React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const images = [1, 2, 3, 4, 5, 6]
const Gallery = () => {
  const [index, setIndex] = React.useState(0)

  return (
    <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Stack spacing={4} padding={2} alignItems="start" width="100%">
        <Box width="100%" bgcolor="black" color="white" sx={{ aspectRatio: '4/3' }}>
          {images[index]}
        </Box>

        <Box display="flex" width="100%" overflow="auto">
          <Stack spacing={2} direction="row">
            {images.map((image, i) => (
              <Box
                width={100}
                key={image}
                bgcolor="black"
                color="white"
                onClick={() => setIndex(i)}
                sx={{ aspectRatio: '4/3' }}
              >
                {image}
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Gallery
