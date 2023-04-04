import Box from "@mui/material/Box";

export const Tag = ({ value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px 8px",
        backgroundColor: "#252525",
        color: "#fdfdfd",
        fontSize: "12px",
        textAlign: "justify",
        borderRadius: "16px",
      }}
    >
      {value}
    </Box>
  );
};
