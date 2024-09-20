const BASE_URL = 'https://backend.vivimart.in/api'; // Replace with your base API URL

// Function to fetch categories
export const getCategories = async () => {
  try {   
    const response = await fetch(`${BASE_URL}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    // Return both status code and response data
    return {
      status: response.status,
      data: responseData
    };
  } catch (error) {
    console.error('Categories API error:', error.message);
    // Re-throw the error with status if needed
    throw error;
  }
};

export const getSubCategories = async () => {
  try {   
    const response = await fetch(`${BASE_URL}/sub-categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    // Return both status code and response data
    return {
      status: response.status,
      data: responseData
    };
  } catch (error) {
    console.error('Categories API error:', error.message);
    // Re-throw the error with status if needed
    throw error;
  }
};


export const getCategoriesProduct = async (category) => {
  const encodedCategory = encodeURIComponent(category); // Encode the category to handle special characters like '&'
  const url = `https://backend.vivimart.in/api/products/category/${encodedCategory}`; // Updated endpoint

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any other required headers here if needed, such as authorization tokens
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    // Return both status code and response data
    return {
      status: response.status,
      data: responseData,
    };
  } catch (error) {
    console.error('Categories API error:', error.message);
    // Re-throw the error if needed
    throw error;
  }
};



export const getSubSubCategories = async () => {
  try {   
    const response = await fetch(`${BASE_URL}/sub-sub-categories/subCategory/Fresh Fruits`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    // Return both status code and response data
    return {
      status: response.status,
      data: responseData
    };
  } catch (error) {
    console.error('Categories API error:', error.message);
    // Re-throw the error with status if needed
    throw error;
  }
};