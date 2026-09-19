import db from './db.js';

const getAllProjects = async () => {
    const query = `
        SELECT sp.project_id, sp.title, sp.description, sp.location, sp.date, o.name AS organization_name
        FROM public.project sp
        JOIN public.organization o ON sp.organization_id = o.organization_id;
    `;
    
    const result = await db.query(query);

    return result.rows;
}

const getProjectsByOrganizationId = async (organizationId) => {
      const query = `
        SELECT
          project_id,
          organization_id,
          title,
          description,
          location,
          date
        FROM project
        WHERE organization_id = $1
        ORDER BY date;
      `;
      
      const queryParams = [organizationId];
      const result = await db.query(query, queryParams);

      return result.rows;
};

const getUpcomingProjects = async (number_of_projects) => {
    const query = `
        SELECT sp.project_id, sp.title, sp.description, sp.location, sp.date, sp.organization_id, o.name AS organization_name
        FROM public.project sp
        JOIN public.organization o ON sp.organization_id = o.organization_id
        WHERE sp.date >= CURRENT_DATE
        ORDER BY sp.date ASC
        LIMIT $1;
    `;

    const queryParams = [number_of_projects];
    const result = await db.query(query, queryParams);

    return result.rows;
}

const getProjectDetails = async (projectId) => {
    const query = `
        SELECT sp.project_id, sp.title, sp.description, sp.date, sp.location, sp.organization_id, o.name AS organization_name
        FROM public.project sp
        JOIN public.organization o ON sp.organization_id = o.organization_id
        WHERE sp.project_id = $1;
    `;

    const queryParams = [projectId];
    const result = await db.query(query, queryParams);

    return result.rows[0];
}



export { getAllProjects, getProjectsByOrganizationId, getUpcomingProjects, getProjectDetails };