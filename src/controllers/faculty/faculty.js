import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js'

// Route handler for faculty list page
const facultyListPage = (req, res) => {
    const sortBy = req.query.sort || 'department';
    const facultyList = getSortedFaculty(sortBy);
    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: facultyList,
        currentSort: sortBy
    });
};

// Route handler for individual faculty
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const faculty = getFacultyById(facultyId);

    // Error 404 logic for non existant facultyId
    if (!faculty) {
        const err = new Error(`Faculty ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: faculty.name,
        faculty: faculty
    });
};
export { facultyListPage, facultyDetailPage };
