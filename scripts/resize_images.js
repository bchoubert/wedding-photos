import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputDir = path.resolve(__dirname, '../src/assets/photos/input')
const outputLowDir = path.resolve(__dirname, '../public/output_low')
const outputHighDir = path.resolve(__dirname, '../public/output_high')

await fs.mkdir(outputLowDir, { recursive: true })
await fs.mkdir(outputHighDir, { recursive: true })

async function getDirectorySize(directory) {
  const files = await fs.readdir(directory)

  let size = 0

  for (const file of files) {
    const stats = await fs.stat(path.join(directory, file))
    size += stats.size
  }

  return size
}

const files = await fs.readdir(inputDir)

for (const file of files) {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) {
    continue
  }

  // Exemple :
  // L+C (8 of 421).jpg → 8
  const match = file.match(/\((\d+)\s+of\s+\d+\)/i)

  if (!match) {
    console.warn(`Nom non reconnu : ${file}`)
    continue
  }

  const number = match[1]

  const inputPath = path.join(inputDir, file)

  const lowPath = path.join(
    outputLowDir,
    `${number}.webp`
  )

  const highPath = path.join(
    outputHighDir,
    `${number}.jpg`
  )

  // Version galerie / miniature
  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1000,
      height: 1000,
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({
      quality: 82
    })
    .toFile(lowPath)

  // Version haute qualité
  await sharp(inputPath)
    .rotate()
    .resize({
      width: 3500,
      height: 3500,
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({
      quality: 85,
      mozjpeg: true
    })
    .toFile(highPath)

  console.log(`${file}`)
  console.log(`  → low  : ${number}.webp`)
  console.log(`  → high : ${number}.jpg`)
}

const lowSize = await getDirectorySize(outputLowDir)
const highSize = await getDirectorySize(outputHighDir)
const totalSize = lowSize + highSize

console.log('')
console.log(`LOW   : ${(lowSize / 1024 / 1024).toFixed(1)} MB`)
console.log(`HIGH  : ${(highSize / 1024 / 1024).toFixed(1)} MB`)
console.log(`TOTAL : ${(totalSize / 1024 / 1024).toFixed(1)} MB`)