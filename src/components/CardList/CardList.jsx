import React, { useContext } from "react";
import Card from "../Card/Card";
import { GlobalContext } from "../../App";
import { withGlobalState } from "../../hocs/withGlobalState";

export class CardListNoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: "asc",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      orderBy: e.target.value,
    });
  }

  render() {
    const { orderBy } = this.state;
    const { citiesList } = this.props.state;
    let sortedCitiesList = citiesList.sort();
    if (orderBy === "desc") {
      sortedCitiesList.reverse();
    }

    // if (sortedCitiesList.length === 7) {
    //   throw new Error("I crashed!");
    // }
    return (
      <>
        <select
          className="select"
          value={orderBy}
          onChange={this.handleOnChange}
        >
          <option value="asc">By name asc</option>
          <option value="desc">By name desc</option>
        </select>
        <div className="cardList">
          {citiesList.map((city) => (
            <Card key={city} city={city} />
          ))}
        </div>
      </>
    );
  }
}

export const CardList = withGlobalState(CardListNoState);

// const CardList = () => {
//   const {
//     state: { citiesList },
//   } = useContext(GlobalContext);
//   return (
//     <div className="cardList">
//       {citiesList.map((city) => (
//         <Card key={city} city={city} />
//       ))}
//     </div>
//   );
// };
//
// export default CardList;
