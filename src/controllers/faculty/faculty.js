import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js'

// Route handler for faculty list page
const facultyListPage = async (req, res) => {
    const sortBy = req.query.sort || 'department';
    const facultyList = await getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: facultyList,
        currentSort: sortBy
    });
};

// Route handler for individual faculty members
const facultyDetailPage = async (req, res, next) => {
    const facultySlug = req.params.facultySlug;
    const facultyMember = await getFacultyBySlug(facultySlug);

    // Error 404 logic for non existant facultySlug
    if (Object.keys(facultyMember).length === 0) {
        const err = new Error(`Faculty ${facultySlug} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: facultyMember.name,
        faculty: facultyMember
    });
};
export { facultyListPage, facultyDetailPage };
