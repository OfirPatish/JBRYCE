import { useEffect, useState } from "react";
import axios from "axios";
import ServerCard from "../ServerCard/ServerCard";
import "./ServerList.css";

interface Server {
  ID: number;
  NAME: string;
  IP: string;
  HostingCompanyName: string;
  Status: string;
  CreationTime: string;
}

function ServerList(): JSX.Element {
  const [servers, setServers] = useState<Server[]>([]);
  const [onlyActive, setOnlyActive] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/servers?onlyActive=${onlyActive}&sortOrder=${sortOrder}`
        );
        setServers(response.data);
      } catch (error) {
        console.error("Failed to fetch servers.", error);
      }
    };
    fetchServers();
  }, [onlyActive, sortOrder]);

  const toggleStatus = async (server: Server) => {
    const newStatus = server.Status === "Active" ? "Inactive" : "Active";
    try {
      await axios.post("http://localhost:8080/api/server/status", { ID: server.ID, Status: newStatus });
      setServers((prevServers) => prevServers.map((s) => (s.ID === server.ID ? { ...s, Status: newStatus } : s)));
    } catch (error) {
      console.error("Failed to update server status.", error);
    }
  };

  return (
    <div className="ServerList">
      <h1>Explore Our Servers</h1>
      <div className="controls">
        <label>
          <input type="checkbox" checked={onlyActive} onChange={() => setOnlyActive(!onlyActive)} />
          Show only active servers
        </label>
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          Sort by Creation Time ({sortOrder === "asc" ? "Oldest First" : "Newest First"})
        </button>
      </div>
      {servers.map((server: Server) => (
        <ServerCard key={server.ID} server={server} onToggleStatus={toggleStatus} />
      ))}
    </div>
  );
}

export default ServerList;
