import { shallow } from "enzyme";
import { CardListNoState } from "./CardList";
import React from "react";

test("renders cardList", () => {
  const cardList = shallow(
    <CardListNoState {...{ state: { citiesList: ["Moscow", "Atlanta"] } }} />
  );
  expect(cardList.find(".select").props().value).toEqual("asc");
  expect(cardList.find("option").at(0).props().value).toEqual("asc");
  expect(cardList.find("option").at(1).props().value).toEqual("desc");
  expect(cardList.find("option").at(0).props().children).toEqual("By name asc");
  expect(cardList.find("option").at(1).props().children).toEqual(
    "By name desc"
  );
  expect(cardList.find(".cardList").props().children[0].props.city).toEqual(
    "Atlanta"
  );
  expect(cardList.find(".cardList").props().children[1].props.city).toEqual(
    "Moscow"
  );
  cardList.setState({ orderBy: "desc" });
  expect(cardList.find(".select").props().value).toEqual("desc");
  expect(cardList.find(".cardList").props().children[0].props.city).toEqual(
    "Moscow"
  );
  expect(cardList.find(".cardList").props().children[1].props.city).toEqual(
    "Atlanta"
  );
});
