import ContextProvider from "../ContextProvider/ContextProvider";

const AppLayout = ({ children }) => {
    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    );
};

export default AppLayout;