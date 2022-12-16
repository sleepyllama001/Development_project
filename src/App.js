// import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import manga from './assets/mangs.json';
import Setters from './searching';
import Card from './box';
// import './assets/images';

manga.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

// function MangaVolume(props) {
//   return (
//       <div className="mangacontainer">
//       <img className="mangapic" src = {props.image}></img>
//       <h2>{props.name}</h2>
//       <h4>{props.description}</h4>
//       <h4>Chapters: {props.chapters}</h4>
//       {/* <h5>{props.categories}</h5> */}
//       {/* {props.categories.map((x) => 
//       (<p>{x}</p>))} */}
//       {props.categories}
      
    
    
//       {/* <button onClick={() => setCount(count + {props,price})}>Add to Cart</button> */}
//       {/* <button onClick={() => setCount(props.varr + props.price)}>Add to Cart</button> */}
//       {/* <button onClick={() => props.cart(props.prices, props.names)}>Add to Cart</button> */}
//       </div>
//   );
// }

function MangaVolume(props) {
  if(props.num%2==0){
    return (
    <div className="mangacontainer">
    <img className="mangapic" src = {props.image}></img>
    <h2>{props.name}</h2>
    <h4>{props.description}</h4>
    <h4>Chapters: {props.chapters}</h4>
    {/* <h5>{props.categories}</h5> */}
    {/* {props.categories.map((x) => 
    (<p>{x}</p>))} */}
    {props.categories}
    
  
  
    {/* <button onClick={() => setCount(count + {props,price})}>Add to Cart</button> */}
    {/* <button onClick={() => setCount(props.varr + props.price)}>Add to Cart</button> */}
    {/* <button onClick={() => props.cart(props.prices, props.names)}>Add to Cart</button> */}
    </div>
);}
else{
  return (
    <div className="mangacontainer2">
    <img className="mangapic" src = {props.image}></img>
    <h2>{props.name}</h2>
    <h4>{props.description}</h4>
    <h4>Chapters: {props.chapters}</h4>
    {/* <h5>{props.categories}</h5> */}
    {/* {props.categories.map((x) => 
    (<p>{x}</p>))} */}
    {props.categories}
    
  
  
    {/* <button onClick={() => setCount(count + {props,price})}>Add to Cart</button> */}
    {/* <button onClick={() => setCount(props.varr + props.price)}>Add to Cart</button> */}
    {/* <button onClick={() => props.cart(props.prices, props.names)}>Add to Cart</button> */}
    </div>
);

}
  
}

function CreateMangas(){
  return(
  manga.map((item, index) => ( 
    <MangaVolume key={index} name={item.name} names={item.name} image={item.image} description={item.description} chapters={item.chapters} categories={item.categories} num={index}/>
  )))
}


