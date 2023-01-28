// material-ui

import * as React from "react";
// project import
import perspective from "@finos/perspective";

import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
import "@finos/perspective-viewer-d3fc";
import {
  HTMLPerspectiveViewerElement,
} from "@finos/perspective-viewer";



// ==============================|| SAMPLE PAGE ||============================== //

// const websocket = perspective.websocket(`ws://${window.location.host}/ws`);
// const defaultTables = {
//   superstore: websocket.open_table("superstore"),
//   timeseries: websocket.open_table("timeseries"),
//   ticking: websocket.open_table("ticking"),
// };
// console.log(defaultTables)

const worker = perspective.worker();

const getTable = async () => {
  const DATA_URL = "https://cdn.jsdelivr.net/npm/superstore-arrow/superstore.arrow";

  const req = fetch(DATA_URL);
  const resp = await req;
  const buffer = await resp.arrayBuffer();
  return await worker.table(buffer);
};


const CreditRisk = ():React.ReactElement => {
  const viewer = React.useRef<HTMLPerspectiveViewerElement>(null);

  React.useEffect(() => {
      getTable().then((table) => {
        
          if (viewer.current) {
              viewer.current.load(Promise.resolve(table));
            viewer.current.setAttribute("view", "y_line");   
          }
      });
  }, []);
 return  <perspective-viewer ref={viewer} ></perspective-viewer>;
};

export default CreditRisk;
