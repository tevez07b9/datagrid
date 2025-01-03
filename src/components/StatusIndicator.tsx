import styles from "./StatusIndicator.module.css";

interface StatusIndicatorProps {
  status: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const getStatusColor = () => {
    switch(status.toLowerCase()) {
      case 'available':
        return 'green'
      case 'scheduled':
        return 'orange' 
      default:
        return 'gray';
    }
  }

  return (
    <span
      className={styles.indicator}
      style={{ backgroundColor: getStatusColor() }}
    />
  )
}

export default StatusIndicator