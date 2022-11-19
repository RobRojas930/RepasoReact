import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HocPage } from "./pages/designPatternPages/hoc_page";
import { PresentationContainer } from "./pages/designPatternPages/presentation_container";
import { ContextProvider } from "./pages/designPatternPages/context_provider";
import { CompoundComponents } from "./pages/designPatternPages/compound_components";
const {
  mainMenu,
  basicsMenu,
  designPatternMenu,
  hooksMenu,
} = require ("./res/data.json");
import { MenuPage } from "./pages/menu_page";
import { ViewPage } from "./pages/view_page";
import StateTutorial from "./pages/hooksPages/UseState/StateTutorial";
import EffectTutorial from "./pages/hooksPages/UseEffect/EffectTutorial";
import ContextTutorial from "./pages/hooksPages/UseContext/ContextTutorial";
import LayoutEffectTutorial from './pages/hooksPages/UseLayoutEffect/LayoutEffectTutorial';
import MemoTutorial from './pages/hooksPages/UseMemo/MemoTutorial';
import CallBackTutorial from './pages/hooksPages/UseCallback/CallbackTutorial';
import RefTutorial from './pages/hooksPages/UseRef/RefTutorial';
import ReducerTutorial from './pages/hooksPages/UseReducer/ReducerTutorial';
import { ComponentPage } from './pages/basicsPages/component-page';
import { ReactLifeCycle } from './pages/basicsPages/react_life_cycle';
import { ReactProps } from './pages/basicsPages/react_props';
import { ReactRenderCond } from './pages/basicsPages/react_render_cond';
import { ReactState } from './pages/basicsPages/react_state';
import { StyledComponents } from './pages/basicsPages/styled_components';

export const App = () => {
  const page = (Comp) => (
    <ViewPage>
      <Comp></Comp>
    </ViewPage>
  );
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MenuPage items={mainMenu} />}>
            <Route exact path="/hooks" element={<MenuPage items={hooksMenu} />}>
              <Route
                exact
                path="/hooks/usestate"
                element={page(StateTutorial)}
              ></Route>
              <Route
                exact
                path="/hooks/useeffect"
                element={page(EffectTutorial)}
              ></Route>
              <Route
                exact
                path="/hooks/uselayouteffect"
                element={page(LayoutEffectTutorial)}
              ></Route>
              <Route
                exact
                path="/hooks/usememo"
                element={page(MemoTutorial)}
              ></Route>
              <Route
                exact
                path="/hooks/usecallback"
                element={page(CallBackTutorial)}
              ></Route>
              <Route
                exact
                path="/hooks/usecontext"
                element={page(ContextTutorial)}
              ></Route>
              <Route
                exact
                path="/hooks/useref"
                element={page(RefTutorial)}
              ></Route>
              <Route
                exact
                path="/hooks/usereducer"
                element={page(ReducerTutorial)}
              ></Route>
            </Route>
            <Route
              exact
              path="/patterns"
              element={<MenuPage items={designPatternMenu} />}
            >
              <Route exact path="/patterns/hoc"
              element={<HocPage />}></Route>
              <Route
                path="/patterns/presentationcontainer"
                element={<PresentationContainer />}
              ></Route>
              <Route
                exact
                path="/patterns/contextprovider"
                element={<ContextProvider />}
              ></Route>
              <Route
                exact
                path="/patterns/compoundcomponents"
                element={<CompoundComponents />}
              ></Route>
            </Route>
            <Route
              exact
              path="/basics"
              element={<MenuPage items={basicsMenu} />}
            >
              <Route
                exact
                path="/basics/componentpage"
                element={page(ComponentPage)}
              ></Route>
              <Route
                exact
                path="/basics/reactlifecycle"
                element={page(ReactLifeCycle)}
              ></Route>
              <Route
                exact
                path="/basics/reactprops"
                element={page(ReactProps)}
              ></Route>
              <Route
                exact
                path="/basics/reactrendercond"
                element={page(ReactRenderCond)}
              ></Route>
              <Route
                exact
                path="/basics/reactstate"
                element={page(ReactState)}
              ></Route>
              <Route
                exact
                path="/basics/styledcomponents"
                element={page(StyledComponents)}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
