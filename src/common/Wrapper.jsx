import styled from 'styled-components';
import { modes } from '../shared/theme/modes';

export const Wrapper = styled.section`
    padding: 1em;
    background-color: ${props =>
        props.theme.mode === modes.light ? 'white' : 'black'};
`;
