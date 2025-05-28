import { Card, Image } from "@mantine/core";
import NextImage from "next/image";

function PropertyHeaderImage({ image }) {
  return (
    <Card radius="xs" mb="md" h={500}>
      <Image
        component={NextImage}
        src={`/images/properties/${image}`}
        sizes="100vw"
        alt="Property Image"
        fill={true}
        priority={true}
      />
    </Card>
  );
}

export default PropertyHeaderImage;
