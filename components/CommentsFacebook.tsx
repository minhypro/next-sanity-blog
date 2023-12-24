"use client";

import React from "react";

type Props = {
  dataHref: string;
};

const DOMAIN = "http://minhy.vercel.app/";

declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

const CommentsFacebook = ({ dataHref }: Props) => {
  React.useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [dataHref]);
  return (
    <React.Fragment>
      <div id="fb-root"></div>
      <div
        className="fb-comments"
        data-href={DOMAIN + dataHref}
        data-numposts="10"
        data-width="100%"
      ></div>
    </React.Fragment>
  );
};

export default CommentsFacebook;
