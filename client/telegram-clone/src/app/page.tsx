import Form from '@/components/Login-Page/Form';

export default function Home() {
  return (
    <div className="bg-image min-h-screen w-full flex justify-center items-center">
      <div className="card w-[90%] md:w-2/3 lg:w-2/5 bg-white rounded-lg p-8">
        <div className="card-body">
          <Form />
        </div>
      </div>
    </div>
  );
}
