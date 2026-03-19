import { useLayoutEffect } from "react";

export default function DisableScroll() {
  useLayoutEffect(() => {
    document.body.classList.add("overflow-y-hidden");

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  });

  return <></>;
}
