import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";

function ProperyDetails({ property }) {
  return (
    <>
      <Badge variant="outline" color="blue">
        {property.type}
      </Badge>
      <Stack bg="var(--mantine-color-body)" align="flex-start" gap="xs" mt={5}>
        <Text fz="h2" fw={700} >
          {property.name}
        </Text>

        <Button
          fz="xl"
          data-disabled
          fw={500}
          variant="subtle"
          color="var(--mantine-color-orange-5)"
          component={Text}
          leftSection={<FaLocationDot size={18} stroke={1.5} />}
        >
          {property.location.street} {property.location.city}{" "}
          {property.location.state} {property.location.zipcode}
        </Button>
      </Stack>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        56 km this month • 17% improvement compared to last month • 443 place in
        global scoreboard
      </Text>
    </>
  );
}

export default ProperyDetails;
