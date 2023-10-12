import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

// import { dataset, projectId } from '../env'
import { readClient } from './client'

const imageBuilder = createImageUrlBuilder(readClient)

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source)
}
