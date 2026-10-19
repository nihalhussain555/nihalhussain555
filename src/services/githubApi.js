import { PROFILE_INFO, FEATURED_PROJECTS } from '../data/profileData';

const GITHUB_USERNAME = 'nihalhussain555';

export async function fetchGitHubProfile() {
  try {
    const userPromise = fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });

    const reposPromise = fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });

    const [userRes, reposRes] = await Promise.all([userPromise, reposPromise]);

    if (userRes.status === 403 || userRes.status === 429) {
      console.warn('GitHub API rate limited, falling back to cached profile data');
      return {
        isRateLimited: true,
        user: {
          login: PROFILE_INFO.username,
          name: PROFILE_INFO.name,
          avatar_url: PROFILE_INFO.avatarUrl,
          bio: PROFILE_INFO.bio,
          location: PROFILE_INFO.location,
          public_repos: 17,
          followers: 4,
          following: 2,
          html_url: PROFILE_INFO.githubUrl
        },
        repos: FEATURED_PROJECTS.map(p => ({
          name: p.repoName,
          description: p.description,
          stargazers_count: 3,
          forks_count: 0,
          language: p.language,
          html_url: p.githubUrl,
          topics: p.tags
        })),
        totalStars: 26,
        totalForks: 0,
        languages: { Python: 5, JavaScript: 6, HTML: 3, 'C++': 1, TypeScript: 1 }
      };
    }

    if (!userRes.ok) {
      throw new Error(`Failed to fetch user data: ${userRes.statusText} (${userRes.status})`);
    }

    const user = await userRes.json();
    let repos = [];
    if (reposRes.ok) {
      repos = await reposRes.json();
    }

    // Compute live real statistics
    let totalStars = 0;
    let totalForks = 0;
    const languagesMap = {};

    if (Array.isArray(repos)) {
      repos.forEach(repo => {
        totalStars += repo.stargazers_count || 0;
        totalForks += repo.forks_count || 0;
        if (repo.language) {
          languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
        }
      });
    }

    return {
      isRateLimited: false,
      user,
      repos: Array.isArray(repos) ? repos : [],
      totalStars,
      totalForks,
      languages: languagesMap
    };
  } catch (err) {
    console.error('Error fetching GitHub profile:', err);
    throw err;
  }
}
