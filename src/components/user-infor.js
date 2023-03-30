import "./user-infor.css"
let User = () =>{

    let Data = [{
        id:1,
        name:"nitesh",
        school:"shah latif model",
        card: "7c87w",
    },
    {
         id:2,
        name:"suraj",
        school:"shah latif model",
        card: "5y48d",

    },
    {
         id:3,
        name:"yash",
        school:"shah latif model",
        card: "02s7rx",
    },
    {
         id:4,
        name:"jujhar",
        school:"shah latif model",
        card: "854en4",
    }
]

   
    return(
        <>
         <h1>student Name</h1>
        
            {Data.map(person => (
                <ul key={person.id}>
                    <li>   <span>name: </span>  {person.name}</li>
                    <li>  <span> school: </span> {person.school}</li>
                    <li>  <span> card Number: </span>   {person.card}</li>

                </ul>
            ))}
        
   
    </>
    

    );
}
export default User