import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './data/data';
import Filmai from './components/filmai';
import Filmai2 from './components/filmai2';
import { useState } from "react";



function App() {
  const image = 0;
  // const [selectedCategory, setSelectedCategory] = useState();
  const filmubaze = data;
  const [pasirinkimas, setPasirinkimas]= useState("Visi");

  const mas = [];
  for (let i = 0; i < filmubaze.length; i++) {
    mas.push(
      <Filmai product={filmubaze[i]}></Filmai>
    );
  };


  const masFiltered = [];
  for (let k = 0; k < filmubaze.length; k++) {
    // const image = <img src="https://picsum.photos/200/200" class="img-fluid rounded" alt="new"/>
    let tmp="https://picsum.photos/300/300#"+Math.random();
    const image2 = <img src={tmp} class="img-fluid rounded" alt="new"/>

    if(mas[k].props.product.category== pasirinkimas) {
      masFiltered.push(
          <Filmai2 product2={filmubaze[k]} image={image2}></Filmai2>

      )
    }
    if(pasirinkimas=="Visi") {
      masFiltered.push(
          <Filmai2 product2={filmubaze[k]} image={image2}></Filmai2>
      )
    }
    // const image2 = <img src="https://picsum.photos/200/200" class="img-fluid rounded" alt="new"/>;
  };
  // console.log(mas[0].props.product.category);
  console.log(masFiltered);
  // console.log(mas[1].props.product.category);
  console.log(image);




  const mas2 = [];
  for (let i = 0; i < filmubaze.length; i++) {
    mas2.push(
      mas[i].props.product.category
    );
  };

  // console.log(mas2);
  // console.log(mas2[4]);


  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let unique = mas2.filter(onlyUnique);
  // console.log(unique);
  // console.log(unique[2]);
  // console.log(unique.length);


  const counts = {};
  // const sampleArray = ['a', 'a', 'b', 'c'];
  mas2.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  // console.log(counts);


  const sortable = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  // console.log(sortable);


  // const obj = { a: 1, b: 2, c: 3 };
  let counter = 0;
  const mas3 = []
  for (const prop in sortable) {
    // console.log(`obj.${prop} = ${sortable[prop]}`);
    mas3.push(
      <div>"{prop}" kategorijoje yra {sortable[prop]} filmų</div>
    );
    counter++
    if (counter == 3) {
      break
    }
  };
  // console.log(mas3);

  // function handleCategoryChange(event) {
  //   setSelectedCategory(event.target.value);
  //   console.log(setSelectedCategory);
  // }

  const paspaudimas=(props)=>{
    setPasirinkimas(props.target.value)
    console.log(props.target.value)
  };
  console.log(pasirinkimas);


  return (
    <div className="bodyBackgroundColor">
      <div class="container-lg">
        <div className='row'>
          <h3 className='text-center text-light my-4'>Kataloge yra <b><i>{unique.length}</i></b> skirtingų kategorijų filmų.</h3>
          <div className='text-light fs-5 fw-bold'>3 plačiausios filmų kategorijos:</div>
          <div className='text-center text-light fs-5'>{mas3}</div>
        </div>
        <div>
          <select style={{width:"200px", height:"50px", fontSize:"20px", background:"#343a40", color:"gold"}}>
            <option value={"Visi"} onClick={paspaudimas}>Visos kategorijos</option>
            <option value={"Documentary"} onClick={paspaudimas}>Documentary</option>
            <option value={"Horror"} onClick={paspaudimas}>Horror</option>
            <option value={"Family"} onClick={paspaudimas}>Family</option>
            <option value={"Foreign"} onClick={paspaudimas}>Foreign</option>
            <option value={"Comedy"} onClick={paspaudimas}>Comedy</option>
            <option value={"Sports"} onClick={paspaudimas}>Sports</option>
            <option value={"Music"} onClick={paspaudimas}>Music</option>
            <option value={"Classics"} onClick={paspaudimas}>Classics</option>
            <option value={"Animation"} onClick={paspaudimas}>Animation</option>
            <option value={"Action"} onClick={paspaudimas}>Action</option>
            <option value={"New"} onClick={paspaudimas}>New</option>
            <option value={"Sci-Fi"} onClick={paspaudimas}>Sci-Fi</option>
            <option value={"Drama"} onClick={paspaudimas}>Drama</option>
            <option value={"Travel"} onClick={paspaudimas}>Travel</option>
            <option value={"Games"} onClick={paspaudimas}>Games</option>
            <option value={"Children"} onClick={paspaudimas}>Children</option>
          </select>

        </div>
        <div className="row col-md-12 mx-auto g-5 pt-5">
          {/*{mas}*/}
          {masFiltered}
        </div>
      </div>
    </div>
  );
}

export default App;
