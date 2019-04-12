import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import { Wrapper } from '../common/Wrapper';
import { Table } from '../common/Table';
import Button from '../shared/components/Button';
import Card from '../shared/components/Card';
import UserIcon from '../shared/components/UserIcon';

const generateExample = (variant = undefined) => (
    <Table>
        <thead>
            <tr>
                <th>Base</th>
                <th>Outline</th>
                <th>Plain</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <Button variant={variant}>Button</Button>
                    <Button variant={variant} disabled>
                        Button
                    </Button>
                </td>
                <td>
                    <Button variant={variant} kind="outline">
                        Button
                    </Button>
                    <Button variant={variant} kind="outline" disabled>
                        Button
                    </Button>
                </td>
                <td>
                    <Button variant={variant} kind="plain">
                        Button
                    </Button>
                    <Button variant={variant} kind="plain" disabled>
                        Button
                    </Button>
                </td>
            </tr>
        </tbody>
    </Table>
);

const Buttons = () => {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    return (
        <>
            <Wrapper>
                <h1>Buttons</h1>

                <h2>Variations</h2>
                <h3>Primary</h3>
                {generateExample('primary')}
                <h3>Secondary</h3>
                {generateExample('secondary')}
                <h3>Ghost</h3>
                {generateExample('ghost')}
                <h3>Danger</h3>
                {generateExample('danger')}
                <h3>Warning</h3>
                {generateExample('warning')}
                <h3>Success</h3>
                {generateExample('success')}
                <h3>Facebook</h3>
                {generateExample('facebook')}
                <h3>Twitter</h3>
                {generateExample('twitter')}

                <h2>Fluid</h2>
                <div>
                    <Button fluid>Button</Button>
                </div>
                <br />
                <div>
                    <Button fluid disabled>
                        Button
                    </Button>
                </div>
                <h3>Primary</h3>
                <div>
                    <Button variant="primary" fluid>
                        Button
                    </Button>
                </div>
                <br />
                <div>
                    <Button variant="primary" fluid disabled>
                        Button
                    </Button>
                </div>
                <h3>with icon</h3>
                <div>
                    <Button variant="primary" icon={UserIcon} fluid>
                        Button
                    </Button>
                </div>
                <br />
                <div>
                    <Button
                        variant="primary"
                        icon={<UserIcon />}
                        fluid
                        disabled>
                        Button
                    </Button>
                </div>

                <h2>Sizes</h2>
                <Button size="xs">Button</Button>
                <Button size="sm">Button</Button>
                <Button>Button</Button>
                <Button size="lg">Button</Button>
                <h3>Primary</h3>
                <Button variant="primary" size="xs">
                    Button
                </Button>
                <Button variant="primary" size="sm">
                    Button
                </Button>
                <Button variant="primary">Button</Button>
                <Button variant="primary" size="lg">
                    Button
                </Button>

                <h2>Shapes</h2>
                <Button shape="round" icon={<UserIcon />}>
                    Button
                </Button>
                <Button shape="rounded">Button</Button>
                <h3>Primary</h3>
                <Button variant="primary" shape="round" icon={<UserIcon />}>
                    Button
                </Button>
                <Button variant="primary" shape="rounded">
                    Button
                </Button>
                <h3>Secondary</h3>
                <Button variant="secondary" shape="round" icon={<UserIcon />}>
                    Button
                </Button>
                <Button variant="secondary" shape="rounded">
                    Button
                </Button>

                <h2>With icons</h2>
                <p>
                    <Button icon={<UserIcon />}>Button</Button>
                    <Button icon={<UserIcon />} disabled>
                        Button
                    </Button>
                    <Button icon={<UserIcon />} />
                </p>
                <p>
                    <Button iconRight={<UserIcon />}>Button</Button>
                    <Button iconRight={<UserIcon />} disabled>
                        Button
                    </Button>
                    <Button iconRight={<UserIcon />} />
                </p>

                <h3>Sizes</h3>
                <Button variant="primary" size="xs" icon={<UserIcon />}>
                    Button
                </Button>
                <Button variant="primary" size="sm" icon={<UserIcon />}>
                    Button
                </Button>
                <Button variant="primary" icon={<UserIcon />}>
                    Button
                </Button>
                <Button variant="primary" size="lg" icon={<UserIcon />}>
                    Button
                </Button>

                <h2>With loader</h2>
                <p>
                    <button
                        onClick={() => {
                            setLoading1(false);
                            setLoading2(false);
                        }}>
                        Reset all
                    </button>
                </p>
                <div>
                    <Button
                        variant="primary"
                        loading={loading1}
                        onClick={() => setLoading1(!loading1)}>
                        Button
                    </Button>
                    <Button
                        variant="primary"
                        loading={loading2}
                        onClick={() => setLoading2(!loading2)}>
                        Button
                    </Button>
                </div>

                <h2>Dropdown</h2>
                <Button variant="primary" dropdown>
                    Button
                </Button>
                <Button variant="secondary" shape="rounded" dropdown>
                    Button
                </Button>
                <Button variant="primary" kind="outline" dropdown>
                    Button
                </Button>
                <Button kind="plain" dropdown>
                    Button
                </Button>
                <p>
                    <Button variant="primary" fluid dropdown>
                        Button
                    </Button>
                </p>
                <p>
                    <Button variant="primary" kind="outline" fluid dropdown>
                        Button
                    </Button>
                </p>

                <h2>As a link</h2>
                <Button href="#">Button</Button>
                <Button href="#" kind="outline">
                    Button
                </Button>
                <Button href="#" kind="plain">
                    Button
                </Button>
                <h2>In a card</h2>
                <Card>
                    <p>Hello world</p>
                    <Card.Button>Card Button</Card.Button>
                </Card>
            </Wrapper>
        </>
    );
};

export default withTheme(Buttons);
