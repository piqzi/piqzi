import { nowPlaying } from "@/app/lib/spotify";

export default async function Activity() {
  const { playing, title, artist, album, albumImageUrl } =
    await nowPlaying();
  return (
    <div>
      <h1 className="text-title">Activity</h1>
      <div className="flex flex-row w-fit items-center select-none leading-tight gap-2 box-border">
        <img
          className={`size-20 box-border pointer-events-none ${
            playing ? "" : "grayscale"
          }`}
          src={albumImageUrl}
          alt={album}
        />
        <div className="flex flex-col px-2">
          <p className="text-xs text-muted">
            {playing ? "Listening to" : "Last Played"}
          </p>
          <p>{title}</p>
          <p className="text-muted">by {artist}</p>
        </div>
      </div>
    </div>
  );
}
