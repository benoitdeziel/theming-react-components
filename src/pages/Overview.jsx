import React from 'react';
import { Wrapper } from '../components/Wrapper';
import styled from 'styled-components';
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
    font-size: 2rem;
    margin: 1em 0 0;
    color: orangered;
    background: whitesmoke;
    padding: 10px;
`;

const CodeSamples = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
    grid-gap: 30px;
`;

const ButtonGrid = styled.div`
    button {
        float: left;
        margin: 0 10px 10px 0;
    }
`;

export function Overview() {
    return (
        <Wrapper>
            <h2>Overview</h2>
            <Question>
                How are buttons handled in different major CSS Frameworks?
            </Question>
            <CodeSamples>
                {codeExamples.map(({ title, link, code }) => (
                    <div key={title}>
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
                    We need to be able to conditionally add CSS, not just alter
                    the value but conditionally add the property and value, or
                    even a sub-selector/property/value
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
            <CodeSamples>
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
            </CodeSamples>
            <Question>Let's make some buttons!</Question>
        </Wrapper>
    );
}
