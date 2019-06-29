/* const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const NextI18Next = require('next-i18next/dist/commonjs')
 */
// jest.setup.js
const setConfig = require('next/config')
const publicRuntimeConfig = require('next/config')


const { localeSubpaths } = publicRuntimeConfig
const NextI18Next = require('next-i18next/dist/commonjs')

/* const { publicRuntimeConfig: { localeSubpaths } } = getConfig(); */


// Make sure you can use "publicRuntimeConfig" within tests.
/* setConfig({ publicRuntimeConfig })
 */
module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['nl','tr'],
    localeSubpaths,
})