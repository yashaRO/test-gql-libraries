import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

function Continents() {
  return (
    <>
      <h2>Continents</h2>
      <Query query={GET_CONTINENTS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!(</p>;
          return (
            <ul>
              {data.continents.map(({ code, name }) => (
                <li key={code}>{name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
}

export default Continents;
