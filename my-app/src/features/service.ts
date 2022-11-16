import { createStore  } from "@reatom/core";
import { todosAtom } from "./atoms";

export const todosStore = createStore(todosAtom);