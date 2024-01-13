export default async function fetchData(url, method = "GET", data = null) {
  try {
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}

// Example usage:

// GET request
// const getUrl = "https://example.com/api/data";
// fetchData(getUrl)
//   .then((data) => console.log("GET Request Response:", data))
//   .catch((error) => console.error("GET Request Error:", error));

// // POST request
// const postUrl = "https://example.com/api/post";
// const postData = { key: "value" };
// fetchData(postUrl, "POST", postData)
//   .then((data) => console.log("POST Request Response:", data))
//   .catch((error) => console.error("POST Request Error:", error));
