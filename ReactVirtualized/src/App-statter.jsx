import ListItem from "./component/ListItem"
import { loremIpsum } from "lorem-ipsum";
import './App.css'

const App = () => {
  const rowCount = 5000;
  

  const list = Array(rowCount).fill()
              .map((values, id) => {
                return {
                  id,
                  name: "Foysal Hossain",
                  image: "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg",
                  text: loremIpsum({
                    count: 1,
                    units: "sentences",
                    sentenceLowerBound: 4,
                    sentenceUpperBound: 8,
                  })

                }
              })

              console.log(list);
              

  return (
    <div className='App'>
      <div className="list">
       {list.map((item) => (
        <ListItem 
          key={item.id}
          name={item.name}
          text={item.text}
          image={item.image}
        />
       ))}
      </div>
    </div>
  )
}

export default App

