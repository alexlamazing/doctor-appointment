import { FontSizeLevelEnum } from '@common/types/UI';

export const dayMapping: { [key: string]: number } = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
};

export const FONT_SIZE_COOKIE_NAME = 'doctor_font_size_level';

export const fontSizeMap = {
  [FontSizeLevelEnum.DEFAULT]: 16,
  [FontSizeLevelEnum.LARGE]: 16 * 1.125,
  [FontSizeLevelEnum.XLARGE]: 16 * 1.25,
  [FontSizeLevelEnum.XXLARGE]: 16 * 1.5,
};
