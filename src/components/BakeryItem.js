// TODO: create a component that displays a single bakery item

function BakeryComponent(item){
    return (
        <img
          className={item.name}
          src={require(item.image)}
          alt={item.description}
        />
        //<p>Bakery Item {item.image}</p>
        //console.log(item)
      );
}
export default BakeryComponent;
