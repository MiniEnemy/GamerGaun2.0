import request, { gql } from "graphql-request";

export const getaccessoriesLists = async () => {
  const query = gql`
    query MyQuery {
      accessoriesLists {
        id
        name
        price
        stock
        image {
          url
        }
        description {
          text
        }
        brand
      }
    }
  `;

  try {
    const result = await request(
      "https://ap-south-1.cdn.hygraph.com/content/cm45jqigc02e607w67xok15z4/master",
      query
    );
    return result.accessoriesLists; // Ensure we return the correct data
  } catch (error) {
    console.error("Error fetching accessories:", error);
    return [];
  }
};
