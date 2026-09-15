import express from 'express';

import { homePage } from './controllers/index.js';
import { projectsPage } from './controllers/projects.js';
import { categoriesPage } from './controllers/categories.js';
import { organizationsPage, showOrganizationDetailsPage } from './controllers/organizations.js';
import { testError } from './controllers/errors.js';

const router = express.Router();

router.get('/', homePage);
router.get('/projects', projectsPage);
router.get('/categories', categoriesPage);
router.get('/organizations', organizationsPage);
router.get('/organization/:id', showOrganizationDetailsPage);

// error-handling routes
router.get('/test-error', testError);

export default router;