import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
        </div>
    )
}

export default Layout;

/*

Coming from main.tsx

Layout ) Layout.tsx is the main layout for our application.


Arrow Function ) The arrow function returns a Layout object whenever it is invoked.

Meaning that the Function can recreate the same Layout over and over across our application.


div ) Div is a container used to group elements together for styling/layouts.

Div takes up the full width of its parent container.

Head over to the Header.tsx file.

Coming from Header.tsx file, we are going to import the Header.tsx file at the top and we placed the import between the open and closing div tag.

Head over to the App.tsx file.

*/