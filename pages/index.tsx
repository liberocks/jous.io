import Head from "next/head";
import Image from "next/image";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jous</title>
        <meta
          name="description"
          content="Create a better mass mobility and achieve loveable city with Jous - a mobility software as a service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1" fontWeight={700}>
          Welcome to Jous!
        </Typography>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained" disableElevation>
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </main>
    </div>
  );
}
