'use client';
import { useState } from 'react';
import Avatar from './Avatar';
import randomAvatar from '@/utils/random-number';

function Form() {
  const [avatarId, setAvatarId] = useState(randomAvatar);

  return (
    <form className="flex flex-col gap-5">
      <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Ваше имя</span>
          </label>
          <input
            type="text"
            placeholder="Имя пользователя"
            className="input input-bordered w-full p-3 border-gray-400"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Ваш email</span>
          </label>
          <input
            type="email"
            placeholder="Email пользователя"
            className="input input-bordered w-full p-3"
            required
          />
        </div>
      </div>
      <button className="btn">Login</button>
    </form>
  );
}

export default Form;
