import { client } from "@/sanity/lib/client";
import { STARTUPs_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartUpCard, { StartupCardType } from "./StartUpCard";

async function UserStartups({ id }: { id: string }) {
  const startups = await client.fetch(STARTUPs_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupCardType) => (
          <StartUpCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
}

export default UserStartups;
