"use client";


import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
   
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
