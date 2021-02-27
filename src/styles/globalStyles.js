import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
   /*
    * CSS reset via normalize.
    */
  ${normalize()}
`;

export default GlobalStyles;
