import BandMember from '../components/BandMember/BandMember';
import members from '../data/members.json'


const Band = () => {

  console.log(members)



    return(
      <>
        <h1 className="text-white"> Meet the Band</h1>;
        {
          members.map((member, index) => {
            const isLeft = index % 2 === 0; //false for odd index
            console.log(isLeft)
            return(
                <BandMember memberName = {member.name} bio = {member.description} url = {member.url} isLeft = {isLeft} key={member.name}/>
            )
          }
        )
            // console.log(member))
        }
      
      </>


    ) 
  };
  
  export default Band;