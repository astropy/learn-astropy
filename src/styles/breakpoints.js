/*
 * Breakpoints.
 *
 * We're using em units for media queries so that they scale with zooming.
 * Note that ems in media queries are always relative to the **default root
 * font size**, not the font-size set on :root. See Ch 5 of Scott Brown's
 * Flexible Typography.
 */

const bp = {
  phone: '24em', // maximum width of a phone (vertical)
};

export default bp;
