const APIDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch All Properties
const fetchProperties = async () => {
  if (!APIDomain) {
    return [];
  }

  try {
    const res = await fetch(`${APIDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Fetch Single Property
const fetchProperty = async (id) => {
  if (!APIDomain) {
    return null;
  }

  try {
    const res = await fetch(`${APIDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
