import { gql } from '@apollo/client';

export const LOGIN = gql `
    mutation login ($email: String!, $password: String!) {
        login (email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser ($username: String!, $email: String!, $password: String!) {
        addUser (username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVED_BOOK = gql`
    mutation savedBook ($bookData: BookInput!) {
        savedBook (bookData: $bookData) {
            _id
            username
            email
            savedBooks {
                bookId
                image
                authors
                description
                title
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook ($bookId: ID!) {
        removeBook (bookId: $bookId) {
            _id
            username
            email
            savedBooks {
                bookId
                image
                authors
                description
                title
                link
            }
        }
    }
`;
