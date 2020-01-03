import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'
//page title : settings 里设置

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
