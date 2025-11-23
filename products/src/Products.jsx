import { useGlobalStore } from "../../container/src/store";

export default function Products() {
  const setCount = useGlobalStore(state => state.setCount);

  return (
    <button onClick={() => setCount(Math.random())}>
      Update Global State
    </button>
  );
}
