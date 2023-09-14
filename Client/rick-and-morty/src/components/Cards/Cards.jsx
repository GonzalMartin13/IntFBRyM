import Card from '../Card/Card';


export default function Cards({characters, onClose}) {

   return (
      <div className="row mx-5">
         {characters?.map((character) => 
         (<div className="card text-center my-1 col-3 col-g-6 pt-2 bg-dark" key={character.id}>  
         <Card characters= {character} onClose={onClose}/>
         </div>
         ))}
         
      </div>
   );
}
