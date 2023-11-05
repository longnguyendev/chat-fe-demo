import {
  Avatar,
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export interface MessengerProps {
  id: string;
  avatar: string;
  name: string;
  status: boolean;
  content: string;
  created_at: string;
}

function Messenger({
  avatar,
  name,
  status,
  content,
  created_at,
}: MessengerProps) {
  return (
    <ListItemButton
      alignItems="center"
      sx={{
        bgcolor: " #fff",
        borderRadius: "12px",
        mb: 2,
      }}
    >
      <ListItemAvatar>
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            "& .MuiBadge-badge": {
              right: 10,
              bottom: 6,
              width: "9px",
              height: "9px",
              ...{ bgcolor: status ? "#76D45E" : "#999" },
            },
          }}
        >
          <Avatar
            alt={name}
            src={avatar}
            sx={{ width: "48px", height: "48px" }}
          />
        </Badge>
      </ListItemAvatar>
      <ListItemText
        sx={{ ml: 1 }}
        primary={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight={700} component={"span"}>
              {name}
            </Typography>
            <Typography color="#999" fontSize="12px" component={"span"}>
              {created_at}
            </Typography>
          </Box>
        }
        secondary={
          <>
            <Typography
              sx={{ display: "inline", fontSize: "12px" }}
              component="span"
              color="#999"
            >
              {content}
            </Typography>
          </>
        }
      />
    </ListItemButton>
  );
}
export { Messenger };
