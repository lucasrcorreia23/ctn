export function readTimeFromBody(body: string[], wpm = 220): number {
  const words = body.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}
