import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { formatViews } from "@/lib/utils";

async function View({ id }: { id: string }) {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false }) // Disable CDN for real-time data without getting data from the cache

    .fetch(STARTUP_VIEWS_QUERY, { id });

  // TODO: Upade the number of views

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{formatViews(totalViews)}</span>
      </p>
    </div>
  );
}

export default View;
