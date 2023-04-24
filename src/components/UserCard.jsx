const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className="grid gap-3 border-2 ">
      <div>
        <img
          className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md item"
          src={user.image_url ? user.image_url : "/images/noProfile.jpg"}
          alt="user image"
        />
      </div>
      <h3 className=" font-bold">
        {user.first_name} {user.last_name}
      </h3>
      <ul>
        <li>
          <h4 className="text-gray-500 text-sm">Correo</h4>
          <span>{user.email}</span>
        </li>
        <li>
          <h4 className="text-gray-500 text-sm">Cumpleaños</h4>
          <span>
            <i className="bx bx-gift"></i>
            {user.birthday}
          </span>
        </li>
        <div className="flex justify-end text-xl">
          <button onClick={() => deleteUser(user.id)}>
            <i className="bx bxs-trash bg-red-500 text-white rounded-md"></i>
          </button>
          <button onClick={() => handleClickEdit(user)}>
            <i className="bx bx-pencil"></i>
          </button>
        </div>
      </ul>
    </article>
  );
};

export default UserCard;
