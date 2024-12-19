import { Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  Table,
  Select,
  Avatar,
  styled,
  TableRow,
  useTheme,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  IconButton
} from "@mui/material";
import { Paragraph } from "app/components/Typography";

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

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
}));

const bgWIP = "linear-gradient(90deg, #f6e384, #ffd500)"; // Example color for WIP
const bgPrimary = "linear-gradient(90deg, #84d9d2, #07cdae)";
const bgError = "#F44336"; // Example color for Reject

// Define a consistent size for the button
const buttonStyle = {
  width: "100px", // Adjust width as needed
  height: "40px", // Adjust height as needed
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "10px"
};

export default function TopSellingTable() {
  const { palette } = useTheme();
  // const bgError = palette.error.main;
  // const bgPrimary = palette.primary.main;
  // const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3, mt: 4 }}>
      <CardHeader>
        <Title>Recent Raised Issues</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead style={{ backgroundColor: "darkslateblue", color: "white" }}>
            <TableRow>
              <TableCell
                colSpan={2}
                sx={{ px: 3, color: "lemonchiffon", borderTopLeftRadius: "15px" }}
              >
                ID
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0, color: "lemonchiffon" }}>
                PART NO
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0, color: "lemonchiffon" }}>
                STATUS
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0, color: "lemonchiffon" }}>
                AGENCY
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0, color: "lemonchiffon" }}>
                LOCATION
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0, color: "lemonchiffon" }}>
                PENDING ON
              </TableCell>

              <TableCell
                colSpan={1}
                sx={{ px: 0, color: "lemonchiffon", borderTopRightRadius: "15px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center" gap={4}>
                    {/* <Avatar src={product.imgUrl} /> */}
                    <Paragraph>{product.id}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  {product.part}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.available !== undefined ? (
                    product.available < 20 ? (
                      <Small bgcolor={bgWIP} sx={buttonStyle}>
                        {} WIP
                      </Small>
                    ) : (
                      <Small bgcolor={bgPrimary} sx={buttonStyle}>
                        Done
                      </Small>
                    )
                  ) : (
                    <Small bgcolor={bgError} sx={buttonStyle}>
                      Reject
                    </Small>
                  )}
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  {product.agency}
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  {product.location}
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  {product.pending}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Edit color="primary" />
                  </IconButton>
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
    imgUrl: "/assets/images/products/headphone-2.jpg",
    id: "105",
    part: 504131,
    available: 15,
    agency: "SCM",
    location: "Pune",
    pending: "Abhay Dhnure"
  },
  {
    imgUrl: "/assets/images/products/headphone-3.jpg",
    id: "108",
    part: 709801,
    available: 30,
    agency: "ECM",
    location: "Dharwad",
    pending: "Manoj Chavan"
  },
  {
    imgUrl: "/assets/images/products/iphone-2.jpg",
    id: "106",
    part: 707895,
    available: 15,
    agency: "ECM",
    location: "Jamshedpur",
    pending: "Ganesh Mane"
  },
  {
    imgUrl: "/assets/images/products/iphone-1.jpg",
    id: "112",
    part: 504701,
    available: 30,
    agency: "APL",
    location: "Pune",
    pending: "Ravi Chavan"
  },
  {
    imgUrl: "/assets/images/products/headphone-3.jpg",
    id: "118",
    part: 504701,
    available: 10,
    agency: "SCM",
    location: "Dharwad",
    pending: "Abhay Dhnure"
  }
];
