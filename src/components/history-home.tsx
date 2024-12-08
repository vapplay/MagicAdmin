import React from "react";

import { HistoryList } from "./history-list";

export const HistoryHome = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <HistoryList />
    </div>
  );
};
