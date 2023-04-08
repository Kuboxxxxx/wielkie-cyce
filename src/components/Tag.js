import Box from "@mui/material/Box";

export const Tag = ({ value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "#252525",
        color: "#fdfdfd",
        fontSize: "12px",
        textAlign: "justify",
        borderRadius: "16px",
        margin: "4px 8px"
      }}
    >
      {value}
    </Box>
  );
};
