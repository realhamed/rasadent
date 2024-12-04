"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default LayoutComponent;
