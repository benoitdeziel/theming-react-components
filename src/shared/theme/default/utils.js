import deepmerge from 'deepmerge';

import light from './light';

export const prepareTheme = (type, modifiers) => {
    return deepmerge(light[type], modifiers);
};
