import { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const foucusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={foucusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
