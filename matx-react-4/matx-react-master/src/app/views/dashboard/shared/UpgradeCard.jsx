import { convertHexToRGB } from "app/utils/utils";

import React from "react";
import {
  Card,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

// STYLED COMPONENTS
const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: "24px",
  padding: "24px !important",
  [theme.breakpoints.down("sm")]: { paddingLeft: "16px !important" }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  position: "relative",
  // padding: "24px !important",
  backgroundColor: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15)`,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.common.white
}));

export default function UpgradeCard() {
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell colSpan={2} align="center">
                  For reassignments, user need to contact respective business SPOC's
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ padding: "12px" }}>SCM</TableCell>
                <TableCell>Netaji Katkar | Pradnya Pund</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ padding: "12px" }}>ECM</TableCell>
                <TableCell>Pradnya Pund | Netaji Katkar</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </StyledCard>
    </CardRoot>
  );
}
