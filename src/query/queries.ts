import {gql} from '@apollo/client';

export const GET_DATA = gql`
    query($title: String!) {
        currencies {
            label, symbol
        },
        categories {
            name
        },
        category(input: { title: $title }) {
            name
            products {
                id
                name
                gallery
                inStock
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
            }
        },
        
    }
`
