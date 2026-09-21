type HubSpotFormProps = {
  /** Full HubSpot shared form URL, e.g. https://431ijr.share-na2.hsforms.com/xxxx */
  src: string;
  title?: string;
};

export function HubSpotForm({
  src,
  title = "Book a consultation with CureMed Pharmacy",
}: HubSpotFormProps) {
  return (
    <iframe
      title={title}
      src={src}
      className="min-h-[720px] w-full border-0"
      loading="lazy"
    />
  );
}
