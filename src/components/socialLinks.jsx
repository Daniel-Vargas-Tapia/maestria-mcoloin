import { IconBrandFacebook, IconBrandX, IconSchool } from '@tabler/icons-react'
import styles from './socialLinks.module.css'
export function SocialLinks () {
  return (
    <div className={styles.socialContainer}>
      <a className={styles.icon} href='https://uptexcoco.edomex.gob.mx/' target='_new'><IconSchool color='#882035' /></a>
      <a className={styles.icon} href='https://www.facebook.com/profile.php?id=100071739199665' target='_new'><IconBrandFacebook color='#882035' /></a>
      <a className={styles.icon} href='https://twitter.com/UPTex' target='_new'><IconBrandX color='#882035' /></a>

    </div>
  )
}
