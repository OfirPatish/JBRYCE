import React from "react";
import "./AddMeetingForm.css";

interface AddMeetingFormProps {
  newMeeting: {
    group_code: string;
    start_datetime: string;
    end_datetime: string;
    description: string;
    room_name: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleAddMeeting: (e: React.FormEvent) => void;
  groups: { group_code: number; group_name: string }[];
  isLoading: boolean;
  successMessage: string;
  errorMessage: string;
}

const AddMeetingForm: React.FC<AddMeetingFormProps> = ({
  newMeeting,
  handleInputChange,
  handleAddMeeting,
  groups,
  isLoading,
  successMessage,
  errorMessage,
}) => {
  return (
    <div className="AddMeetingForm">
      <h2>Add New Meeting</h2>
      <form onSubmit={handleAddMeeting}>
        <select name="group_code" value={newMeeting.group_code} onChange={handleInputChange} required>
          <option value="">Select a group</option>
          {groups.map((group) => (
            <option key={group.group_code} value={group.group_code}>
              {group.group_name}
            </option>
          ))}
        </select>
        <input
          type="datetime-local"
          name="start_datetime"
          placeholder="Start DateTime"
          value={newMeeting.start_datetime}
          onChange={handleInputChange}
          required
        />
        <input
          type="datetime-local"
          name="end_datetime"
          placeholder="End DateTime"
          value={newMeeting.end_datetime}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMeeting.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="room_name"
          placeholder="Room Name"
          value={newMeeting.room_name}
          onChange={handleInputChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Meeting"}
        </button>
      </form>
      {successMessage && <p className="successMessage">{successMessage}</p>}
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}{" "}
    </div>
  );
};

export default AddMeetingForm;
