/**
 * Renders one or more schema.org objects as a single JSON-LD <script>.
 *
 * Next.js recommends a plain <script type="application/ld+json"> for structured
 * data (not next/script). It is rendered on the server, so it is present in the
 * initial HTML for crawlers.
 *
 * Pass a single schema object, or an array which is combined into an "@graph".
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const json = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data.map(stripContext) }
    : data;

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never break out of the <script> element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function stripContext(obj: Record<string, unknown>): Record<string, unknown> {
  const clone = { ...obj };
  delete clone["@context"];
  return clone;
}
