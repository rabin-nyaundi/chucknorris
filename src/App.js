import React, {useEffect, useState} from 'react';
import Joke from './components/joke'
import './App.css';


function App() {
  const [jokes, setJokes] = useState([]);
  const [jokesLimitShow, setJokesLimitShow] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategories, setFilterCategories] = useState([])


  useEffect(() => {
    fetch('https://api.icndb.com/jokes')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setJokes(res.value)
        setJokesLimitShow(res.value.slice(0, 150))
      })
      .catch(err => console.log(err));

    
    fetch('http://api.icndb.com/categories')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setCategories(res.value)
        setFilterCategories(res.value)
      })
      .catch(err => console.log(err));
    
  }, []);


  const handleClick = category => {
    console.log(category)
    let filterCat = [];
    if (category === 'All') { 
      filterCat = this.state.categories;
      console.log(category);
    }
  }

  return (

    <div className="App container">
    
      <div className="row">
  
        <div className="col-md-3 category">
          
          <h4>Joke Cateories</h4>
          
          <div className="category">
              <ul className="list-group">
              {categories.map(category => (
                <a href="#">
                  
                  <li key={category} 
                    className="list-group-item">
                    <button
                      key ={category}
                      className="btn btn-primary outline"
                      value= {filterCategories.includes(category)}
                      name = {category}
                      onClick={()=> handleClick()}>
                        {category}
                    </button>
                  </li>

                 </a>
              ))}
              </ul>
          
          </div>
        </div>

        <div className="col-md-9 jokes">
          <h5>Jokes</h5>
          {jokesLimitShow.map((j, index) => (
          
              <div className="row">
            <div className="card card-joke" id="joke" key={j.id}>
              {j.categories.map(cat => (
              <div key={cat.id}>
                  <button
                    className="btn btn-secondary"
                  >{cat}</button>
              </div>
              ))}
              {j.joke}
            </div>
            </div>
         
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
