import React, { useState } from 'react';
import Axios from 'axios';

import { useRouter } from 'next/router' 

const Users = () => {
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const [img, setImg] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleUserInfo = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('nick', nick);
        formData.append('password', password);
        formData.append('image', img);

        const result = await Axios.post('http://localhost:4000/users', formData);
        router.push('/')
    };

  return (
    <>
        <h2>유저등록</h2>
        <input type='text' placeholder='이름' name='name' onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='닉네임' name='nick' onChange={(e) => setNick(e.target.value)} />
        <input type='text' placeholder='비밀번호' name='password' onChange={(e) => setPassword(e.target.value)} />
        <input type='file' onChange={(e)=> setImg(e.target.files[0])} />
        <div>
            <button onClick={(e)=>handleUserInfo(e)}>등록하기</button>
        </div>
    </>
  )
};

export default Users;