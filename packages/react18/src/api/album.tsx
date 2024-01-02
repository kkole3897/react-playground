export function getAlbumData(): Promise<{ name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "hello" }), 3000);
  });
}
