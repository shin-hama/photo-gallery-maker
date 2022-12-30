import * as React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

type Props = {
  images: Array<string>
}
const Gallery: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = React.useState(0)

  return (
    <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Stack spacing={4} padding={2} alignItems="start" width="100%">
        <Box
          position="relative"
          width="100%"
          bgcolor="black"
          color="white"
          sx={{ aspectRatio: '4/3' }}
        >
          <Image src={images[index]} alt={''} fill />
        </Box>

        <Box display="flex" width="100%" overflow="auto">
          <Stack spacing={2} direction="row">
            {images.map((image, i) => (
              <Box
                position="relative"
                width={100}
                key={image}
                bgcolor="black"
                color="white"
                onClick={() => setIndex(i)}
                sx={{ aspectRatio: '4/3' }}
              >
                <Image src={image} alt={''} fill />
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Gallery
