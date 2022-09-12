import { shallow } from "enzyme";
import InputTag from "./InputTag";

test("renders input", () => {
  const input = shallow(
    <InputTag {...{ handleOnChange: () => {}, ref: null, inputValue: "" }} />
  );
  expect(input.props().value).toEqual("");
  input.setProps({ inputValue: "London" });
  expect(input.props().value).toEqual("London");
});
