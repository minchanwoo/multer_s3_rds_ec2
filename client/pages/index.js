import React from 'react';
import Axios from 'axios';

const Index = ({users}) => {
  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>
            {user.name}
            <p>
              <img src={user.img} width='100px' />
            </p>
          </div>
      })}
    </div>
  )
}

export async function getStaticProps() {

  const res = await Axios.get('http://localhost:4000/users')
  const users = await res.data;
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users
    },
    revalidate: 1
  }
}

export default Index;

