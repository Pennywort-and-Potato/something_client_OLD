'use client';

import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

const home = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => router.push('/')}
        style={{ marginTop: 8 }}
      >
          home
      </Button>
    </>
  );
};

export default home;
