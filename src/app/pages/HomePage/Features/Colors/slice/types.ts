/* --- STATE --- */
export interface ColorsState {
  loading: boolean;
  error?: RepoErrorType | null;
  colors: Color[];
}

export type Color = {
  id: string;
  rgb: string;
  hex: string;
  name: string;
  showRGB: boolean;
};

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}

export type ContainerState = ColorsState;
