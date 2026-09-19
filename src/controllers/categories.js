import { getAllCategories, getCategoryById, getProjectsByCategoryId } from '../models/categories.js';

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

export { categoriesPage, showCategoryDetailsPage };