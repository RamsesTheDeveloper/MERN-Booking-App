import { Link } from "react-router-dom";

const Header = () => {
    return <div className="bg-blue-800 py-6">
        <div className="container mx-auto flex justify-between">

            <span className="text-3xl text-white font-bold tracking-tight">
                <Link to="/">MernHolidays.com</Link>
            </span>

            <span className="flex space-x-2">
                <Link to="/sign-in" className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100">
                    Sign In
                </Link>
            </span>

        </div>
    </div>
};

export default Header;

/*

Coming from Layout.tsx

div ) The div in this file holds our Header object.
The background color of our container is assigned to the div's className.


className ) The className attribute in JSX is used to apply CSS Classes to HTML elements.

JSX is the syntax used to write React components.


container div ) The parent div will hold another div.
The container div is going to apply space to the right/left of the content.

The reason that we are adding a container div is to avoid having our content pushed up against the edges of the screen.


span ) The span tag is used to apply style and formatting to a section of text within a larger block of content.

Head over to the Layout.tsx file.

*/