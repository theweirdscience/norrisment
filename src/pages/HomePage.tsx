import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppState, Category } from "../types";
import { fetchCategoriesRequest } from "../actions";

interface Props {
  categories: Category[];
  fetchCategories(): any;
}

const li = (category: Category) => <li key={category.name}>{category.name}</li>;

class HomePageInner extends React.Component<Props, AppState> {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const list = this.props.categories ? this.props.categories.map(li) : null;
    // console.log(this.props);
    return (
      <div>
        <h1>Norrisment for the soul</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  console.log("state", state);
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: bindActionCreators(fetchCategoriesRequest, dispatch)
  };
};

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageInner);
