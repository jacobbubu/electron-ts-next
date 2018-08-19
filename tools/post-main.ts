/* tslint:disable */
const { join } = require('path')
const { copy } = require('fs-extra')
const fg = require('fast-glob')

async function postMain() {
  const cwd: string = process.cwd()
  const srcDir = join(cwd, 'src', 'main')
  const appDir = join(cwd, 'app', 'main')

  const files = ['preload.js']
  for (const file of files) {
    await copy(join(srcDir, file), join(appDir, file))
  }
}

postMain().then(() => {
  console.log('Post processing done for main process.')
})
