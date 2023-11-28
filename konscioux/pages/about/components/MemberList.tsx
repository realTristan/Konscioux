import Member from "./Member";

export default function MemberList(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <Member
        name="Amy Alfred"
        role="Founder/Project Lead"
        image="/images/members/memberphoto-amy.png"
        contact="alfreda@uoguelph.ca"
      />
      <Member
        name="Nathan Stamenov"
        role="Club President"
        image="/images/members/memberphoto-nathan.png"
        contact="nstameno@uoguelph.ca"
      />
      <Member
        name="Yasha Sadeghi"
        role="Club Internal Vice-President"
        image="/images/members/memberphoto-yasha.png"
        contact="ysadeghi@uoguelph.ca"
      />
    </div>
  );
}
