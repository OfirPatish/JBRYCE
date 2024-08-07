import React from "react";
import "./MeetingList.css";

interface Meeting {
  meeting_code: number;
  start_datetime: string;
  end_datetime: string;
  description: string;
  room_name: string;
}

interface MeetingListProps {
  meetings: Meeting[];
}

const MeetingList: React.FC<MeetingListProps> = ({ meetings }) => {
  return (
    <div className="MeetingList">
      <h2>Meetings</h2>
      <div className="MeetingCards">
        {meetings.map((meeting) => (
          <div key={meeting.meeting_code} className="MeetingCard">
            <div className="MeetingCardHeader">
              <span className="MeetingDateTime">
                {meeting.start_datetime}
                <br />
                {meeting.end_datetime}
              </span>
            </div>
            <div className="MeetingCardBody">
              <p>{meeting.description}</p>
              <p>
                <strong>Room:</strong> {meeting.room_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingList;
