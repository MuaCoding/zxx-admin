import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
//redux数据持久化
import { persistStore, autoRehydrate } from "redux-persist";

const store = createStore(reducer, autoRehydrate(applyMiddleware(thunk)));
persistStore(store);

export default store;
