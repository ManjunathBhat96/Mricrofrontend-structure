import React, { Suspense } from "react";

const Header = React.lazy(() => import("../../header/src/App"));
const Products = React.lazy(() => import("../../products/src/App"));
const Cart = React.lazy(() => import("../../cart/src/App"));

export default function App() {
  return (
    <div>
      <h1>🏠 Container Shell</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Products />
        <Cart />
      </Suspense>
    </div>
  );
}
