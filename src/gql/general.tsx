import { gql } from "@apollo/client";

export const APIStatus = gql`
    query APIStatus {
        apiStatus
    }
`;
