import React, { createContext, useContext, useReducer } from "react";
import initialState from "./initialState"; // Adjust the path as necessary
import reducer from "./reducer"; // Adjust the path as necessary

// Create the data layer context
export const DataLayerContext = createContext();

// DataLayer provider component
export const DataLayerProvider = ({ children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Custom hook to use the data layer state
export const useDataLayerValue = () => useContext(DataLayerContext);
