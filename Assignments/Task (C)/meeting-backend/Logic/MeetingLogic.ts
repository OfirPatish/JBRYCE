import dal_mysql from "../DAL/dal_mysql";

interface Meeting {
  group_code: number;
  start_datetime: string;
  end_datetime: string;
  description: string;
  room_name: string;
}

const getAllDevelopmentGroups = async () => {
  return await dal_mysql.execute(`
    SELECT 
      group_code,
      group_name
    FROM 
      DevelopmentGroups
  `);
};

const getMeetingsByGroupCode = async (groupCode: number) => {
  return await dal_mysql.execute(`
    SELECT 
      Meetings.meeting_code,
      DevelopmentGroups.group_name,
      DATE_FORMAT(Meetings.start_datetime, '%Y-%m-%d %H:%i:%s') AS start_datetime,
      DATE_FORMAT(Meetings.end_datetime, '%Y-%m-%d %H:%i:%s') AS end_datetime,
      Meetings.description,
      Meetings.room_name
    FROM 
      Meetings
    INNER JOIN 
      DevelopmentGroups ON Meetings.group_code = DevelopmentGroups.group_code
    WHERE 
      Meetings.group_code = ${groupCode}
  `);
};

const addNewMeeting = async (meeting: Meeting) => {
  const { group_code, start_datetime, end_datetime, description, room_name } = meeting;

  if (start_datetime === end_datetime) {
    throw new Error("Start and end date/time cannot be the same.");
  }

  const now = new Date().toISOString();
  if (start_datetime < now) {
    throw new Error("Cannot add a meeting in the past.");
  }

  if (end_datetime < start_datetime) {
    throw new Error("End date/time cannot be before start date/time.");
  }

  return await dal_mysql.execute(`
    INSERT INTO Meetings (group_code, start_datetime, end_datetime, description, room_name)
    VALUES (${group_code}, '${start_datetime}', '${end_datetime}', '${description}', '${room_name}')
  `);
};

export { getAllDevelopmentGroups, getMeetingsByGroupCode, addNewMeeting };
