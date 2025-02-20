import BandMember from '../components/BandMember/BandMember';
import members from '../data/members.json'


const Band = () => {

  console.log(members)



    return(
      <>
        <h1 className="text-white">Band</h1>;
        {
          members.map(member => {
            return(
                <BandMember memberName = {member.name} bio = {member.description} key={member.name}/>
            )
          }
        )
            // console.log(member))
        }
      
      </>


    ) 
  };
  
  export default Band;