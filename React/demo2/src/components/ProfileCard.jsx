
const ProfileCard = (props) => {
  return (
    <div>
        {props.children}
      <h3>Profile card here </h3>
      <h3>Name : {props.name} </h3>
      <p>Your age is {props.age} </p>
      {props.greeting}
    </div>
  )
}

export default ProfileCard
