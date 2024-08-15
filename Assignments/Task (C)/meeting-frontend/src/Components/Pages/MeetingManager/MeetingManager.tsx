import React, { useEffect, useState } from "react";
import { getDevelopmentGroups, getMeetingsByGroupCode, addNewMeeting } from "../../Services/ApiService";
import MeetingList from "../../Pages/MeetingList/MeetingList";
import AddMeetingForm from "../../Pages/AddMeetingForm/AddMeetingForm";
import "./MeetingManager.css";

const MeetingManager = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [meetings, setMeetings] = useState([]);
  const [newMeeting, setNewMeeting] = useState({
    group_code: "",
    start_datetime: "",
    end_datetime: "",
    description: "",
    room_name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchGroups = async () => {
      const data = await getDevelopmentGroups();
      setGroups(data);
    };
    fetchGroups();
  }, []);

  useEffect(() => {
    if (selectedGroup !== null) {
      const fetchMeetings = async () => {
        const data = await getMeetingsByGroupCode(selectedGroup);
        setMeetings(data);
      };
      fetchMeetings();
    }
  }, [selectedGroup]);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewMeeting({
      ...newMeeting,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await addNewMeeting(newMeeting);
      setIsLoading(false);
      setSuccessMessage("Meeting added successfully!");
      setNewMeeting({
        group_code: "",
        start_datetime: "",
        end_datetime: "",
        description: "",
        room_name: "",
      });
      if (selectedGroup !== null) {
        const data = await getMeetingsByGroupCode(selectedGroup);
        setMeetings(data);
      }
    } catch (error) {
      setIsLoading(false);
      const err = error as { response?: { status: number; data: string } };
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  return (
    <div className="MeetingManager">
      <h1>Development Groups</h1>
      <select onChange={handleGroupChange}>
        <option value="">Select a group</option>
        {groups.map((group: any) => (
          <option key={group.group_code} value={group.group_code}>
            {group.group_name}
          </option>
        ))}
      </select>
      {selectedGroup !== null && <MeetingList meetings={meetings} />}
      <AddMeetingForm
        newMeeting={newMeeting}
        handleInputChange={handleInputChange}
        handleAddMeeting={handleAddMeeting}
        groups={groups}
        isLoading={isLoading}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default MeetingManager;
