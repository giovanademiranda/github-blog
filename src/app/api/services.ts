const GITHUB_API_URL = 'https://api.github.com';

const headers = {
  Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
};

export const getUserProfile = async (username: string) => {
  try {
    console.log(`${GITHUB_API_URL}/users/${username}`)
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchIssues = async (repo: string, term: string) => {
  try {
    const query = encodeURIComponent(`${term} repo:${repo}`);
    const response = await fetch(`${GITHUB_API_URL}/search/issues?q=${query}`, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
