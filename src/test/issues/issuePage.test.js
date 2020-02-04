import React from "react";
import Issuepage from "../../components/issues/IssuePage";
import renderer from "react-test-renderer";
//jest.fn()
it("Chek someting", () => {
  const tree = renderer.create(<Issuepage />);
  expect(tree).toMatchSnapshot();
});
