import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

function User(props: Props) {
  const router = useRouter();
  const { pid } = router.query;

  return <div>{pid}</div>;
}

export default User;
