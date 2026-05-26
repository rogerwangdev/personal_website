export const BASE_PATH = "/personal_website";

export const RESUME_URL = `${BASE_PATH}/resume.pdf`;
export const GITHUB_URL = "https://github.com/rogerwangdev";
export const LINKEDIN_URL = "https://www.linkedin.com/in/luojiewang";
export const EMAIL = "lw3240@columbia.edu";

export const asset = (relativePath: string): string =>
  `${BASE_PATH}${relativePath.startsWith("/") ? "" : "/"}${relativePath}`;
