import { TimePicker } from "antd";
import dayjs from "dayjs";

import useRoutesCusTom from "./routes/useRoutesCusTom";
function App() {
  let routes = useRoutesCusTom();

  return routes;
}

export default App;
