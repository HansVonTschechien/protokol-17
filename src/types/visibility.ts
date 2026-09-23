/**
 * Shared visibility contract for the web and the game client.
 * Public content may appear on the website and in public APIs.
 * Game content must never be shipped to the public web bundle or public endpoints.
 */
export type ContentVisibility = "public" | "game";
