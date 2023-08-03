import React, { FC, ReactNode, memo } from "react";

import "./index.scss";

export interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="PageLayout">
      <div className="PageLayout-children">{children}</div>
    </div>
  );
};

const MemoizedPageLayout = memo(PageLayout);

export { MemoizedPageLayout as PageLayout };
