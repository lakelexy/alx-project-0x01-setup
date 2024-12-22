import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xs mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text-lg text-gray-600">@{username}</h3>
      </div>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <div className="mt-4">
        <h4 className="font-semibold">Company</h4>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-500">{company.catchPhrase}</p>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Address</h4>
        <p className="text-gray-600">
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
        <p className="text-gray-600">
          Geo: Lat {address.geo.lat}, Lng {address.geo.lng}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
