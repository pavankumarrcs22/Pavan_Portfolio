export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    live?: string;
    hasGitLink: boolean;
}