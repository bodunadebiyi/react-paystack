import React, {ReactNode} from 'react';
import usePaystackPayment from './use-paystack';
import {PaystackProps} from './types';

interface PaystackButtonProps extends PaystackProps {
  text?: string;
  className?: string;
  children?: ReactNode;
  onSuccess?: Function;
  onClose?: Function;
  ref?: any;
}

const PaystackButton = ({
  text,
  className,
  children,
  onSuccess,
  onClose,
  ref,
  ...others
}: PaystackButtonProps): ReactNode => {
  const initializePayment = usePaystackPayment(others);
  return (
    <button ref={r => ref=r} className={className} onClick={(): void => initializePayment(onSuccess, onClose)}>
      {text || children}
    </button>
  );
};

export default PaystackButton;
