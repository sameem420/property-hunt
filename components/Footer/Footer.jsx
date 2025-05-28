import Image from "next/image";
import logo from "@/assets/images/logo-white.png";
import {
  ActionIcon,
  Container,
  Flex,
  Group,
  Text,
  AppShellFooter,
} from "@mantine/core";
import { FaInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import classes from "./styles.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Flex
      gap="md"
      justify="space-between"
      align="center"
      direction={{ base: "column", sm: "row" }}
      // wrap="wrap"
      py="md"
      px="md"
      bg="blue.6"
      mt={150}
    >
      <Image src={logo} width={30} alt="Logo" />
      <Text c="gray.0">
        &copy; {currentYear} Property Hunt. All rights reserved
      </Text>
      <Group gap={0} mt="md" justify="flex-end" wrap="nowrap">
        <ActionIcon size="lg" color="gray.0" variant="subtle">
          <FaSquareXTwitter size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray.0" variant="subtle">
          <FaYoutube size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray.0" variant="subtle">
          <FaInstagram size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Flex>
  );
}

export default Footer;
