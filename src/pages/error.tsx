import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div
      id="error-page"
      className="container mx-auto flex flex-col justify-content-center items-center"
    >
      <h1 className="font-semibold text-3xl">Oops! 🥹</h1>
      <p>An error has occurred.</p>
      <p className="font-medium text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
