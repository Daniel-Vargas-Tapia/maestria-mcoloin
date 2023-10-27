import styles from './custom_input.module.css'

export function CustomInput (props) {
  return (
    <input
      className={styles.CustomInput}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}
