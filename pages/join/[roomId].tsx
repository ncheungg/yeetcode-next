import { useRouter } from "next/router";
import React from "react";

export const Join = () => {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <>
      <h1>yeetcode</h1>
      <p>joining room with id {roomId}</p>
    </>
  );
};

export default Join;
