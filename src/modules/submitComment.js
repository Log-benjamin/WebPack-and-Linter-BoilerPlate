import { involvmentApi, involvementApiKey } from './getApiData.js';

const addComment = async (result) => {
  const countryName = result.id;
  const userName = result.parentElement.children[0].value;
  const usercomment = result.parentElement.children[1].value;

  try {
    await fetch(`${involvmentApi}apps/${involvementApiKey}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: countryName,
        username: userName,
        comment: usercomment,

      }),
    });
    return 'Recived all data';
  } catch (error) {
    return `Adding comments error:${error}`;
  }
};

const getcommentData = async (countryName) => {
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

export { addComment, getcommentData };