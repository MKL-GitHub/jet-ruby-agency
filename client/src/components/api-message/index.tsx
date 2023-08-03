import React, { FC, memo } from "react";

import "./index.scss";

export interface ApiMessageProps {
  message: string | null;
  error: string | null;
}

const ApiMessage: FC<ApiMessageProps> = ({ message, error }) => {
  return (
    <div
      className={`ApiMessage ${
        message ? "ApiMessage_message" : error ? "ApiMessage_error" : ""
      }`}
    >
      {message ? message : error}
    </div>
  );
};

const MemoizedApiMessage = memo(ApiMessage);

export { MemoizedApiMessage as ApiMessage };
