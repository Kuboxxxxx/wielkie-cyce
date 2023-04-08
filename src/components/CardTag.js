import Box from "@mui/material/Box";

export const CardTag = ({ value }) => {
  return (
    <Box
      sx={{
        padding: "4px 8px",
        margin: "4px 8px",
        border: "1px solid #fdfdfd",
        filter:
          "drop-shadow(0px 4px 500px rgba(0, 0, 0, 0.07)) drop-shadow(0px 0.500862px 62.6078px rgba(0, 0, 0, 0.035));",
        borderRadius: "16px",
        fontSize: "10px",
      }}
    >
      {value}
    </Box>
  );
};
