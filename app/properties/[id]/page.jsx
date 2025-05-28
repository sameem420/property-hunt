"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import {
  Grid,
  SimpleGrid,
  Skeleton,
  Container,
  Text,
  Card,
  Group,
  RingProgress,
  Button,
  Divider,
} from "@mantine/core";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import classes from "./styles.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import ProperyDetails from "@/components/ProperyDetails";

const PRIMARY_COL_HEIGHT = "300px";

const stats = [
  { title: "Distance", value: "27.4 km" },
  { title: "Avg. speed", value: "9.6 km/h" },
  { title: "Score", value: "88/100" },
];

const items = stats.map((stat) => (
  <div key={stat.title}>
    <Text size="xs" color="dimmed">
      {stat.title}
    </Text>
    <Text fw={500} size="sm">
      {stat.value}
    </Text>
  </div>
));

function ProperyPage() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);

        setProperty(property);
      } catch (error) {
        console.error("Error fetching property: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      getPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return <Text>No Property Found!</Text>;
  }

  return (
    <Container fluid my="md">
      {!loading && property && (
        <Card withBorder padding="md" radius="md" className={classes.card}>
          <Card.Section>
            <PropertyHeaderImage image={property.images[0]} />
            <Button
              variant="transparent"
              leftSection={<FaArrowLeftLong size={14} />}
              component={Link}
              href="/properties"
            >
              Back to Properties
            </Button>
            <Divider my="sm" w="100vw" />
          </Card.Section>

          <ProperyDetails property={property} />
          <Card.Section className={classes.footer}>{items}</Card.Section>
        </Card>
      )}

      {/* <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid> */}
    </Container>
  );
}

export default ProperyPage;
