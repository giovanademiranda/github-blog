import { Issue, Issues } from "@/types/github";

const GITHUB_API_URL = 'https://api.github.com';

const headers = {
  Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
};

export const getUserProfile = async (username: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, { headers, cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('getUserProfile', error);
    throw error;
  }
};

export const getIssues = async (): Promise<Issues> => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repositories/733608632/issues`, { headers, cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(`${GITHUB_API_URL}/repositories/733608632/issues`)
    return await response.json();
  } catch (error) {
    console.error('getIssues', error);
    throw error;
  }
}

export const getIssue = async (id: string): Promise<Issue> => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repositories/733608632/issues/${id}`, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('getIssue', error);
    throw error;
  }
}

export const searchIssues = async (repo: string, term: number) => {
  try {
    const query = encodeURIComponent(`${term} repo:${repo}`);
    const response = await fetch(`${GITHUB_API_URL}/search/issues?q=${query}`, { headers, cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('searchIssues', error);
    throw error;
  }
};
