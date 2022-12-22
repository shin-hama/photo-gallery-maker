import * as React from 'react'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'

const buildIframe = (src: string) => {
  return `<iframe src="${src}" overflow="hidden" border="none" allowFullScreen width="700" height="400"></iframe>`
}

const SharePanel = () => {
  return (
    <Stack>
      <Box>icons</Box>
      <Box>
        <Icon baseClassName="fas" className="fa-clipboard" />
      </Box>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        value={buildIframe('http://example.com/album/{unique-id}')}
      ></TextField>
    </Stack>
  )
}

export default SharePanel
