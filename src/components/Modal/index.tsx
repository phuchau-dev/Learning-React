import React from 'react';
import { ModalProps } from './type';
import styles from './style.module.css';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'md', position = 'center', footerContent }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>


      <div className={`${styles.modalContent} ${styles[`size-${size}`]} ${styles[`position-${position}`]}`} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h4 className="text-sm text-gray-900 font-medium">{title}</h4>
          <button className="block cursor-pointer" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427" stroke="black" strokeWidth="1.6" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
        {footerContent && <div className={styles.modalFooter}>{footerContent}</div>}
      </div>
    </div>
  );
};

export default Modal;
