import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Paper,
  Typography,
  Button,
  useTheme,
  Box,
  Avatar,
} from "@mui/material";

const Post = () => {
  const [liked, setLiked] = useState(false);
  const theme = useTheme();
  const toggleLike = () => setLiked(!liked);

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: 2,
        borderRadius: 2,
        marginBottom: 2,
      }}
    >
      {/* User Info */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <Avatar
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            sx={{ width: 50, height: 50, marginRight: 2 }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Raman Maharjan
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Software Engineer • 2h
            </Typography>
          </Box>
        </Box>
        <Button variant="outlined" size="small">
          + Follow
        </Button>
      </Box>

      {/* Post Content */}
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        🚨 The Harsh Reality of the Graphic Design Industry! ...
        {/* [trimmed for brevity] */}
      </Typography>

      {/* Post Image */}
      <Box
        component="img"
        src="https://via.placeholder.com/600x300"
        alt="Post"
        sx={{
          width: "100%",
          borderRadius: 2,
          marginBottom: 2,
        }}
      />

      {/* Post Actions */}
      <Box
        display="flex"
        justifyContent="space-between"
        borderTop={`1px solid ${theme.palette.divider}`}
        pt={1}
      >
        <Button
          size="small"
          startIcon={
            <i
              className={`bi ${
                liked ? "bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"
              }`}
            />
          }
          onClick={toggleLike}
          sx={{
            color: liked
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
            fontWeight: liked ? "bold" : "normal",
          }}
        >
          {liked ? "Liked" : "Like"}
        </Button>

        <Button
          size="small"
          startIcon={<i className="bi bi-chat-dots" />}
          sx={{ color: theme.palette.text.secondary }}
        >
          Comment
        </Button>

        <Button
          size="small"
          startIcon={<i className="bi bi-arrow-repeat" />}
          sx={{ color: theme.palette.text.secondary }}
        >
          Repost
        </Button>

        <Button
          size="small"
          startIcon={<i className="bi bi-send" />}
          sx={{ color: theme.palette.text.secondary }}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default Post;
