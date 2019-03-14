import DesignSystem from 'design-system-utils';

import components from './light/components';
import tokens from './light/tokens';

export default new DesignSystem({ ...tokens, ...components });
