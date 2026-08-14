type HubSpotMeetingsProps = {
  /** Full HubSpot meetings scheduler URL, e.g. https://meetings-na2.hubspot.com/curemed */
  src: string;
  title?: string;
};

export function HubSpotMeetings({
  src,
  title = "Book a consultation with CureMed Pharmacy",
}: HubSpotMeetingsProps) {
  const embedSrc = src.includes("embed=true")
    ? src
    : `${src}${src.includes("?") ? "&" : "?"}embed=true`;

  return (
    <iframe
      title={title}
      src={embedSrc}
      className="min-h-[720px] w-full border-0"
      loading="lazy"
    />
  );
}
