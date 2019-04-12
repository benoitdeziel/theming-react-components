import { use } from 'reuse';
import { theme } from 'styled-tools';

const Box = () => {
    const BoxStyles = !!theme('styles.primitives.Box')
        ? theme('styles.primitives.Box')
        : 'div';

    return use(BoxStyles);
};

export default Box;
