/* tslint:disable */
const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs-extra')
const fg = require('fast-glob')

function resolveExportedPaths(content: string): string {
  return content.replace(/\/_next\//g, '../_next/').replace(/\/_error\//g, '../_error/')
}

async function postRenderer() {
  const cwd: string = process.cwd()
  const appDir: string = join(cwd, 'app', 'renderer')

  const pages: string[] = fg.sync(join(appDir, '**/*.html'))
  pages.forEach(page => {
    writeFileSync(page, resolveExportedPaths(readFileSync(page).toString()))
  })
}

postRenderer().then(() => {
  console.log('Post processing done for renderer process.')
})
