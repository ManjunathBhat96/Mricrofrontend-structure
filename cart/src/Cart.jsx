import { useGlobalStore } from "../../container/src/store";

export default function Cart() {
  const count = useGlobalStore(state => state.count);

  return <h3>🛍 Cart MFE Count: {count}</h3>;
}
