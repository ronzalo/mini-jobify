import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import JobContainer from "./containers/job_container";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render job_container", () => {
  const component = renderer.create(<JobContainer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
