import request, { gql } from "graphql-request";

export const getaccessoriesLists = async () => {
    const query = gql`
    query MyQuery {
        accessoriesLists {
            brand
            id
            name
            price
            stock
        }
    }
    `
    
    const result = await request('https://ap-south-1.cdn.hygraph.com/content/cm45jqigc02e607w67xok15z4/master', query);
    return result;
}