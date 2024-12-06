import request, { gql } from "graphql-request";

// Function to fetch all accessories
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

// Function to fetch a single accessory by ID
export const getBusinessById = async (id) => {
  const query = gql`
    query GetBusinessById($id: ID!) {
      accessoriesList(where: { id: $id }) {
        name
        brand
        price
        stock
        image {
          url
        }
        description {
          text
        }
      }
    }
  `;

  try {
    const result = await request(
      "https://ap-south-1.cdn.hygraph.com/content/cm45jqigc02e607w67xok15z4/master",
      query,
      { id } // Pass the ID as a variable
    );
    return result.accessoriesList; // Return the specific accessory data
  } catch (error) {
    console.error(`Error fetching accessory with ID ${id}:`, error);
    return null; // Return null if there’s an error
  }
};
