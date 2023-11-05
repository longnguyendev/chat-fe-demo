import { Search, People } from "@/assets/icons";
import { SelectNone } from "@/assets/images";
import { Messenger, MessengerProps } from "@/components";
import { Box, Button, InputBase, List, Typography } from "@mui/material";

const messengers: MessengerProps[] = [
  {
    id: "1",
    name: "Donald Trump",
    content: "thank you so much",
    created_at: "11:30",
    status: true,
    avatar: "/images/Ellipse 1133.png",
  },
  {
    id: "2",
    name: "Kim Jong Un",
    content: "that'st it goodbye!",
    created_at: "09:36",
    status: false,
    avatar: "/images/Ellipse 1136.png",
  },
  {
    id: "3",
    name: "Vladimir Putin",
    content: "Look what I found",
    created_at: "08:36",
    status: true,
    avatar: "/images/Ellipse 1139.png",
  },
];

export default function Home() {
  return (
    <main>
      <Box display="flex">
        <Box
          flexShrink={0}
          sx={{
            borderLeft: "1px solid #eee",
            borderRight: "1px solid #eee",
            padding: "35px 29px",
            boxShadow: 1,
            bgcolor: "#F0F4FA",
            width: { xs: "100%", md: "384px" },
          }}
        >
          <Typography fontSize={32} fontWeight="bolder">
            Chats
          </Typography>
          <Box
            px={2}
            py={1}
            marginTop="35px"
            display="flex"
            alignItems="center"
            sx={{
              borderRadius: 6,
              background: "#EAF2FE",
              color: "#709CE6",
            }}
          >
            <Search />
            <InputBase
              placeholder="Search"
              fullWidth
              sx={{
                ml: 1,
              }}
            />
          </Box>
          <Button
            sx={{
              width: "100%",
              marginTop: "20px",
              color: "#727375",
              py: 1.5,
              border: "2px solid #eee",
              borderRadius: "12px",
              fontWeight: "500",
              bgcolor: "#FFF",
            }}
          >
            <People />
            {" Add a new group"}
          </Button>
          <Typography mt="30px" mb={1} sx={{ userSelect: "none" }}>
            All chat
          </Typography>
          <List>
            {messengers &&
              messengers.map((item) => (
                <Messenger
                  key={item.id}
                  avatar={item.avatar}
                  content={item.content}
                  created_at={item.created_at}
                  name={item.name}
                  id={item.id}
                  status={item.status}
                ></Messenger>
              ))}
          </List>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{ width: { xs: 0, md: "100%" } }}
        >
          <SelectNone />
        </Box>
      </Box>
    </main>
  );
}
