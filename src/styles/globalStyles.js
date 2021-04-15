import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
   /*
    * CSS reset via normalize.
    */
  ${normalize()}

  html {
    box-sizing: border-box;
  }
  
  /*
   * Inherit border-box sizing from html
   * https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
   */
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  /*
   * Disable artificial scaling, but let user zoom if needed.
   * Flexible Typesetting, Tim Brown, ch 2.
   */
  @viewport {
    width: device-width;
  }
  
  :root {
    /*
     * Reinforce that we're respecting the user's ability to set a default
     * font size. The rem unit now becomes relative to this.
     * Flexible Typesetting, Tim Brown, ch 2 and 4
     */
    font-size: 1.1rem;

    /*
     * Design tokens: Color palette
     */
    --astropy-text-color: #111111;
    --astropy-page-background-color: #ffffff;
    --astropy-primary-color: #fa743b;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    line-height: 1.45;
    color: var(--astropy-text-color);
    background-color: var(--astropy-page-background-color);
  }

  a {
    color: var(--astropy-primary-color);
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    text-decoration: solid underline var(--astropy-primary-color) 2px;
  }
`;

export default GlobalStyles;
