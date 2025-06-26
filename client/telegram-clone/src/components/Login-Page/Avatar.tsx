import Image from 'next/image';

function Avatar() {
  return (
    <div>
      <div>
        <Image
          src={'https://avatars.githubusercontent.com/u/97165289'}
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
