import {
  ActionIcon,
  Button,
  Center,
  Container,
  Grid,
  GridCol,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
// import classes from "./styles.module.css";
import { MdSearch } from "react-icons/md";

export default function Hero() {
  return (
    <Container fluid px={100} py={50} bg="var(--mantine-color-blue-filled)">
      <Stack align="center">
        <Title order={1} size="60" c="gray.0">
          Find the{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "lime", to: "lime.3" }}
            inherit
          >
            Perfect Rentals
          </Text>
        </Title>

        <Title mt="xs" c="gray.1" size="h3">
          Discover the perfect property that suits your needs.
        </Title>
      </Stack>
      <Grid justify="center" align="center" mt={20} p={20} grow>
        <GridCol span={5}>
          <TextInput
            placeholder="Enter City, Street, Zip etc"
            variant="default"
            size="md"
            radius="md"
          />
        </GridCol>
        <GridCol span={5}>
          <Select
            data={[
              "All",
              "Apartment",
              "Studio",
              "Condo",
              "House",
              "Cabin or Cottage",
              "Loft",
              "Room",
              "Other",
            ]}
            placeholder="Pick one"
            variant="default"
            size="md"
            radius="md"
          />
        </GridCol>
        <GridCol span={2}>
          <Button
            leftSection={<MdSearch size={24} />}
            rightSection={<span />}
            variant="filled"
            color="lime.4"
            size="md"
            radius="md"
            justify="space-between"
            fullWidth
          >
            Search
          </Button>
        </GridCol>
      </Grid>
    </Container>
  );
}
