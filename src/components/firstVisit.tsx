// Librarys
import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface FirstVisitProps {
  children: ReactNode;
};

function FirstVisit({ children }: FirstVisitProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const visited = localStorage.getItem("firstVisit");

    if (!visited) {
      navigate("/welcome", { replace: true });
    };
  }, [navigate]);

  return <>{children}</>;
};

export { FirstVisit };
