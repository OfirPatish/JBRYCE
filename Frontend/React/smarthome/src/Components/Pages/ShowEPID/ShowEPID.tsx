import { Box, Typography, TextField } from "@mui/material";
import { epID } from "../../Model/epid";

interface epidProps {
  endPoints: epID[];
}

function ShowEPID(props: epidProps): JSX.Element {
  return (
    <Box sx={{ mt: 2 }}>
      {props.endPoints.map((item, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>EP ID:</strong> {item.id}
          </Typography>
          <TextField label="Name" defaultValue={item.name} style={{ width: "80%", display: "block" }} margin="normal" />
        </Box>
      ))}
    </Box>
  );
}

export default ShowEPID;
