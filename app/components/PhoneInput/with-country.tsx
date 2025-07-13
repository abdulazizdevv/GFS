'use client';
import { InputProps } from '@chakra-ui/react';
import { defaultCountries, PhoneInput } from 'react-international-phone';
import './style.css';

interface IProps {
  onChange?: (e: string | React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

type CombinedProps = InputProps & IProps;

const WithCountryPhoneNumber: React.FC<CombinedProps> = ({
  onChange,
  value,
  ...props
}) => {
  return (
    <PhoneInput
      defaultCountry='us'
      countries={defaultCountries}
      style={{
        width: '100%',
        height: '100%',
      }}
      value={value}
      onChange={onChange}
      {...props}
    />
    // <Input
    //   type='tel'
    //   className='peer'
    //   placeholder=''
    //   value={phoneInput.inputValue}
    //   onChange={phoneInput.handlePhoneValueChange}
    //   ref={phoneInput.inputRef}
    //   {...props}
    // />
  );
};

WithCountryPhoneNumber.displayName = 'WithCountryPhoneNumber';

export default WithCountryPhoneNumber;
