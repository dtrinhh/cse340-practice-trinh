// import statements for controllers and middleware
import { Router } from 'express';
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';
import { facultyDetailPage, facultyListPage } from './faculty/faculty.js';
import contactRoutes from './forms/contact.js';


// Create a new router instance
const router = Router();

// Router middleware should be added here before route definitions and After creating our router instance
// Add catalog-specific styles to all catalog routes
router.use('/catalog', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/catalog.css">');
    next();
});

// Add faculty-specific styles to all Faculty members
router.use('/faculty', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/faculty.css">')
    next();
});

// Add contact-specific styles to all contact routes
router.use('/contact', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/contact.css">');
    next();
});

// Route definitions
// Home and about page
router.get('/', homePage);
router.get('/about', aboutPage);

// Course catalog pages
router.get('/catalog', catalogPage);
router.get('/catalog/:slugId', courseDetailPage);

// Faculty Pages
 router.get('/faculty', facultyListPage);
 router.get('/faculty/:facultySlug', facultyDetailPage);

 // Contact form routes
router.use('/contact', contactRoutes);

// Demo page with special middleware
router.get('/demo', addDemoHeaders, demoPage);

// Route for error page
router.get('/test-error', testErrorPage);


export default router;