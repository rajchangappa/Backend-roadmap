export interface Task {
  id: string;
  title: string;
  description?: string | undefined;
  isCompleted: boolean;
}
