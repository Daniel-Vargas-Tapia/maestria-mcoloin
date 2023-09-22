import youtube from '../assets/social/youtube.webp'
import web from '../assets/social/web.webp'
import twitter from '../assets/social/twitter.webp'
import facebook from '../assets/social/facebook.webp'
import styles from './socialLinks.module.css'
export function SocialLinks () {
  return (
    <div className={styles.socialContainer}>
      <a href='https://uptexcoco.edomex.gob.mx/' target='_new'><img src={web} alt='' /></a>
      <a href='https://www.youtube.com/@uptex105' target='_new'><img src={youtube} alt='' /></a>
      <a href='https://www.facebook.com/profile.php?id=100071739199665' target='_new'><img src={facebook} alt='' /></a>
      <a href='https://twitter.com/UPTex' target='_new'><img src={twitter} alt='' /></a>

    </div>
  )
}
