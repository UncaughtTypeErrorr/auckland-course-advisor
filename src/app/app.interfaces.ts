export interface CourseCode {
  id: string;
  name: string;
  code: number;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  date: string;
  prerequisits: string[]; // honestly i don't really know exactly how this part of the form shoudl behave
  restrictions: string[];
  semester: { first: boolean; second: boolean };
  value: number;
  description: string;
}
