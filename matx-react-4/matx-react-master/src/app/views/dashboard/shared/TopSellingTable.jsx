// import { ExpandLess, StarOutline, TrendingUp } from "@mui/icons-material";
// import { Card, Fab, Grid, lighten, styled, useTheme } from "@mui/material";

// // STYLED COMPONENTS
// const ContentBox = styled("div")(() => ({
//   display: "flex",
//   flexWrap: "wrap",
//   alignItems: "center"
// }));

// const FabIcon = styled(Fab)(() => ({
//   width: "44px !important",
//   height: "44px !important",
//   boxShadow: "none !important"
// }));

// const H3 = styled("h3")(() => ({
//   margin: 0,
//   fontWeight: "500",
//   marginLeft: "12px"
// }));

// const H1 = styled("h1")(({ theme }) => ({
//   margin: 0,
//   flexGrow: 1,
//   color: theme.palette.text.secondary
// }));

// const Span = styled("span")(() => ({
//   fontSize: "13px",
//   marginLeft: "4px"
// }));

// const IconBox = styled("div")(() => ({
//   width: 16,
//   height: 16,
//   color: "#fff",
//   display: "flex",
//   overflow: "hidden",
//   borderRadius: "300px ",
//   justifyContent: "center",
//   "& .icon": { fontSize: "14px" }
// }));

// export default function StatCards2() {
//   const { palette } = useTheme();
//   const bgError = lighten(palette.error.main, 0.85);

//   return (
//     <Grid container spacing={3} sx={{ mb: 3 }}>
//       <Grid item xs={12} md={6}>
//         <Card elevation={3} sx={{ p: 2 }}>
//           <ContentBox>
//             <FabIcon size="medium" sx={{ background: "rgba(9, 182, 109, 0.15)" }}>
//               <TrendingUp color="success" />
//             </FabIcon>

//             <H3 color="#08ad6c">Active Users</H3>
//           </ContentBox>

//           <ContentBox sx={{ pt: 2 }}>
//             <H1>10.8k</H1>

//             <IconBox sx={{ backgroundColor: "success.main" }}>
//               <ExpandLess className="icon" />
//             </IconBox>

//             <Span color="#08ad6c">(+21%)</Span>
//           </ContentBox>
//         </Card>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <Card elevation={3} sx={{ p: 2 }}>
//           <ContentBox>
//             <FabIcon size="medium" sx={{ backgroundColor: bgError, overflow: "hidden" }}>
//               <StarOutline color="error" />
//             </FabIcon>

//             <H3 color="error.main">Transactions</H3>
//           </ContentBox>

//           <ContentBox sx={{ pt: 2 }}>
//             <H1>$2.8M</H1>

//             <IconBox sx={{ backgroundColor: "error.main" }}>
//               <ExpandLess className="icon" />
//             </IconBox>

//             <Span color="error.main">(+21%)</Span>
//           </ContentBox>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

/////  New Code ////
import { Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  Table,
  Avatar,
  styled,
  TableRow,
  useTheme,
  TableBody,
  TableHead,
  TableCell,
  Divider, // Import Divider
  Typography
} from "@mui/material";
import { keyframes } from "@emotion/react";
import "./Card2.css";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    color: red;
  }
  50% {
    opacity: 1;
    color: red;
  }
  100% {
    opacity: 0;
    color: red;
  }
`;

// STYLED COMPONENTS
const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between"
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" }
}));

const ProgressWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "8px", // Space between percentage text and progress bar
  paddingRight: "16px" // Add padding on the right side of the container
}));

const GradientBar = styled(Box)(({ percentage, gradient }) => ({
  width: "100%",
  height: 10,
  borderRadius: 5,
  background: `linear-gradient(90deg, ${gradient} ${percentage}%, #e0e0e0 ${percentage}%)`, // Gradient with fill percentage
  position: "relative"
}));

const gradientColors = {
  60: "rgba(132, 217, 210, 1), rgba(7, 205, 173, 1)",
  50: "rgba(255, 183, 77, 1), rgba(255, 152, 0, 1)",
  30: "rgba(244, 67, 54, 1), rgba(229, 115, 115, 1)",
  70: "rgba(33, 150, 243, 1), rgba(100, 181, 246, 1)",
  90: "rgba(76, 175, 80, 1), rgba(129, 199, 132, 1)"
};

export default function TopSellingTable() {
  const { palette } = useTheme();

  const getProgressGradient = (completion) => {
    const percentage = parseFloat(completion);
    return (
      gradientColors[percentage] ||
      `linear-gradient(90deg, ${palette.primary.main}, ${palette.primary.dark})`
    );
  };

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3, border: "3px solid lavender" }}>
      {/* <CardHeader>
        <Title>Plant Bom Status</Title>
      </CardHeader> */}

      {/* Horizontal line with title */}
      <Divider
        sx={{
          mb: 2,
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "lightslategrey"
        }}
      >
        Plantwise Bom Status
      </Divider>

      <Box overflow="auto">
        <ProductTable>
          <TableHead style={{ backgroundColor: "", color: "white" }}>
            <TableRow>
              <TableCell colSpan={2} sx={{ px: 3, color: "black" }}>
                LOCATION
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0, color: "black" }}>
                GREEN
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0, color: "black" }}>
                WIP
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0, color: "black" }}>
                REJECTED
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0, color: "black" }}>
                TOTAL
              </TableCell>
              <TableCell colSpan={2} sx={{ px: 0, color: "black" }}>
                COMPLETION
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center" gap={4}>
                    {/* <Avatar src={product.imgUrl} /> */}
                    <Typography variant="body2">{product.location}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="left" colSpan={2} sx={{ px: 0 }}>
                  {product.green}
                </TableCell>
                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.wip}
                </TableCell>
                <TableCell align="left" colSpan={2} sx={{ px: 0 }}>
                  {product.reject}
                </TableCell>
                <TableCell align="left" colSpan={2} sx={{ px: 0 }}>
                  {product.total}
                </TableCell>
                <TableCell align="left" colSpan={2} sx={{ px: 0 }}>
                  <ProgressWrapper>
                    <Typography variant="body2" sx={{ minWidth: "40px", textAlign: "left" }}>
                      {product.completion}
                    </Typography>
                    <Box sx={{ width: "100%", flexGrow: 1 }}>
                      <GradientBar
                        percentage={parseFloat(product.completion)}
                        gradient={getProgressGradient(product.completion)}
                      />
                    </Box>
                  </ProgressWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
}

const productList = [
  {
    location: "Pune",
    green: 10,
    wip: 15,
    reject: 5,
    total: 30,
    completion: "60%" // percentage as a string
  },
  {
    location: "Dharwad",
    green: 12,
    wip: 30,
    reject: 3,
    total: 45,
    completion: "50%"
  },
  {
    location: "Jamshedpur",
    green: 18,
    wip: 15,
    reject: 8,
    total: 43,
    completion: "30%"
  },
  {
    location: "Uttrakhand",
    green: 8,
    wip: 30,
    reject: 5,
    total: 43,
    completion: "70%"
  },
  {
    location: "Lucknow",
    green: 9,
    wip: 10,
    reject: 4,
    total: 23,
    completion: "90%"
  }
];
