import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import EditorSidePanel from '../components/EditorSidebar/EditorSidePanel'

import Head from '../components/Head'

export default function Home() {
  return (
    <>
      <Head />
      <Stack direction="row" width="100vw" height="100vh">
        <Box minWidth="430px">
          <EditorSidePanel />
        </Box>
        <Box component="main" flexGrow={1}>
          <Box height="100%" p={1} style={{ border: 'grey 5px' }}>
            <iframe src="/gallery" width="100%" height="100%"></iframe>
          </Box>
        </Box>
      </Stack>
    </>
  )
}
