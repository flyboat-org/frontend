import { useLogto } from "@logto/react";
import { ScrollArea, Table, createStyles } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

let i = 0;

const Users: React.FC = () => {
  const { getAccessToken } = useLogto();

  const [myData, setData] = useState([
    {
      username: "",
      id: "",
      createdAt: 0,
    },
  ]);

  const getId = async () => {
    const token = (await getAccessToken("https://api.logto.io")) || "NO TOKEN";
    console.log(token);
    fetch("https://auth.flyboat.biishop.org/api/applications", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  const getUsers = async () => {
    const token =
      (await getAccessToken("https://api.flyboat.biishop.org")) || "";
    console.log(token);

    fetch("https://api.flyboat.biishop.org/users", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  if (i === 0) {
    getId();
    getUsers();
    i++;
  }

  const rows = myData.map((row) => (
    <>
      <tr key={row.id}>
        <td>{row.username}</td>
        <td>{row.id}</td>
        <td>{row.createdAt}</td>
      </tr>
    </>
  ));

  return <>{rows}</>;
};

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export default function TableScrollArea() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea
      sx={{ height: 300 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <Users />
        </tbody>
      </Table>
    </ScrollArea>
  );
}
