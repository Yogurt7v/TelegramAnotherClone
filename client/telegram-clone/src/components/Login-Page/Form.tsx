'use client';
import { useState } from 'react';
import Avatar from './Avatar';
import randomAvatar from '@/utils/random-number';
import { handleSubmit } from '@/lib/fetchers';
import { useRouter } from 'next/navigation';

function Form() {
  const [avatarId, setAvatarId] = useState(randomAvatar);
  const route = useRouter();

  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e, route)}>
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
      <button
        className="w-full p-3 bg-blue-500 text-2xl text-white rounded-lg"
        type="submit"
      >
        Войти
      </button>
    </form>
  );
}

export default Form;
