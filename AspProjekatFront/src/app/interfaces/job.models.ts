export interface Company {
    id: number;
    name: string;
    description: string;
    image: string;
  }
  
  export interface Technology {
    id: number;
    name: string;
  }
  
  export interface Benefit {
    id: number;
    name: string;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  export interface Type {
    id: number;
    name: string;
  }
  export interface Job {
    id: number;
    position: Position;
    company: Company;
    technologies: Technology[];
    region: Region;
    type: Type;
    description: string;
    salary: number;
    benefits: Benefit[];
    categories: Category[];
    deadline: string;
    remote: Remote;
  }
  export interface Remote {
    id: number;
    name: string;
  }
  export interface Region {
    id: number;
    name: string;
  }
  export interface Position {
    id: number;
    name: string;
  }
  