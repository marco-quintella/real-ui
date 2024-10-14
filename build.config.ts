import fs from 'fs-extra'
import sass from 'sass'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/'],
  declaration: true,

})
