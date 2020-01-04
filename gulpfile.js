
const { src, dest } = require('gulp')
const cleanCSS = require('gulp-clean-css')
const header = require('gulp-header')
const { name, description, version, homepage, author, license } = require('./package.json')

const headerText = `/**
 * ${ name } - ${ description }
 * @version v${ version }
 * @author ${ author }
 * @link ${ homepage }
 * @license ${ license }
 */
`

exports.default = () => {
  return src('src/index.css')
    .pipe(cleanCSS())
    .pipe(header(headerText))
    .pipe(dest('dist'))
}