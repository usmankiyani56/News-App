import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    cat: 'popularity',
    pageSize: 5
  };

  static propTypes = {
    cat: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,  // Initialize totalResults in state
    };
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/everything?q=apple&from=2024-01-21&to=2024-01-21&sortBy=${this.props.cat}&apiKey=372dd77ea02f4e67a31f36203e100edd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2024-01-21&to=2024-01-21&sortBy=${this.props.cat}&apiKey=372dd77ea02f4e67a31f36203e100edd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ loading: false });
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    this.updateNews();
  }

  //handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2024-01-21&to=2024-01-21&sortBy=${this.props.cat}&apiKey=372dd77ea02f4e67a31f36203e100edd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ loading: false });
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    // });
    //this.setState({
      // page: this.state.page - 1,});
       //this.updateNews();
  //};

  //handleNextClick = async () => {
    // console.log("Next button was clicked");
    // let url = `https://newsapi.org/v2/everything?q=apple&from=2024-01-21&to=2024-01-21&sortBy=${this.props.cat}&apiKey=372dd77ea02f4e67a31f36203e100edd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ loading: false });
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults, // Update totalResults in state
    // });
    //this.setState({
     // page: this.state.page + 1,});
      //this.updateNews();
 // };
 fetchMoreData = async () => {
  this.setState({page: this.state.page + 1});
  this.updateNews();
  const url = `https://newsapi.org/v2/everything?q=apple&from=2024-01-21&to=2024-01-21&sortBy=${this.props.cat}&apiKey=372dd77ea02f4e67a31f36203e100edd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults });
 }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData} // Corrected
          hasMore={this.state.articles.length !== this.state.totalResults} // Corrected
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className="btn btn-sm btn-dark" onClick={this.handlePreviousClick}>
            &larr; previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 10)} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
