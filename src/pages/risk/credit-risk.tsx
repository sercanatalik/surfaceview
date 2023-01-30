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

import { useSubscription, gql } from '@apollo/client';


const worker = perspective.worker();


const GET_TICKERS = gql`
subscription tickers {
    tickers {
      ticker
      name
      last
      change
    }
  }
`;


const CreditRisk = ():React.ReactElement => {

  const [comments, setComments] = React.useState<any>([{ticker:'loading',name:'loading',last:'loading',change:'loading'}]);


   useSubscription(GET_TICKERS,{  onData: (data) => {
    
    const message  = data.data.data
    if (message){
      setComments(message.tickers)
    }
   
  } });
  
  const viewer = React.useRef<HTMLPerspectiveViewerElement>(null);

  React.useEffect(() => {
          if (viewer.current ) {
            
            if(comments){
              viewer.current.load(Promise.resolve( worker.table(comments)));
              // viewer.current.restore({});
            }
            
            
            
              
          }
      });


  
 return  <perspective-viewer ref={viewer} ></perspective-viewer>;
};

export default CreditRisk;
