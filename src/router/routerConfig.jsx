import { Route, Routes, Navigate } from "react-router";
import { ROUTES } from "./routerConstants";
import HomePage from "../page/homePage";
import BrandPage from "../page/brandPage";
import CreatorPage from "../page/creatorPage";
import LibraryPage from "../page/libraryPage";
import ContactUsPage from "../page/contactUsPage";
import ScrollToTop from "@/app/ScrollToTop";


export const RouterConfig = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route
                    path={ROUTES.HOME}
                    element={<HomePage />}
                />
                <Route
                    path={ROUTES.BRAND}
                    element={<BrandPage />}
                />
                <Route
                    path={ROUTES.CREATOR}
                    element={<CreatorPage />}
                />
                <Route
                    path={ROUTES.LIBRARY}
                    element={<LibraryPage />}
                />
                <Route
                    path={ROUTES.CONTACT}
                    element={<ContactUsPage />}
                />

                <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
            </Routes>

        </>
    );
};