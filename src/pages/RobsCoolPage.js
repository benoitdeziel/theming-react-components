import React from 'react';
import { Wrapper } from '../components/Wrapper';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codeExamples from '../lib/codeExamples';

const CodeSnippet = ({ codeString }) => {
    return (
        <SyntaxHighlighter language="css" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const properties = {
    'Theme Mode :: Variation': [
        'Primary',
        'Secondary',
        'Inverted',
        'Ghost',
        'Success',
        'Warning',
        'Danger',
    ],
    Social: ['Facebook', 'Twitter', 'Soundcloud'],
    Plain: ['True', 'False'],
    Size: ['xs', 'sm', 'md', 'lg'],
    Round: ['True', 'False'],
    Outline: ['True', 'False'],
    Loading: ['True', 'False'],
    Disabled: ['True', 'False'],
};

const Question = styled.h1`
    text-align: center;
    font-family: cursive;
`;

const CodeSamples = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
    grid-gap: 30px;
`;

function Button(props) {
    return (
        <button {...props}>
            <div className="inner">{props.children}</div>
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    variant: PropTypes.string,
};

Button.defaultProps = {
    variant: 'primary',
};

const LaButton = styled(Button)`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: button;
    cursor: pointer;
    border: solid 1px;
    font-family: inherit;
    line-height: inherit;
    font-size: 1rem;
    padding: 5px 10px;
    display: inline-block;
    background-color: green;
    border-color: green;
    border: solid 1px;
    color: white;
    .inner {
        padding: 5px 0;
    }
    &:hover {
        background: lightblue;
    }
`;

export function RobsCoolPage() {
    return (
        <Wrapper>
            <h2>Rob's Cool Page</h2>
            <marquee behavior="scroll" scrollamount="20" direction="left">
                🔥🔥🔥 🛹 nO gRoWnUpZ All0wEd 🛹 🔥🔥🔥
            </marquee>
            <hr />
            <Question>
                How are buttons handled in different major CSS Frameworks?
            </Question>
            <CodeSamples>
                {codeExamples.map(({ title, link, code }) => (
                    <div>
                        <h2>
                            <a href={link} target="_blank">
                                {title}
                            </a>
                        </h2>
                        <CodeSnippet codeString={code} />
                    </div>
                ))}
            </CodeSamples>
            <hr />
            <Question>What do we need to style a button?</Question>
            <ul>
                <li>{`We need data from outside our component {theme, global colors, border radius}`}</li>
                <li>{`We need to know the base styles of the button`}</li>
                <li>{`We need to know how the properties on the component change the base styles`}</li>
                <li>
                    {`Ideally we would be able to describe component-specific tokens to be used on css properties: Internal Context`}
                    <br />
                    <CodeSnippet
                        codeString={`
// using sass syntax just as a familiar example
$mainColor: green;
button {
    background-color: $mainColor;
    border-color: $mainColor;
}
                    `}
                    />
                </li>
                <li>
                    {`Ideally we would be able to use css functions (Utilties) to generate groups of css properties, or tokens, etc.`}
                    <CodeSnippet
                        codeString={`
// using sass syntax just as a familiar example
@mixin verticalPadding($amt) {
    padding-top: $amt;
    padding-bottom: $amt;
}
button {
    @include verticalPadding(10px);
}
                    `}
                    />
                </li>
                <li>
                    This is the kicker – we need to know which changes should
                    take precedence over others when we apply their mutation.
                    Here's an example.
                </li>
            </ul>
            <hr />
            <Question>What are the properties on Buttons?</Question>
            <ul>
                {Object.keys(properties).map(x => (
                    <li key={`li-${x}`}>
                        <strong>{x}</strong>
                        <ul>
                            {properties[x].map(y => (
                                <li key={`li-${x}-${y}`}>{y}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}
