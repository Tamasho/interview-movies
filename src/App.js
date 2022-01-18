import Movies from "./components/Movies";
import './App.scss';
import React from "react";

export default function App() {
  const [allMovies, setAllMovies] = React.useState([]);
  const [searchString, setSearchString] = React.useState("Batman");
  const [visible, setVisible] = React.useState(3)

  React.useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=Batman")
            .then(res => res.json())
            .then(data => setAllMovies(data));
    }, []);

  function handleChange(event){
    setSearchString(event.target.value);
  }

  function getMovies(event){
    event.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
      .then(res => res.json())
      .then(data => setAllMovies(data));
    setVisible(3);
  };

  function showMoreResult(){
      setVisible(prevVisible => (prevVisible + 3));
  }

  const noOfResults = Object.keys(allMovies).length;  

  return (
    <div className="App">
      <form onSubmit={getMovies} className="container form__container">
        <div className="row">
            <div className="col-md-6 offset-md-3 input-group input__container">
                <span className="input-group-prepen form__icon my-auto">
                    <div className="input-group-text bg-transparent border-0">
                        <i className="fa fa-search mx-auto icon"></i>
                    </div>
                </span> 
                <input className="form__input form-control" type="text" 
                  name="movieName" onChange={handleChange}/>
                <div className="input-group-btn">
                    <button className="form__button btn" type="submit">Search</button>   
                </div>
            </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <select class="browser-default custom-select select__genre">
              <option selected>Genre select menu...</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="horror">Horror</option>
            </select>
          </div>
        </div>

      </form>
      {noOfResults != 0 
        ? <Movies movies={allMovies} visible={visible}/>
        : <p className="no__result">No results found. Try different keywords or remove search filters.</p>}

      <div className="container">
        <hr />
        <div className="row row-cols-3 more__result__container">
            <div className="col no__results">{noOfResults} results</div>
            <div className="col text-center">
                <button className="btn btn-outline-dark more__result__btn" 
                    type="button" onClick={showMoreResult}>
                    Show me more results
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}