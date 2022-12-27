import NavbarSimple from "./NavbarSimple"
import { AppShell } from "@mantine/core"
import { Link, Outlet } from 'react-router-dom';

export default function Admin() {
  return(
    <AppShell
      navbar={<NavbarSimple />}
    >

      <Outlet />
    </AppShell>
  );
}

