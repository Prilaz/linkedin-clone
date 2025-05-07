import React from "react";
import {
  Paper,
  Typography,
  useTheme,
  Box,
  List,
  ListItem,
} from "@mui/material";

const Rightbar = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        width: 290,
        p: 3,
        m: 2,
        mt: 4,
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Trending
      </Typography>
      <List disablePadding>
        {[
          "React 18 Released",
          "Top 10 Coding Languages in 2025",
          "How to Manage Remote Teams",
        ].map((item, index) => (
          <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
            <Typography variant="body2" color="text.primary">
              • {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Rightbar;
