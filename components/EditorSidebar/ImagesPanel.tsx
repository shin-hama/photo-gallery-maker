import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Icon from '@mui/material/Icon'

const ImagePanel = () => {
  return (
    <Stack spacing={4}>
      <Button variant="contained">Upload Image</Button>
      <Stack spacing={2}>
        <Box>
          <Stack direction="row">
            <Box>Image 1</Box>
            <Icon baseClassName="fas" className="fa-ellipsis-vertical" />
          </Stack>
        </Box>
        <Box>Image 2</Box>
        <Box>Image 3</Box>
        <Box>Image 4</Box>
      </Stack>
    </Stack>
  )
}

export default ImagePanel
