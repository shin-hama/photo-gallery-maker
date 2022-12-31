import Box from '@mui/material/Box'
import { Gallery as GalleryComponent } from 'components/Gallery'
import { getAllPages } from 'lib/getAllPages'
import { getGallery } from 'lib/useGallery'
import type { Gallery } from 'lib/useGallery'
import { GetStaticProps } from 'next'
import * as React from 'react'
import { getUrl } from 'lib/useDownloadImage'

type Props = {
  images?: Gallery['images']
  error?: string
}
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const [id] = [context.params?.id].flat(1)

  const gallery = await getGallery(id || '')
  const props: Props = {}
  if (gallery) {
    const images = await Promise.all(gallery.images.map(async (path) => await getUrl(path)))
    props.images = images
  } else {
    props.error = 'gallery is not exist'
  }
  return { props, revalidate: 10 }
}

export async function getStaticPaths() {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: true,
    }
  }
  const pages = await getAllPages()

  const staticPaths = {
    paths: pages.map((pageId) => ({
      params: {
        pageId,
      },
    })),
    // paths: [],
    fallback: true,
  }

  console.log(staticPaths.paths)
  return staticPaths
}

const GalleryView: React.FC<Props> = ({ images, error }) => {
  if (error) {
    return <>Not Found: {error}</>
  }
  return (
    <Box>
      <GalleryComponent images={images || []} />
    </Box>
  )
}

export default GalleryView
