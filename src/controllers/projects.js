import { getAllProjects, getProjectDetails, getUpcomingProjects } from '../models/projects.js';
import { getCategoriesByProjectId } from '../models/categories.js'; 

const NUMBER_OF_UPCOMING_PROJECTS = 5;

const projectsPage = async (req, res) => {
    const projects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);
    const title = 'Service Projects';
  
    res.render('projects', { title, projects });
};

const showProjectDetailsPage = async (req, res) => {
    const projectId = req.params.id;
    const project = await getProjectDetails(projectId);
    const title = 'Project Details';
    const categories = await getCategoriesByProjectId(projectId);

    console.log(categories);

    res.render('project', { title, projectDetails: project, categories });
};

export { projectsPage, showProjectDetailsPage };