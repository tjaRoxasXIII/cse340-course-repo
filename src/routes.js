import express from 'express';

import { homePage } from './controllers/index.js';
import { projectsPage, showProjectDetailsPage, showNewProjectForm, processNewProjectForm, projectValidation, showEditProjectForm, processEditProjectForm } from './controllers/projects.js';
import { categoriesPage, showCategoryDetailsPage, showNewCategoryForm, showAssignCategoriesForm, processAssignCategoriesForm, categoryValidation, processNewCategoryForm, processEditCategoryForm, showEditCategoryForm } from './controllers/categories.js';
import { organizationsPage, showOrganizationDetailsPage, showNewOrganizationForm, processNewOrganizationForm, organizationValidation, showEditOrganizationForm, processEditOrganizationForm } from './controllers/organizations.js';
import { testError } from './controllers/errors.js';

const router = express.Router();

router.get('/', homePage);
router.get('/projects', projectsPage);
router.get('/project/:id', showProjectDetailsPage);
router.get('/categories', categoriesPage);
router.get('/category/:id', showCategoryDetailsPage);
router.get('/organizations', organizationsPage);
router.get('/organization/:id', showOrganizationDetailsPage);

// Route for new organization page
router.get('/new-organization', showNewOrganizationForm);
router.get('/edit-organization/:id', showEditOrganizationForm);
// Route to handle new organization form submission
router.post('/new-organization', organizationValidation, processNewOrganizationForm);
router.post('/edit-organization/:id', organizationValidation, processEditOrganizationForm);
// Route for new project page
router.get('/new-project', showNewProjectForm);
router.get('/edit-project/:id', showEditProjectForm);
// Route to handle new project form submission
router.post('/new-project', projectValidation, processNewProjectForm);
router.post('/edit-project/:id', projectValidation, processEditProjectForm);
// Routes to handle the assign categories to project form
router.post('/assign-categories/:projectId', processAssignCategoriesForm);
router.get('/assign-categories/:projectId', showAssignCategoriesForm);

router.get('/new-category', showNewCategoryForm);
router.post('/new-category', categoryValidation, processNewCategoryForm);
router.get('/edit-category/:id', showEditCategoryForm);
router.post('/edit-category/:id', categoryValidation, processEditCategoryForm);

// error-handling routes
router.get('/test-error', testError);

export default router;