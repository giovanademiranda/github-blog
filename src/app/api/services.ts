import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

export const getUserProfile = async (username: string) => {
  try {
    const response = await axiosInstance.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchIssues = async (repo: string, term: string) => {
  try {
    const response = await axiosInstance.get(`/search/issues`, {
      params: {
        q: `${term} repo:${repo}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
