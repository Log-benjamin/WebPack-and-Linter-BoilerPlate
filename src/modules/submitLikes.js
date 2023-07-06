import { involvmentApi, involvementApiKey } from './getApiData.js';

const addLike = async (countryName) => {
  try {
    await fetch(`${involvmentApi}apps/${involvementApiKey}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: countryName,
      }),
    });
    return 'Recived all data';
  } catch (error) {
    return `Adding Likes error:${error}`;
  }
};

const getLikeData = async (countryName) => {
  let storeValue = 0;
  try {
    const response = await fetch(`${involvmentApi}apps/${involvementApiKey}/likes`);
    const data = await response.json();

    data.forEach((value) => {
      if (countryName === value.item_id) {
        storeValue = value.likes;
      }
    });
  } catch (error) {
    return `Error fetching scores: ${error}`;
  }
  return storeValue.slice(7);
};

export { addLike, getLikeData };