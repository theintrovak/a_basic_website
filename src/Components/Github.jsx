import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Github() {
    const { username = "theintrovak" } = useParams(); // dynamic from URL
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [username]);

    if (!user) return <p className="text-center text-orange-500">Loading...</p>;

    return (
        <div className="flex flex-col items-center text-center p-6">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-32 h-32 rounded-full border-4 border-orange-500"
            />
            <h2 className="text-2xl font-bold text-orange-600 mt-4">
                {user.name || user.login}
            </h2>
            <p className="text-gray-700">{user.bio}</p>
            <p className="mt-2 text-sm text-gray-600">
                Followers: <span className="font-bold">{user.followers}</span> | Following:{" "}
                <span className="font-bold">{user.following}</span>
            </p>

            {/* Navigation using React Router */}
            <div className="flex gap-4 mt-6">
                <Link
                    to="/"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    About
                </Link>
            </div>
        </div>
    );
}


