import { Box, Card, Grid, IconButton, styled, Tooltip } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import GroupIcon from "@mui/icons-material/Group";
import { Small } from "app/components/Typography";

// STYLED COMPONENTS
const StyledCard = styled(Card)(({ theme, bgcolor }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "14px", // Reduced padding to fit the new height
  borderRadius: "12px",
  backgroundImage: bgcolor,
  color: "#fff",
  height: "110px" // Adjusted height
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& small": { color: "#fff", fontSize: "14px", fontWeight: "600" }, // Adjusted font size
  "& .icon": { fontSize: "36px", opacity: 0.8, color: "rgba(255, 255, 255, 0.7)" } // Adjusted icon size
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  fontSize: "24px", // Adjusted font size
  fontWeight: "700",
  letterSpacing: "0.5px",
  color: "#fff"
}));

export default function StatCards() {
  const cardList = [
    {
      name: "Total Request",
      amount: "305",
      Icon: GroupIcon,
      background: "linear-gradient(135deg, #f2709c 0%, #ff9472 100%)"
    },
    {
      name: "Month's Request",
      amount: "86",
      Icon: CalendarMonthIcon,
      background:
        "-webkit-gradient(linear, left top, right top, from(#90caf9), color-stop(99%, #047edf))"
    },
    {
      name: "Closed Requests",
      amount: "104",
      Icon: FactCheckIcon,
      background: "linear-gradient(90deg, #84d9d2, #07cdae)"
    }
  ];

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {cardList.map(({ amount, Icon, name, background }) => (
        <Grid item xs={12} md={4} key={name}>
          <StyledCard elevation={4} bgcolor={background}>
            <ContentBox>
              <Box>
                <Small>{name}</Small>
                <Heading>{amount}</Heading>
              </Box>
              <Icon className="icon" />
            </ContentBox>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Small>Increased by 60%</Small>
              <Tooltip title="View Details" placement="top">
                <IconButton sx={{ color: "#fff" }}>
                  <ArrowRightAlt />
                </IconButton>
              </Tooltip>
            </Box>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
