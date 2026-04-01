import ListItem from "./component/ListItem"
import { loremIpsum } from "lorem-ipsum";
import { AutoSizer, List } from "react-virtualized";
import './App.css'

const App = () => {
  const rowCount = 5000;
  // const listHeight = 800;
  const rowHeight = 50;
  // const rowWidth = 1200;

  function renderRow({index, key, style}) {
    return (
      <ListItem
          key={key}
          name={list[index].name}
          text={list[index].text} 
          image={list[index].image}
          style={style}
        />

    )
  }
  

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
        <AutoSizer>
          {({height, width}) => (
              <List 
          width={width}
          height={height}
          rowHeight={rowHeight}
          rowCount={rowCount}
          rowRenderer={renderRow}
        />
          )}
        </AutoSizer>
      </div>
    </div>
  )
}

export default App

