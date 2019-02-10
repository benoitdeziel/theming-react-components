import React from 'react';
import { ThemeProvider } from '../utils/ThemeProvider';

import { modes } from '../theme/modes';

import { Wrapper } from '../components/Wrapper';
import Button from '../components/Button';

export const HomePage = ({ currentMode }) => (
    <>
        <Wrapper>
            <h2>Default</h2>
            <Button>Default Button</Button>
            <Button variant="primary">Primary Button</Button>
            <Button icon="primary">Primary Button</Button>
        </Wrapper>

        <ThemeProvider
            mode={currentMode === modes.light ? modes.dark : modes.light}>
            <Wrapper>
                <h2
                    style={{
                        color: currentMode === modes.light ? 'white' : 'black',
                    }}>
                    Inverted
                </h2>
                <Button>Default Button</Button>
            </Wrapper>
        </ThemeProvider>
    </>
);
