import React from 'react';
import InputContainer from '../InputContainer/InputContainer';
import StyleModeCheckbox from '../StyleModeCheckbox/StyleModeCheckbox';


function MaineItem() {
 
  return (
    <>
      <div className=" dark:bg-black flex justify-center h-screen items-center m-0">
        <StyleModeCheckbox/>
        <InputContainer/>
      </div>
    </>
  );
};

export default MaineItem;
