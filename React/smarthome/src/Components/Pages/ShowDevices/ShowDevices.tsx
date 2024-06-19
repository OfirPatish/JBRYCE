import { Box, Typography, TextField, Divider, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { epID } from "../../Model/epid";
import { Devices } from "../../Model/devices";
import { Home } from "../../Model/home";
import ShowEPID from "../ShowEPID/ShowEPID";
import HomeIcon from "@mui/icons-material/Home";

function ShowDevices(): JSX.Element {
  let homes = [
    new Home(1, "My Smart Home", [
      new Devices(1, "Living Room", "Smart Light", 10, [
        new epID(1, "Living Room Light"),
        new epID(2, "Living Room Fan"),
      ]),
      new Devices(2, "Kitchen", "Smart Fridge", 20, [
        new epID(3, "Kitchen Fridge"),
        new epID(4, "Kitchen Light"),
        new epID(5, "Kitchen Fan"),
      ]),
    ]),
    new Home(2, "My Other Smart Home", [
      new Devices(3, "Bedroom", "Smart Bed", 30, [new epID(6, "Bedroom Light"), new epID(7, "Bedroom Fan")]),
      new Devices(4, "Bathroom", "Smart Shower", 40, [
        new epID(8, "Bathroom Shower"),
        new epID(9, "Bathroom Light"),
        new epID(10, "Bathroom Fan"),
      ]),
    ]),
  ];

  return (
    <Box sx={{ p: 2, mt: 6 }}>
      {homes.map((home, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <Card>
            <CardHeader
              avatar={
                <IconButton>
                  <HomeIcon />
                </IconButton>
              }
              title={home.name}
            />
            <CardContent>
              <Divider />
              {home.devices.map((device, index) => (
                <Box key={index} sx={{ mt: 2 }}>
                  <Typography variant="h5">Device {index + 1}</Typography>
                  <TextField
                    label="ID"
                    defaultValue={device.id}
                    style={{ width: "80%", display: "block" }}
                    margin="normal"
                  />
                  <TextField
                    label="Name"
                    defaultValue={device.name}
                    style={{ width: "80%", display: "block" }}
                    margin="normal"
                  />
                  <TextField
                    label="Location"
                    defaultValue={device.location}
                    style={{ width: "80%", display: "block" }}
                    margin="normal"
                  />
                  <TextField
                    label="Node ID"
                    defaultValue={device.nodeid.toString()}
                    style={{ width: "80%", display: "block" }}
                    margin="normal"
                  />
                  <Typography variant="h6" gutterBottom>
                    Endpoints:
                  </Typography>
                  <ShowEPID endPoints={device.epid} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default ShowDevices;
