import Navigation from "../Navigation";

export default function NavigationExample() {
  return (
    <Navigation
      onDownloadCV={() => console.log("Download CV clicked")}
    />
  );
}
