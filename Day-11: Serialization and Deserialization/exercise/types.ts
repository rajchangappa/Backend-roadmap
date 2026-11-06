// Defines TypeScript data structures
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  success: string;
  message: string;
  data?: T;
  error?: string;
}
