export class Project {
    id: number;
    name: string;
    description: string;
    // compiled: boolean;
    project_functions: [{
          name: string,
          description: string,
          code: string  
    }]
}