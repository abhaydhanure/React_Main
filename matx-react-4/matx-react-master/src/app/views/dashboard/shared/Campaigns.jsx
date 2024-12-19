import Box from "@mui/material/Box";
import { Small } from "app/components/Typography";
import { MatxProgressBar, SimpleCard } from "app/components";

export default function Campaigns() {
  return (
    <Box>
      <SimpleCard title="Bom Status">
        <Box
          sx={
            {
              // borderLeft: "4px solid darkgreen", // Colored accent
              // pl: 2, // Padding left to space out text from the border
              // mb: 2 // Margin bottom to separate sections
            }
          }
        >
          <Small color="text.primary" fontWeight="bold">
            Today
          </Small>
          <MatxProgressBar value={75} color="primary" text="Pune (304)" />
          <MatxProgressBar value={45} color="secondary" text="Dharwad (23)" />
          <MatxProgressBar value={75} color="primary" text="Jamshedpur (122)" />
        </Box>

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="Pune (223)" />
        <MatxProgressBar value={45} color="secondary" text="Dharwad (28)" />
        <MatxProgressBar value={75} color="primary" text="Jamshedpur (102)" />

        <Small color="text.secondary" display="block" pt={4}>
          Weekly
        </Small>
        <MatxProgressBar value={75} color="primary" text="Pune (108)" />
        <MatxProgressBar value={45} color="secondary" text="Dharwad (13)" />
        <MatxProgressBar value={75} color="primary" text="Jamshedpur (129)" />
      </SimpleCard>
    </Box>
  );
}
