import { AvatarProps } from '@/types';
import randomAvatar from '@/utils/random-number';
import Image from 'next/image';

function Avatar({ avatarId, setAvatarId }: AvatarProps) {
  return (
    <div className="avatar cursor-pointer mx-auto mb-5 tooltip">
      <div className=" rounded-full " onClick={() => setAvatarId(randomAvatar)}>
        <Image
          src={`https://avatars.githubusercontent.com/u/${avatarId}`}
          alt="Avatar"
          className="w-32 h-32 rounded-full"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default Avatar;
