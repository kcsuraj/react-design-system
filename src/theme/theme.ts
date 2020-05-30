// Define theme variables
import { IDefaultTheme } from 'styled-components';

// ## Colors palette
// ? Color names derived from http://chir.ag/projects/name-that-color
// ? Color scheme inspired from https://projects.invisionapp.com/share/RJFGS2UC3HS
// ? and https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss
// Primary colors
const scienceBlue = '#0766cc';
const white = '#fff';

// Secondary colors
const viking = '#67DAD4';
const amaranth = '#E94158';
const jaffa = '#f19533';
const emerald = '#68d087';

// Neutral colors
const grayBase = '#000';
const grayDarker = '#222';
const grayDark = '#333';
const gray = '#555';
const grayLight = '#777';
const grayLighter = '#eee';

// ## Font sizes
const size1 = 32;
const size2 = 28;
const size3 = 24;
const size4 = 20;
const size5 = 18;
const size6 = 16;
const size7 = 14;
const size8 = 12;

const theme: IDefaultTheme = {
  color: {
    danger: amaranth,
    gray,
    grayBase,
    grayDark,
    grayDarker,
    grayLight,
    grayLighter,
    primary: scienceBlue,
    sec: viking,
    success: emerald,
    warning: jaffa,
    white
  },
  size: {
    size1,
    size2,
    size3,
    size4,
    size5,
    size6,
    size7,
    size8
  }
};

export default theme;
