import { useRef } from 'react';
import CustomInput from './CustomInput';

const LoginForm = () => {
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    const username = userNameRef.current ? userNameRef.current.value : '';
    const password = passwordRef.current ? passwordRef.current.value : '';
    console.log('Username', username);
    console.log('Password', password);
  };
  return (
    <div>
      <div>
        <CustomInput type='input' ref={userNameRef} />
        <CustomInput type='password' ref={passwordRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default LoginForm;
