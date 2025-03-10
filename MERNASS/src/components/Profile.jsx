const Profile = ({ name, email }) => {
  return (
    <div className="border p-4 m-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold">Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;
