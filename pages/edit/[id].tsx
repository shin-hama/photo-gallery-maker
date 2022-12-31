import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import EditorSidePanel from 'components/EditorSidebar/EditorSidePanel'
import { Gallery } from 'components/Gallery'

import Head from 'components/Head'
import { useDownloadImage } from 'lib/useDownloadImage'
import { useGallery } from 'lib/useGallery'
import { useRouter } from 'next/router'
import * as React from 'react'

export default function Home() {
  const router = useRouter()
  const [id] = [router.query.id].flat(1)
  const [gallery] = useGallery(id)

  const images = useDownloadImage(gallery?.images || [])

  if (gallery === undefined) {
    return <>Loading</>
  }
  if (gallery === null) {
    return <>Not Found</>
  }

  return (
    <>
      <Head />
      <Stack direction="row" height="100vh">
        <Grid container>
          <Grid item md={4}>
            <EditorSidePanel />
          </Grid>
          <Grid item md={8} component="main" flexGrow={1}>
            <Box height="100%" p={1}>
              <Gallery images={images} />
              {/* <iframe src="/gallery" width="100%" height="100%"></iframe> */}
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}
