import {
  FaGasPump,
  FaGaugeHigh,
  FaUsers,
  FaBath,
  FaBed,
  FaRulerCombined,
  FaMoneyBill,
  FaLocationDot,
} from "react-icons/fa6";
import { TbAutomaticGearbox } from "react-icons/tb";
import { BiRuler } from "react-icons/bi";
import NextImage from "next/image";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  CardSection,
  Center,
  Group,
  Image,
  Text,
} from "@mantine/core";
import classes from "./styles.module.css";
import { BsRulers } from "react-icons/bs";
import Link from "next/link";

export default function PropertyCard({ property }) {
  const getRates = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/ni`;
    }
  };

  return (
    <Card withBorder radius="md" className={classes.card}>
      <CardSection className={classes.imageSection}>
        <Image
          component={NextImage}
          src={`/images/properties/${property.images[0]}`}
          alt="Tesla Model S"
          //   radius="xs"
          width={200}
          height={200}
          sizes="100vw"
        />
      </CardSection>
      <Badge
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
        className={classes.rate}
      >
        {getRates()}
      </Badge>
      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{property.name}</Text>

          <Badge
            variant="filled"
            fw={500}
            color="var(--mantine-color-dark-5)"
            tt="uppercase"
            fz="xs"
          >
            {property.type}
          </Badge>
        </div>
      </Group>

      <CardSection className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group gap={4} mb={10} justify="center" grow>
          <ActionIcon
            variant="transparent"
            size="md"
            color="var(--mantine-color-dark-5)"
          >
            <FaBed size={18} stroke={1.5} />
            <Text size="xs" ml={4}>
              {property.beds}
            </Text>
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            size="md"
            color="var(--mantine-color-dark-5)"
          >
            <FaBath size={18} stroke={1.5} />
            <Text size="xs" ml={4}>
              {property.baths}
            </Text>
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            size="md"
            color="var(--mantine-color-dark-5)"
          >
            <FaRulerCombined size={18} stroke={1.5} />
            <Text size="xs" ml={4}>
              {property.square_feet}
            </Text>
          </ActionIcon>
        </Group>
        <Group gap={4} mb={-8} justify="center" grow>
          {property.rates.nightly && (
            <ActionIcon
              variant="light"
              size="md"
              color="var(--mantine-color-blue-5)"
              radius="md"
            >
              <FaMoneyBill size={18} stroke={1.5} />
              <Text size="xs" ml={4}>
                Nightly
              </Text>
            </ActionIcon>
          )}
          {property.rates.weekly && (
            <ActionIcon
              variant="light"
              size="md"
              color="var(--mantine-color-blue-5)"
              radius="md"
            >
              <FaMoneyBill size={18} stroke={1.5} />
              <Text size="xs" ml={4}>
                Weekly
              </Text>
            </ActionIcon>
          )}
          {property.rates.monthly && (
            <ActionIcon
              variant="light"
              size="md"
              color="var(--mantine-color-blue-5)"
              radius="md"
            >
              <FaMoneyBill size={18} stroke={1.5} />
              <Text size="xs" ml={4}>
                Monthly
              </Text>
            </ActionIcon>
          )}
        </Group>
      </CardSection>

      <CardSection className={classes.section}>
        <Group gap={10} justify="center" grow>
          <ActionIcon
            variant="transparent"
            size="md"
            color="var(--mantine-color-orange-5)"
            radius="md"
          >
            <FaLocationDot size={18} stroke={1.5} />
            <Text fz="xl" fw={700} ml={4} style={{ lineHeight: 1 }}>
              {property.location.city} {property.location.state}
            </Text>
          </ActionIcon>

          <Button
            radius="xl"
            fullWidth
            component={Link}
            href={`/properties/${property._id}`}
          >
            Details
          </Button>
        </Group>
      </CardSection>
    </Card>
  );
}
