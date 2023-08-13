import { forwardRef } from 'react';

type CustomInputProps = {
  type: string;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type }: CustomInputProps, ref) => {
    return (
      <div>
        <input type={type} ref={ref} />
      </div>
    );
  }
);

export default CustomInput;
