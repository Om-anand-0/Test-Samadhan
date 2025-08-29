
import type { FC } from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ name, role, image, bio }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto border-4 border-gray-200 shadow-md"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">{role}</p>
      {bio && <p className="mt-3 text-sm text-gray-600">{bio}</p>}

      <div className="mt-4 flex justify-center gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Follow
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition">
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
