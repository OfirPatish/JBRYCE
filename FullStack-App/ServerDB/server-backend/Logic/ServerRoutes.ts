import dal_mysql from "../DAL/dal_mysql";

const getAllServers = async (onlyActive: boolean, sortOrder: "asc" | "desc") => {
  return await dal_mysql.execute(`
    SELECT 
      servers.ID AS ID,
      servers.Name AS NAME,
      servers.IP AS IP,
      hostingcompanies.CompanyName AS HostingCompanyName,
      servers.Status AS Status,
      servers.CreationTime AS CreationTime
    FROM 
      servers
    JOIN 
      hostingcompanies ON servers.HostingCompanyID = hostingcompanies.ID
    ${onlyActive ? "WHERE servers.Status = 'Active'" : ""}
    ORDER BY servers.CreationTime ${sortOrder};
  `);
};

const updateServerStatus = async (ID: number, Status: "Active" | "Inactive") => {
  return await dal_mysql.execute(`
    UPDATE servers
    SET Status = '${Status}'
    WHERE ID = ${ID}
  `);
};

export { getAllServers, updateServerStatus };
