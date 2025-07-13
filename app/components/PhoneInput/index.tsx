'use client';
import { Input, InputProps } from '@chakra-ui/react';
import { usePhoneInput } from 'react-international-phone';

interface IProps {
  onChange?: (e: string) => void;
  value: string;
}

type CombinedProps = InputProps & IProps;

const CPhoneInput: React.FC<CombinedProps> = ({
  onChange,
  value,
  ...props
}) => {
  const phoneInput = usePhoneInput({
    defaultCountry: 'uz',
    value,
    onChange: (data) => {
      if (onChange) {
        onChange(data.phone);
      }
    },
  });

  return (
    <Input
      type='tel'
      className='peer'
      placeholder=''
      value={phoneInput.inputValue}
      onChange={phoneInput.handlePhoneValueChange}
      ref={phoneInput.inputRef}
      {...props}
    />
  );
};

CPhoneInput.displayName = 'PhoneInput';

export default CPhoneInput;
