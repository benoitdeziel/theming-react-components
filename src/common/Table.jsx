import styled from 'styled-components';

export const Table = styled.table`
    th {
        text-align: left;

        &:not(:first-child) {
            padding: 0 2rem;
        }
    }

    td:not(:first-child) {
        &:not(:first-child) {
            padding: 1rem 2rem;
        }
    }
`;
