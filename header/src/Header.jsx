import { useGlobalStore } from "../../container/src/store";

export default function Header() {
  const count = useGlobalStore(state => state.count);

  return <h2>🔵 Header MFE Count: {count}</h2>;
}
