import Card from '../Card/Card';
import Footer from '../Footer/footer';

export default function Cards(props) {
   const {onClose} = props
   const {characters} = props
   return (
      <div className="row mx-5">
         {characters.map((character) => 
         (<Card  characters = {character} onClose={onClose}/>
         ))}
         <Footer/>
      </div>
   );
}
