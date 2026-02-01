// import statements for controllers and middleware
import { Router } from 'express';
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js'

// Create a new router instance
const router = Router();

// Route definitions

// Home and about page
router.get('/', homePage);
router.get('/about', aboutPage);

// Course catalog pages
router.get('/catalog', catalogPage);
router.get('/catalog/:courseId', courseDetailPage);

// Demo page with special middleware
router.get('/demo', addDemoHeaders, demoPage);

// Route for error page
router.get('/test-error', testErrorPage);


export default router;