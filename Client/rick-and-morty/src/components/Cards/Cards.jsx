import Card from '../Card/Card';

export default function Cards(props) {
   const {onClose} = props
   const {characters} = props
   return (
   <div>
      <p>
      {characters.map((character) => 
      (<Card  characters = {character} onClose={onClose}/>
      ))}
      </p>
   </div>
   );
}
