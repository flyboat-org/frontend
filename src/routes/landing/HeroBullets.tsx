import { MantineProvider } from "@mantine/core";
import {
  Button,
  Container,
  Group,
  List,
  Text,
  ThemeIcon,
  Title,
  createStyles,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { relative } from "path";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function HeroBullets({}) {
  const { classes } = useStyles();
  return (
    <div>
      <Container
        size="md"
        style={{
          color: "black",
        }}
      >
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                inherit
              >
                modern
              </Text>{" "}
              Gradebook <br />
            </Title>
            <Text color="dimmed" mt="md"></Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Fully Encrypted</b> – industry leading{" "}
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  inherit
                >
                  {" "}
                  TLS Security{" "}
                </Text>
              </List.Item>
              <List.Item>
                <b>Easy to Use</b> – FlyBoat is designed for{" "}
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  inherit
                >
                  {" "}
                  Ease of Use{" "}
                </Text>{" "}
                and{" "}
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  inherit
                >
                  {" "}
                  Efficiency{" "}
                </Text>
              </List.Item>
              <List.Item>
                <b>Easy to Migrate</b> –{" "}
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  inherit
                >
                  {" "}
                  Migrate{" "}
                </Text>{" "}
                easily with our custom built tool
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Request a Demo
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
