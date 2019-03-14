import DesignSystem from 'design-system-utils';

import components from './dark/components';
import tokens from './dark/tokens';

export default new DesignSystem({ ...tokens, ...components });
