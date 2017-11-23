import * as React from 'react';

interface IPropTypes {
  left?: Array<{ text: React.ReactNode; onPress?: () => void; type?: any; style?: any; className?: string}>;
  right?: Array<{ text: React.ReactNode; onPress?: () => void; type?: any; style?: any; className?: string}>;
  autoClose?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  scroll?: () => void;
  disabled?: boolean;
  style?: any;
  /* web only */
  prefixCls?: string;
}

export default IPropTypes;
