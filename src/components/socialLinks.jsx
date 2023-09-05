import youtube from '../assets/social/youtube.png'
import instagram from '../assets/social/instagram.png'
import twitter from '../assets/social/twitter.png'
import facebook from '../assets/social/facebook.png'
import styles from './socialLinks.module.css'
export function SocialLinks () {
  return (
    <div className={styles.socialContainer}>
      <img src={instagram} alt='' />
      <img src={youtube} alt='' />
      <img src={facebook} alt='' />
      <img src={twitter} alt='' />
    </div>
  )
}
