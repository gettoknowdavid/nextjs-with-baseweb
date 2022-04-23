import React from 'react';
import Head from 'next/head';
import {
  Button, KIND, SHAPE, SIZE,
} from 'baseui/button';
import { Heading, HeadingLevel } from 'baseui/heading';
import {
  ALIGNMENT, BEHAVIOR, Cell, Grid,
} from 'baseui/layout-grid';
import { ParagraphLarge } from 'baseui/typography';

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid align={ALIGNMENT.center} behavior={BEHAVIOR.fluid}>
        <Cell span={12}>
          <HeadingLevel>
            <Heading>NextJS with Base Web Template</Heading>
            <ParagraphLarge>
              This template comes with Base Web with Styletron component styling package.
              <br />
              The template also has the Atomic Architecture file structure.
            </ParagraphLarge>
            <Button
              onClick={() => alert('click')}
              kind={KIND.primary}
              size={SIZE.mini}
              shape={SHAPE.default}
            >
              Click
            </Button>
          </HeadingLevel>
        </Cell>
      </Grid>
    </>
  );
}

export default Home;
