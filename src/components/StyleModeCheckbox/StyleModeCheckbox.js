import React from 'react';
import {useDarkMode} from '../../hook/useDarkMode';

function StyleModeCheckbox() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
			<input type="checkbox" className="switch" onClick={()=> setTheme(colorTheme)}/>
    </>
  );
};

export default StyleModeCheckbox;