function App() {
  const [mama, setMama] = useState(manga);
  const [lister, setLister] = useState([])
  const [chaptercount, setChapterCount] = useState(0)
  const [ummm, setummm] = useState([])

  // const genres = [...new Set(manga.map((Val) => Val.categories))];
  const genres = new Array();
  const checkGenre = new Map();
  for (let i = 0; i < manga.length; i++){
    for(let j = 0; j < manga[i].categories.length; j++){

      // genres.add(manga[i].categories[j])
      if(!checkGenre.has(manga[i].categories[j])){
        checkGenre.set(manga[i].categories[j], true)
        genres.push(manga[i].categories[j])
      }
      
    }
  }
  // const genres = [...new Set(manga.map((Val) => Val.chapters))]


  const filterManga = (genre) => {
    const newManga = mama.filter((newVal) => {
      return newVal.categories.includes(genre)
    })
    setMama(newManga)
  }

  // const filterManga = (genre) => {
  //   const newManga = manga.filter((newVal) => {
  //     return newVal.categories == genre
  //   })
  //   setMama(newManga)
  // }

  // const sortManga = [...mama].sort((a,b) => a.chapters > b.chapters)

  const sortManga = (holder) => {
    const sorted = [...mama].sort((a,b) => a.chapters - b.chapters)
    setMama(sorted)
  }

  const normal = (holder) =>{ setMama(manga)}

  const chapterCounter = (chapter, name, img) => {
    name = name + ", "
    // <img href=img></img>
    ummm.push(img)
    if (document.getElementById("aggregatedimages") == null) {
      let holder = document.createElement("div");
      // document.body.appendChild(holder)
      document.getElementById("buttonCollection").appendChild(holder)
      holder.id = "aggregatedimages";
      for (let i = 0; i < ummm.length; i++){
        let curimg = document.createElement("img");
        curimg.src = ummm[i];
        curimg.className = "minipic"
        // curimg.className = "mangapic"
        document.getElementById("aggregatedimages").appendChild(curimg);
      }
    }
    else{
      document.getElementById("aggregatedimages").remove()
      
      let holder = document.createElement("div");
      // document.body.appendChild(holder)
      document.getElementById("buttonCollection").appendChild(holder)
      holder.id = "aggregatedimages";
      for (let i = 0; i < ummm.length; i++){
        let curimg = document.createElement("img");
        curimg.className = "minipic"
        curimg.src = ummm[i];
        document.getElementById("aggregatedimages").appendChild(curimg);
      }
    }

  

    setLister(lister.concat(name))
    setChapterCount(chaptercount + chapter)

  }

  const chapterClear = (holder) =>{setChapterCount(0)
    if (document.getElementById("aggregatedimages") == null) {
    
    }
    else{
      document.getElementById("aggregatedimages").remove()
    }
  }

  return (
    
    <div className="App">
      {/* <h1>Makima Manga</h1> */}

   

      <div className="header">
      {/* <button class="button-27" role="button">Home</button>
      <button class="button-27" role="button">About Me</button>
      <button class="button-27" role="button">Projects</button> */}
      <img src="/images/marker.png"className="headicon"></img>
      {/* <a href="google.com" className="button-lighter">Home</a> */}
      <a className="button-lighter" href='#paragraph1'>About Project</a>
      {/* <a className="button-lighter" href='#projectportraits'>Projects</a> */}
      <a className="button-lighter" href='#bottom-header'>Contact Me</a>
      </div>

      <div className="titlebar">
        Manga Explorer and Chapter Counter
      </div>
      <div id="sidebar">
        <button className="dropdown">Filters</button>
        <div id="buttonCollection">
        {/* <h3 class="filter-title">Filters!</h3> */}
        <Setters genres={genres} setGenres={setMama} filterItem={filterManga}/>
        <button className="button-27" onClick={sortManga}>Sort by chapter</button>
        <button className="button-27" onClick={normal}>Display All</button>
        <button className="button-27" onClick={chapterClear}>Clear</button>

          <h2>{lister}</h2>
          <h2>{chaptercount}</h2>
        </div>
        
        
      </div>

      <div className="mangas">

      {/* {CreateMangas()} */}
      <Card item={mama} aggre={chapterCounter}/>

      

      {/* manga.map((item,index) {
        if(index%2==0){
          return <MangaVolume key={index} name={item.name} names={item.name} image={item.image} description={item.description} chapters={item.chapters} categories={item.categories}/>
        }
        else{
          return <MangaVolume key={index} name={item.name} names={item.name} image={item.image} description={item.description} chapters={item.chapters} categories={item.categories}/>
        }
      }) */}
      
      
      </div>


      <div className="ReadMe">
        <div id="paragraph1">This project is a basic react app that implements filters and sorting. I chose to base it around manga, which is a fun hobby of mine, and using them as the representation for various types of sorting done throughout the project. </div>
        <div className="paragraph2">The project itself isn’t instrumental on a grand scale, more so it was a fun experience to begin developing with react. I had never used it before, so it took a few attempts to get right, and a previous version can be seen here: </div>
        <div className="paragraph3">Some more specifics of what this basic react app can do. Every manga has a few categories correlated to it, most of them being genres and other qualifiers. Users have the ability to filter based on these categories, stacking filters to find a manga that is exactly what their looking for. Beyond that there is the ability to sort by chapter length, and also an basic chapter counter for add up the amount of chapters that various series have.</div>
        <div className="paragraph4">I was able to grow throughout the process, improving my knowledge of rendering and best articulating what appears on the screen constrained by the demands of the users. Now after taking the course I can imagine a variety of improvements I would love to make if I had the time, but that will be a project for later.</div>
      </div>

      <div id="bottom-header">
          <img class="bottom-icon" src="images/lilac.jpeg"></img>
          <div class="bot-header-div-1">~Contact Information~</div>
          <div class="bot-header-div-2">Email</div>
          <div class="bot-header-div-3">Linkedin</div>
        </div>

    </div>
  );
}

export default App;
