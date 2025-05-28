import { SimpleGrid } from "@mantine/core";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <SimpleGrid cols={3} m={20}>
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </SimpleGrid>
  );
};

export default PropertiesPage;
