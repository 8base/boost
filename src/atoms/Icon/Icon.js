import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import * as glyphs from './glyphs';

type IconProps = {|
  name: string,
|};

const name = 'icon';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  display: 'inline-flex',
});

function Icon({ name, rest }: IconProps) {
  const Glyph = glyphs[name];

  return (
    <StyledTag { ...rest } tagName="div">
      <Glyph />
    </StyledTag>
  );
}
export { Icon, theme };
