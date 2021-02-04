import React from 'react';
import Input from '../Input/Input'
import Range from '../Range/Range'

function InputContainer() {
  return (
    <>

      <div className="flex items-center justify-evenly w-cont h-cont bg-white border border-gray-200 shadow-lg rounded-mid dark:bg-gray-800 dark:border#A3A3A3">
          <Range />
          <Input />
      </div>

    </>
  );
}

export default InputContainer;
