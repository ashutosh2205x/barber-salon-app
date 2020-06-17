import React, { useState, useEffect, createContext } from "react";

export const BARBER_CONTEXT = React.createContext({
  BARBER_LIST: {},
  SET_BARBER_LIST: () => {},
});

export const DETAILS_CONTEXT = React.createContext({
  DETAILS: {},
  SET_DETAILS: () => {},
});

