import React from "react";
import { Vehicle } from "../../Model/Vehicle";
import { Box, Typography, Paper } from "@mui/material";

interface SingleItemProps {
  vehicle: Vehicle;
}

const SingleItem: React.FC<SingleItemProps> = ({ vehicle }) => {
  return (
    <Paper
      sx={{
        border: "1px solid grey",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px 0",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h5" component="div">
        {vehicle.tozeret_nm}
      </Typography>
      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Typography variant="body1">Sug Degem: {vehicle.sug_degem}</Typography>
        <Typography variant="body1">Degem NM: {vehicle.degem_nm}</Typography>
        <Typography variant="body1">Ramat Gimur: {vehicle.ramat_gimur}</Typography>
        <Typography variant="body1">Ramat Eivzur Betihuty: {vehicle.ramat_eivzur_betihuty}</Typography>
        <Typography variant="body1">Kvutzat Zihum: {vehicle.kvutzat_zihum}</Typography>
        <Typography variant="body1">Shnat Yitzur: {vehicle.shnat_yitzur}</Typography>
        <Typography variant="body1">Degem Manoa: {vehicle.degem_manoa}</Typography>
        <Typography variant="body1">Mivchan Acharon Dt: {vehicle.mivchan_acharon_dt}</Typography>
        <Typography variant="body1">Tokef Dt: {vehicle.tokef_dt}</Typography>
        <Typography variant="body1">Baalut: {vehicle.baalut}</Typography>
        <Typography variant="body1">Misgeret: {vehicle.misgeret}</Typography>
        <Typography variant="body1">Tzeva Rechev: {vehicle.tzeva_rechev}</Typography>
        <Typography variant="body1">Zmig Kidmi: {vehicle.zmig_kidmi}</Typography>
        <Typography variant="body1">Zmig Ahori: {vehicle.zmig_ahori}</Typography>
        <Typography variant="body1">Sug Delek Nm: {vehicle.sug_delek_nm}</Typography>
        <Typography variant="body1">Horaat Rishum: {vehicle.horaat_rishum}</Typography>
        <Typography variant="body1">Moed Aliya Lakvish: {vehicle.moed_aliya_lakvish}</Typography>
        <Typography variant="body1">Kinuy Mishari: {vehicle.kinuy_mishari}</Typography>
        <Typography variant="body1">Rank: {vehicle.rank}</Typography>
      </Box>
    </Paper>
  );
};

export default SingleItem;
