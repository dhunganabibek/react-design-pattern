import React, { forwardRef } from 'react';

const ChildComponent = forwardRef<HTMLInputElement>((props, ref) => (
  <>
    <input ref={ref} />
  </>
));

export default ChildComponent;
