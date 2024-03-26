import React, { useState, useEffect } from "react";
import axios from "axios";

const OpenSearchComponent = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://search-anantadi-ehlcdspyydjtrsetwbctq734eu.us-east-1.es.amazonaws.com",
          {
            query: {
              match_all: {},
            },
          }
        );

        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result._source}</li>
        ))}
      </ul>
    </div>
  );
};

export default OpenSearchComponent;
