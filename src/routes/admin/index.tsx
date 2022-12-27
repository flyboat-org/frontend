import { AppShell } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

import NavbarSimple from "./NavbarSimple";

export default function Admin() {
  return (
    <AppShell navbar={<NavbarSimple />}>
      <Outlet />
    </AppShell>
  );
}
