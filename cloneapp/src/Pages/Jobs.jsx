import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material"; // ← make sure you import required components

const Jobs = ({ currentUser, suggestedUsers }) => {
  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
        <Grid container spacing={3} mt={5}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: "50px",
                    width: "100%",
                    backgroundColor: "#1976d2",
                  }}
                ></div>
                <Avatar
                  src={currentUser.profilePicture}
                  alt={currentUser.name}
                  sx={{
                    width: 70,
                    height: 70,
                    border: "3px solid white",
                    marginTop: "-35px",
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                  {currentUser.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currentUser.headline}
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Manage My Network
                </Typography>
                {["Followers", "Following", "Events", "Groups", "Pages"].map(
                  (item, index) => (
                    <Button
                      key={index}
                      fullWidth
                      variant="outlined"
                      sx={{ mb: 1 }}
                    >
                      {item}
                    </Button>
                  )
                )}
              </CardContent>
              <Divider />
              <CardContent sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ textTransform: "none" }}
                >
                  Visit your profile
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8} lg={6}>
            {/* Invitations */}
            <Card sx={{ mb: 3, p: 3, minHeight: 150 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Invitations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You have no new invitations.
              </Typography>
            </Card>

            {/* Suggested Connections */}
            <Card sx={{ mb: 3, p: 3, minHeight: 250 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                People You May Know
              </Typography>
              {suggestedUsers.map((user) => (
                <Grid
                  container
                  spacing={2}
                  key={user.id}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Grid item>
                    <Avatar src="/avatar.png" sx={{ width: 56, height: 56 }} />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.job}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mt: 1 }}
                    >
                      Connect
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Card>

            {/* Groups & Pages */}
            <Card sx={{ p: 3, minHeight: 150 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Groups, Pages & Newsletters
              </Typography>
              <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
                Discover More Groups
              </Button>
              <Button variant="outlined" fullWidth>
                Manage Your Pages
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Jobs;
