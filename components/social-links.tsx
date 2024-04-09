'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <a
        href="https://github.com/KoushikJit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCfKRZUU78XIcQvh1_QsdQyA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/koushik-sarkar-iimc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </a>
    </div>
  )
}

export default SocialMediaLinks
