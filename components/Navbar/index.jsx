"use client";

import { useState, useEffect } from "react";
import { BsBuildingsFill, BsPerson } from "react-icons/bs";
import { TbBellRingingFilled, TbKey, TbLogout } from "react-icons/tb";
import { HiHome } from "react-icons/hi2";
import { BsBuildingAdd } from "react-icons/bs";
import { PiKeyhole } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import logo from "@/assets/images/logo-white.png";
import styles from "./styles.module.css";
import Image from "next/image";

import {
  ActionIcon,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Menu,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

const items = [
  { link: "/", label: "Home", icon: HiHome },
  { link: "/properties", label: "Properties", icon: BsBuildingsFill },
  {
    link: "/properties/add",
    label: "Add Property",
    icon: BsBuildingAdd,
    requiresAuth: true,
  },
  {
    link: "/login",
    label: "Login or Register",
    icon: PiKeyhole,
    hideWhenLoggedIn: true,
  },
  { link: "", label: "Notifications", icon: TbBellRingingFilled },
  {
    link: "/profile",
    label: "Profile",
    icon: FaCircleUser,
    requiresAuth: true,
    links: [
      { label: "Your Profile", link: "/profile" },
      { label: "Saved Properties", link: "/profile/saved" },
      { label: "Logout", link: "/logout" },
    ],
  },
];

export default function Navbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [active, setActive] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
  const theme = useMantineTheme();

  // Ensure state updates only occur on client side
  useEffect(() => {
    // This effect runs only on the client, preventing SSR issues
  }, []);

  const toggleDrawer = () => setDrawerOpened((o) => !o);
  const closeDrawer = () => setDrawerOpened(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev);
    setActive("Home"); // Reset active state on login/logout
  };

  const NavbarItems = items
    .filter((item) => {
      // Show item if it doesn't require auth, or if user is logged in
      if (item.requiresAuth && !isLoggedIn) return false;
      // Hide "Login or Register" when user is logged in
      if (item.hideWhenLoggedIn && isLoggedIn) return false;
      return true;
    })
    .map((item) => {
      if (item.label === "Profile" && item.links) {
        return (
          <Menu key={item.label} trigger="click" position="bottom" withinPortal>
            <Menu.Target>
              <Link
                className={styles.link}
                data-active={item.label === active || undefined}
                href={item.link}
                onClick={(event) => {
                  event.preventDefault();
                  setActive(item.label);
                }}
              >
                <item.icon className={styles.linkIcon} stroke={1.5} />
                <span>{item.label}</span>
              </Link>
            </Menu.Target>
            <Menu.Dropdown>
              {item.links.map((sublink) => (
                <Menu.Item key={sublink.label}>
                  <Link
                    href={sublink.link}
                    onClick={() => {
                      setActive(sublink.label);
                      closeDrawer();
                      if (sublink.label === "Logout") {
                        setIsLoggedIn(false); // Log out the user
                        setActive("Home"); // Reset active state
                      }
                    }}
                    className={styles.dropdownLink}
                  >
                    {sublink.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        );
      }
      return (
        <Link
          className={styles.link}
          data-active={item.label === active || undefined}
          href={item.link}
          key={item.label}
          onClick={(event) => {
            // event.preventDefault();
            setActive(item.label);
            closeDrawer();
          }}
        >
          <item.icon className={styles.linkIcon} stroke={1.5} />
          <span>{item.label}</span>
        </Link>
      );
    });

  return (
    <Box>
      <header className={styles.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <Image width={30} src={logo} alt="Property Hunt Logo" />
            <Text size="lg" fw={700} c="white">
              Property Hunt
            </Text>
          </Group>
          <Group h="100%" gap={0} visibleFrom="sm">
            {NavbarItems}
            {/* Add a login/logout toggle for testing */}
            <ActionIcon onClick={handleLoginToggle} color="white">
              {isLoggedIn ? <MdLogout size={20} /> : <TbKey size={20} />}
            </ActionIcon>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Property Hunt"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          {NavbarItems}
          {/* Add login/logout option in drawer */}
          <Link
            className={styles.link}
            href="#"
            onClick={(event) => {
              // event.preventDefault();
              handleLoginToggle();
              closeDrawer();
            }}
          >
            {isLoggedIn ? (
              <>
                <MdLogout className={styles.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </>
            ) : (
              <>
                <TbKey className={styles.linkIcon} stroke={1.5} />
                <span>Login</span>
              </>
            )}
          </Link>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
