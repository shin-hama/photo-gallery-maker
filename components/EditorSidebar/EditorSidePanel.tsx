import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const EditorSidePanel = () => {
  return (
    <Stack direction="row" height="100%" width="100%">
      <Box bgcolor="black" color="white">
        Images
      </Box>
      <Box bgcolor="navy" sx={{ flexGrow: 1 }}></Box>
    </Stack>
  )
}

export default EditorSidePanel
