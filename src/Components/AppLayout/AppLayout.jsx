import ContextProvider from "../ContextProvider/ContextProvider";

const AppLayout = ({ children, NoSidebarEffect }) => {
    return (
        <ContextProvider NoSidebarEffect={NoSidebarEffect}>
            {children}
        </ContextProvider>
    );
};

export default AppLayout;