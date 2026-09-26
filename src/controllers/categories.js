import { getAllCategories, getCategoryById, getCategoriesByProjectId, getProjectsByCategoryId, updateCategoryAssignments, createCategory, updateCategory } from '../models/categories.js';
import { getProjectDetails } from '../models/projects.js';
import { body, validationResult } from 'express-validator';

const categoryValidation = [
    body('name')
        .trim()
        .isLength({ min: 3, max: 100 })
        .withMessage('Category name must be between 3 and 100 characters long.')
];

const categoriesPage = async (req, res) => {
    const categories = await getAllCategories();
    const title = 'Categories';
    res.render('categories', { title, categories });
};

const showCategoryDetailsPage = async (req, res) => {
    console.log("Category controller reached");

    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId);
    const projects = await getProjectsByCategoryId(categoryId);
    const title = `Category: ${category.name}`;

    console.log("Category ID:", categoryId);
    console.log("Category result:", category);
    console.log("Projects result:", projects);

    res.render('category', { title, category, projects});

};

const showAssignCategoriesForm = async (req, res) => {
    const projectId = req.params.projectId;

    const projectDetails = await getProjectDetails(projectId);
    const categories = await getAllCategories();
    const assignedCategories = await getCategoriesByProjectId(projectId);

    const title = 'Assign Categories to Project';

    res.render('assign-categories', { title, projectId, projectDetails, categories, assignedCategories });
};

const processAssignCategoriesForm = async (req, res) => {
    const projectId = req.params.projectId;
    const selectedCategoryIds = req.body.categoryIds || [];
    
    // Ensure selectedCategoryIds is an array
    const categoryIdsArray = Array.isArray(selectedCategoryIds) ? selectedCategoryIds : [selectedCategoryIds];
    await updateCategoryAssignments(projectId, categoryIdsArray);
    req.flash('success', 'Categories updated successfully.');
    res.redirect(`/project/${projectId}`);
};

const showNewCategoryForm = (req, res) => {
    const title = 'Create New Category';
    res.render('new-category', { title });
}

const showEditCategoryForm = async (req, res) => {
    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId);
    const title = 'Edit Category';
    
    res.render('edit-category', { title, category });
};

const processNewCategoryForm = async (req, res) => {
    // Check for validation errors
    const results = validationResult(req);

    if (!results.isEmpty()) {
        const errors = results.array();
        const title = 'Create New Category';
        res.render('new-category', { title, errors });
        return;
    }

    const { name } = req.body;
    await createCategory(name);
    req.flash('success', 'Category created successfully.');
    res.redirect('/categories');
};

const processEditCategoryForm = async (req, res) => {
    // Check for validation errors
    const results = validationResult(req);

    if (!results.isEmpty()) {
        const errors = results.array();
        const title = 'Edit Category';
        res.render('edit-category', { title, errors });
        return;
    }

    const { name } = req.body;
    await updateCategory(req.params.id, name);
    req.flash('success', 'Category updated successfully.');
    res.redirect('/categories');
};

export { categoriesPage, showCategoryDetailsPage, showAssignCategoriesForm, processAssignCategoriesForm, categoryValidation, showNewCategoryForm, showEditCategoryForm, processNewCategoryForm, processEditCategoryForm };