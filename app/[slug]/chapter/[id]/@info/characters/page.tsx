import Link from "next/link";
import React from "react";

export default function Page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { id, slug } = params;
  return (
    <div>
      <p>Page for /books/id/characters</p>
      <br />
      <Link href={`/${slug}/chapter/${id}/characters?test=1`}>
        Click me to see problem
      </Link>
    </div>
  );
}
