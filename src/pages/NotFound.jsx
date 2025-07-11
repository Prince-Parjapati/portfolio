import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-9xl font-extrabold text-primary mb-6 select-none">404</h1>
      <p className="text-2xl md:text-3xl mb-4">Oops! Page Not Found</p>
      <p className="text-muted-foreground mb-8 max-w-md text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg px-6 py-3 transition-colors duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};
