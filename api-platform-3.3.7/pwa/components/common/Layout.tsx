import { ReactNode, useState } from "react"
import NavBar from "./navbar"
import Footer from "./footer"

import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const Layout = ({
  children,
  dehydratedState,
}: {
  children: ReactNode;
  dehydratedState: DehydratedState;
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col w-full min-h-screen bg-beige-500">
        <NavBar />
        <Hydrate  state={dehydratedState}>{children}</Hydrate>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
