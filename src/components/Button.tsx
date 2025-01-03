import styles from "./Button.module.css"

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;