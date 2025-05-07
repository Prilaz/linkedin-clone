import { Link } from "react-router-dom";
import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button,
  useTheme,
  Divider,
} from "@mui/material";

export default function Sidebar({ user = {} }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 4,
        mx: 2,
        position: "sticky",
        top: "130px",
      }}
    >
      {/* Profile Card */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          mb: 3,
        }}
      >
        <Box
          sx={{
            height: "50px",
            backgroundColor: theme.palette.primary.main,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            pt: 0,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Avatar
            src={user.profilePicture || "/avatar.png"}
            alt={user.name || "User"}
            sx={{
              width: 70,
              height: 70,
              mt: -3.5,
              border: "2px solid white",
            }}
          />
          <Typography variant="subtitle1" fontWeight="bold" mt={1}>
            {user.name || "Guest User"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            {user.headline || "Welcome to LinkedIn"}
          </Typography>
          <Link to={`/profile/${user.username || "guest"}`}>
            <Button variant="contained" size="small" sx={{ mt: 1 }}>
              View Profile
            </Button>
          </Link>
        </Box>
      </Paper>

      {/* Your Sections */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box p={2}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            Your Sections
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Box component={Link} to="/saved" sx={linkStyle}>
            <i className="bi bi-bookmark-fill" style={{ marginRight: 8 }} />
            Saved Items
          </Box>

          <Box component={Link} to="/groups" sx={linkStyle}>
            <i className="bi bi-people-fill" style={{ marginRight: 8 }} />
            Groups
          </Box>

          <Box component={Link} to="/newsletters" sx={linkStyle}>
            <i className="bi bi-envelope-fill" style={{ marginRight: 8 }} />
            Newsletters
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

const linkStyle = {
  display: "flex",
  alignItems: "center",
  color: "text.primary",
  textDecoration: "none",
  py: 1,
  "&:hover": {
    textDecoration: "underline",
  },
};
