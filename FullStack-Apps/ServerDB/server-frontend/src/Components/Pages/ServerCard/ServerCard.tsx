import React from "react";
import "./ServerCard.css";

interface Server {
  ID: number;
  NAME: string;
  IP: string;
  HostingCompanyName: string;
  Status: string;
  CreationTime: string;
}

interface ServerCardProps {
  server: Server;
  onToggleStatus: (server: Server) => void;
}

const ServerCard: React.FC<ServerCardProps> = ({ server, onToggleStatus }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="ServerCard">
      <h2>{server.NAME}</h2>
      <p>IP: {server.IP}</p>
      <p>Hosting Company: {server.HostingCompanyName}</p>
      <p>Status: {server.Status}</p>
      <p>Created on: {formatDate(server.CreationTime)}</p>
      <button onClick={() => onToggleStatus(server)}>
        {server.Status === "Active" ? "Set Inactive" : "Set Active"}
      </button>
    </div>
  );
};

export default ServerCard;
