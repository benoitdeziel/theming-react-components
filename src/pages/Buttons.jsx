import React from 'react';
import { withTheme } from 'styled-components';

import { Wrapper } from '../common/Wrapper';
import Button from '../shared/components/Button';
import UserIcon from '../shared/components/UserIcon';

const Buttons = () => (
    <>
        <Wrapper>
            <h1>Buttons</h1>
            <h2>Default</h2>
            <Button>Button</Button>
            <Button disabled>Button</Button>
            <h2>Variations</h2>
            <h3>Primary</h3>
            <Button variant="primary">Button</Button>
            <Button variant="primary" disabled>
                Button
            </Button>
            <h3>Secondary</h3>
            <Button variant="secondary">Button</Button>
            <Button variant="secondary" disabled>
                Button
            </Button>
            <h3>Ghost</h3>
            <Button variant="ghost">Button</Button>
            <Button variant="ghost" disabled>
                Button
            </Button>
            <h2>Kind</h2>
            <h3>Plain</h3>
            <Button kind="plain">Button</Button>
            <Button kind="plain" disabled>
                Button
            </Button>
            <Button kind="plain" variant="primary">
                Button
            </Button>
            <Button kind="plain" variant="primary" disabled>
                Button
            </Button>
            <Button kind="plain" variant="secondary">
                Button
            </Button>
            <Button kind="plain" variant="secondary" disabled>
                Button
            </Button>
            <Button kind="plain" variant="ghost">
                Button
            </Button>
            <Button kind="plain" variant="ghost" disabled>
                Button
            </Button>
            <h3>Fluid</h3>
            <Button fluid>Button</Button>
            <Button fluid disabled>
                Button
            </Button>
            <h2>Social</h2>
            <h3>Facebook</h3>
            <Button variant="facebook">Button</Button>
            <Button variant="facebook" disabled>
                Button
            </Button>
            <h3>Twitter</h3>
            <Button variant="twitter">Button</Button>
            <Button variant="twitter" disabled>
                Button
            </Button>
            <h2>States</h2>
            <h3>Danger</h3>
            <Button variant="danger">Button</Button>
            <Button variant="danger" disabled>
                Button
            </Button>
            <h3>Warning</h3>
            <Button variant="warning">Button</Button>
            <Button variant="warning" disabled>
                Button
            </Button>
            <h3>Success</h3>
            <Button variant="success">Button</Button>
            <Button variant="success" disabled>
                Button
            </Button>
            <h2>Sizes</h2>
            <Button size="xs">Button</Button>
            <Button size="sm">Button</Button>
            <Button>Button</Button>
            <Button size="lg">Button</Button>
            <Button size="xl">Button</Button>
            <h2>Shapes</h2>
            <Button shape="round">Button</Button>
            <Button shape="rounded">Button</Button>
            <h2>With icons</h2>
            <Button kind="plain" variant="ghost" icon={<UserIcon />}>
                Button
            </Button>
            <Button kind="plain" variant="ghost" icon={<UserIcon />} disabled>
                Button
            </Button>
            <h2>With loader</h2>
            <Button>Button</Button>
            <h2>Dropdown</h2>
            <Button dropdown>Button</Button>
        </Wrapper>
    </>
);

export default withTheme(Buttons);
