import React from "react";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import { Button, Center, SimpleGrid, Text, Title } from "@mantine/core";
import { fetchProperties } from "@/utils/requests";

async function RecentProperties() {
  const properties = await fetchProperties();

  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <>
      <Title order={2} c="blue" ta="center" fw={900}>
        RECENT PROPERTIES
      </Title>
      <SimpleGrid cols={3} m={20}>
        {recentProperties.length === 0 ? (
          <Text size="lg" ta="center">
            No Properties Found!
          </Text>
        ) : (
          recentProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        )}
      </SimpleGrid>
      <Center>
        <Button component={Link} href="/properties">
          View All Properties
        </Button>
      </Center>
    </>
  );
}

export default RecentProperties;
