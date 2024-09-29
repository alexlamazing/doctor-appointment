'use client';

import { useFontSizeLevelStore } from '@store/fontSizeLevel';

const FontSizeSelector = () => {
  const { increaseFontSizeLevel, decreaseFontSizeLevel, fontSizeLevel } =
    useFontSizeLevelStore();

  const handlePlus = () => increaseFontSizeLevel();

  const handleMinus = () => decreaseFontSizeLevel();

  return (
    <div className='flex items-center'>
      <span className='mr-2 text-[#9ca3af]'>Font Size</span>

      <button
        onClick={handleMinus}
        className='border-solid border-2 border-indigo-400 px-2 rounded-3xl'
      >
        -
      </button>
      <span className='mx-2 w-[80px] text-center'>{fontSizeLevel}</span>
      <button
        onClick={handlePlus}
        className='border-solid border-2 border-indigo-400 px-2 rounded-3xl'
      >
        +
      </button>
    </div>
  );
};

export default FontSizeSelector;
