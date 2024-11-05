import user from '../media/user.png';
import effort from '../media/effort.png';
import alternatives from '../media/alternatives.png';
import improve from '../media/improve.png';

interface CardProps {
  text: string;
  img: string;
}

const Card = ({ img, text }: CardProps) => (
  <div className="w-1/5 shadow-xl drop-shadow-lg rounded p-1">
    <img src={img} className="h-44 mx-auto" />
    <p className="text-center text-2xl text-slate-800 my-4">{text}</p>
  </div>
);

export const LandingPage = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly">
        <div className="w-1/3">
          <h1 className="text-5xl text-slate-700">
            Discover the users{' '}
            <b className="text-red italic">interaction effort</b> on your web.
          </h1>
        </div>
        <div>
          <img src={user} alt="User interacting" />
        </div>
      </div>
      <div className="flex justify-evenly my-8 mx-4">
        <Card text={'Get an overall score'} img={effort} />
        <Card text={'Compare alternatives'} img={alternatives} />
        <Card text={'Identify improvements'} img={improve} />
      </div>
    </div>
  );
};
