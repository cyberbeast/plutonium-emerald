export class Project {
    // USED MEMBERS BEGIN>>>>>>>>>>>>
    id: number; //API Project ID
    name: string; //Name of the API Project
    description: string; //Short, Sweet & Sharp Descrtiption of the API Project
    // USED MEMBERS END>>>>>>>>>>>>>>

    // UNUSED MEMBERS BEGIN>>>>>>>>>>
    // compiled: boolean; // Flag for checking if the Project has been compiled before. Set to TRUE if compiled. Set to FALSE if latest definitions are not compiled.
    // UNUSED MEMBERS END>>>>>>>>>>>>

    // List of functions associated with the parent Project object.
    project_functions: [{
          name: string, // Name of API function
          description: string, // Description of API function.
          code: string // Source code for API function implementation.
    }]
}