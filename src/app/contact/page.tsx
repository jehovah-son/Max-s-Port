"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/contact/loading";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading == true) {
    return <Loading />;
  }
  return <div>Contact</div>;
}
