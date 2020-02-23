import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faLinkedin, faEnvelope, faExternalLinkAlt)

export default function (Vue) {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}