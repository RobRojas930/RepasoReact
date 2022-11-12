import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HocPage } from './pages/hoc_page';
import { PresentationContainer } from './pages/presentation_container';
import { ContextProvider } from './pages/context_provider';
import { CompoundComponents } from './pages/compound_components';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HocPage />}
          ></Route>
          <Route
            exact
            path="/hoc"
            element={<HocPage />}
          ></Route>
          <Route
            path="/presentationcontainer"
            element={<PresentationContainer  />}
          ></Route>
          <Route
            exact
            path="/contextprovider"
            element={<ContextProvider  />}
          ></Route>
          <Route
            exact
            path="/compoundcomponents"
            element={<CompoundComponents  />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
