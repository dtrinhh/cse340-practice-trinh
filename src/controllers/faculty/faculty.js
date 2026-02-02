import { getAllFaculty, getFacultyById, getSortedFaculty } from './models/faculty/list.ejs'

// Route handler for faculty list page
const facultyListPage = (req, res) => {
    const facultyList = getAllFaculty();
    res.render('faculty', {
        title: 'Faculty List',
        faculty: facultyList
    });
};

const facultyDetailPage = (req, res) => {
    const facultyId = req.params.facultyId;
    const faculty = getFacultyById(facultyId);

    // Error 404 logic for non existant facultyId
    if (!faculty) {
        const err = new Error(`Faculty ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }
    
    // Sorting handler
    const sortBy = req.query.sort || 'department';
    const sortedFaculty = getSortedFaculty(sortBy)
    res.render('faculty-detail', {
        title: 'Faculty Department',
        faculty: sortedFaculty,
        currentSort: sortBy
    });
};
export { facultyListPage, facultyDetailPage };
