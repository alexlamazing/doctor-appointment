import { FONT_SIZE_COOKIE_NAME, fontSizeMap } from '@common/constants';
import { FontSizeLevelEnum, FontSizeLevelOption } from '@common/types/UI';
import Cookies from 'js-cookie';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { create } from 'zustand';

export type State = {
  checkCookieExist: () => boolean;
  fontSizeLevel: FontSizeLevelEnum;
  fontSizeLevelIdx: () => number;
  increaseFontSizeLevel: () => void;
  decreaseFontSizeLevel: () => void;
  resetFontSizeLevel: () => void;
  setFontSizeLevel: (level: FontSizeLevelEnum) => void;
};
export const useFontSizeLevelStore = create<State>((set, get) => {
  const expires = 365 * 10;

  return {
    checkCookieExist: () => RA.isNotNil(Cookies.get(FONT_SIZE_COOKIE_NAME)),
    fontSizeLevel: R.defaultTo(
      FontSizeLevelEnum.DEFAULT,
      Cookies.get(FONT_SIZE_COOKIE_NAME) as FontSizeLevelEnum
    ),
    fontSizeLevelIdx: () => R.indexOf(get().fontSizeLevel, FontSizeLevelOption),
    increaseFontSizeLevel: () => {
      const curr = get().fontSizeLevelIdx();

      curr < R.length(FontSizeLevelOption) - 1 &&
        get().setFontSizeLevel(FontSizeLevelOption[curr + 1]);
    },
    decreaseFontSizeLevel: () => {
      const curr = get().fontSizeLevelIdx();

      curr > 0 && get().setFontSizeLevel(FontSizeLevelOption[curr - 1]);
    },
    resetFontSizeLevel: () => {
      get().setFontSizeLevel(FontSizeLevelEnum.DEFAULT);
    },
    setFontSizeLevel: level => {
      Cookies.set(FONT_SIZE_COOKIE_NAME, level, {
        expires,
      });

      document.documentElement.style.setProperty(
        '--base-font-size',
        `${fontSizeMap[level]}`
      );

      set({
        fontSizeLevel: level,
      });
    },
  };
});
