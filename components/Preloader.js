import { motion } from 'framer-motion';

export default function Preloader() {
  const spinTransition = { repeat: Infinity, ease: 'linear', duration: 1 };
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '4px solid #000',
          borderTopColor: 'transparent',
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </motion.div>
  );
}
